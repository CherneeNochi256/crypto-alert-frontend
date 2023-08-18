import React, {useEffect, useRef, useState} from 'react';
import CoinGeckoFullCoinInfo from "../models/coin/coinGecko/CoinGeckoFullCoinInfo";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import {addCoinAlert} from "../features/auth/authSlice";
import ApiError from "../models/ApiError";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import CoinAlertRequest from "../models/coin/CoinAlertRequest";
import {CoinAlert} from "../models/coin/CoinAlert";
import {useAppDispatch} from "../hooks/reduxHooks";

const CREATE_COIN_ALERT_ENDPOINT = 'coins'
const DESIRED_PRICE_REGEX = /^(0|[1-9]\d*)(\.\d+)?$/

interface Props {
  coinDesc: CoinGeckoFullCoinInfo
}

function AlertForm({coinDesc}: Props) {
  const axiosPrivate = useAxiosPrivate();
  const dispatch = useAppDispatch();

  const [sendToEmailToggled, setSendToEmailToggled] = useState(false)
  const [desiredPrice, setDesiredPrice] = useState('')
  const [isValidDesiredPrice, setIsValidDesiredPrice] = useState(false)

  const errRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState('');

  const successRef = useRef(null);
  const [successMessage, setSuccessMessage] = useState('');


  useEffect(() => {
    setIsValidDesiredPrice(DESIRED_PRICE_REGEX.test(desiredPrice));
    setErrorMessage('');
    setSuccessMessage('')
  }, [desiredPrice])


  const onSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();


    const coinAlert: CoinAlertRequest = {
      coinId: coinDesc.id,
      desiredPrice: Number(desiredPrice),
      sendOnEmail: sendToEmailToggled,
      startPrice: coinDesc.market_data.current_price.usd,
      image: coinDesc.image.small

    }
    console.log(coinAlert)
    try {
      const coinAlertResponse = await axiosPrivate.post<CoinAlert>(CREATE_COIN_ALERT_ENDPOINT, coinAlert);

      if (coinAlertResponse.data.id) {
        coinAlertResponse.data.seen = true
        setSuccessMessage('Coin alert successfully created!')
        setErrorMessage('')
        dispatch(addCoinAlert(coinAlertResponse.data))
      }

    } catch (error: unknown) {

      const registrationError = error as ApiError;
      setErrorMessage(registrationError.response.data.message)
    }
  }

  return (
      <div>
        <div className={'text-4xl pb-12 font-bold'}>
          CREATE ALERT
        </div>
        <p ref={errRef}
           className={errorMessage ? "block bg-red-600 text-white opacity-50 rounded-2xl p-2 mb-2" : "hidden"}
           aria-live="assertive">
          {errorMessage}
        </p>
        <p ref={successRef}
           className={successMessage ? "block bg-green-600 text-white opacity-50 rounded-2xl p-2 mb-2" : "hidden"}
           aria-live="assertive">
          {successMessage}
        </p>
        <form onSubmit={onSubmit} className={'flex flex-col pb-24'}>
          <input type="text"
                 id="username"
                 autoComplete="off"
                 onChange={(e) => setDesiredPrice(e.target.value)}
                 value={desiredPrice}
                 required
                 aria-invalid={isValidDesiredPrice ? "false" : "true"}
                 aria-describedby="uidnote"
                 className=" mb-4  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 placeholder="Enter desired price here!"/>
          <p id="uidnote" className={desiredPrice && !isValidDesiredPrice ? "block text-red-600 pb-4" : "hidden"}>
            <FontAwesomeIcon icon={faInfoCircle} className={'pr-2'}/>
            Desired price should be higher then zero.<br/>
            It must not contain letters, underscores, only dots are allowed.
          </p>

          <div className={''}>
            <label className="relative inline-flex items-center mb-4 cursor-pointer">
              <input type="checkbox"
                     onClick={() => setSendToEmailToggled(!sendToEmailToggled)}
                     value=""
                     className="sr-only peer"/>
              <div
                  className="w-11  h-6 bg-gray-200 rounded-full peer  dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gradient-to-tr from-indigo-800 via-purple-800 to-pink-500"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Send on email too</span>
            </label>
          </div>

          <button
              disabled={!desiredPrice || !isValidDesiredPrice}
              className="  mt-4 flex max-w-[150px] justify-center  rounded-full p-2  bg-gradient-to-tr from-indigo-800 via-purple-800 to-pink-500 shadow-lg shadow-shadow-color ">
            <p className={"my-auto"}>Submit!</p></button>
        </form>

      </div>

  );
}

export default AlertForm;