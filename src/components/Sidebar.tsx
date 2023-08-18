import React, {useState} from 'react';
import SidebarNews from "./UI/sidebar/SidebarNews";
import SidebarAlerts from "./UI/sidebar/SidebarAlerts";
import SidebarOverview from "./UI/sidebar/SidebarOverview";
import Icon from "./UI/Icon";

interface Props {
  bar?: string,
  setToggledMenu: (value: boolean) => void
}

function Sidebar({bar, setToggledMenu}: Props) {

  const [toggledIcon, setToggledIcon] = useState(bar)

  const [overviewHover, setOverviewHover] = useState(false)
  const [alertsHover, setAlertsHover] = useState(false)
  const [newsHover, setNewsHover] = useState(false)


  let currentBar: any

  if (toggledIcon === 'news') {
    currentBar = <SidebarNews/>
  } else if (toggledIcon === 'alerts') {
    currentBar = <SidebarAlerts/>
  } else if (toggledIcon === 'overview') {
    currentBar = <SidebarOverview/>
  }

  const handleToggledIcon = (thisToggledIcon: string) => {
    if (toggledIcon === thisToggledIcon) {
      setToggledIcon('')
      setToggledMenu(false)
      currentBar = ''
      return
    }
    setToggledIcon(thisToggledIcon)
  }

  return (
      <div
          className={'   md:w-auto md:flex text-my-white z-50  relative'}>
        {currentBar}
        <div className={" h-full md:sticky absolute top-0 right-0   max-w-sm bg-sidebar-black border-l border-my-gray"}>
          <div className={'w-12 '}>

            <div
                className={`w-12 h-7  fixed top-[43vh]  mb-5 cursor-pointer transition duration-300 ease-in-out hover:scale-125 ${toggledIcon === 'overview' && 'scale-125'}`}
                onClick={() => handleToggledIcon('overview')}
                onMouseEnter={() => setOverviewHover(true)}
                onMouseLeave={() => setOverviewHover(false)}
            >
              <Icon
                  className={'mx-auto'}
                  hasGradient={overviewHover || toggledIcon === 'overview'}
                  height={'28px'}
              >
                <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M20 6h-16v1h16v-1zm0-2h-16v1h16v-1zm0 4h-16v1h16v-1zm0 2h-16v1h16v-1zm-7 2h-9v1h9v-1zm-13-12v19h24v-19h-24zm22 16h-20v-14h20v14zm-6.599 5l2.599 3h-12l2.599-3h6.802z"/>
              </Icon>
            </div>

            <div
                className={`w-12 h-7 fixed top-[50vh]  mb-5 cursor-pointer transition duration-300 ease-in-out hover:scale-125 ${toggledIcon === 'alerts' && 'scale-125'}`}
                onClick={() => handleToggledIcon('alerts')}
                onMouseEnter={() => setAlertsHover(true)}
                onMouseLeave={() => setAlertsHover(false)}
            >
              <Icon
                  className={'mx-auto'}
                  hasGradient={alertsHover || toggledIcon === 'alerts'}
                  height={'28px'}
              >
                <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M19.004 1c-.947 0-1.895.268-2.719.803 3.17 1.218 5.694 3.739 6.914 6.909.534-.823.801-1.77.801-2.717 0-2.761-2.236-4.995-4.996-4.995m-7.004 20c-4.411 0-8.001-3.59-8.001-8 0-4.413 3.59-8.001 8.001-8.001 4.412 0 8.002 3.588 8.002 8.001 0 4.41-3.59 8-8.002 8m10.002-8c0-5.522-4.475-10.001-10.002-10.001-5.523 0-10.001 4.479-10.001 10.001 0 4.316 3.087 10 10.001 10 6.93 0 10.002-5.693 10.002-10m-21.199-4.285c-.535-.824-.802-1.772-.802-2.718 0-2.757 2.233-4.995 4.991-4.995.948 0 1.896.268 2.721.803-3.172 1.217-5.692 3.739-6.91 6.91m12.196 4.285v-5h-1.999v6.998h5.999v-1.998h-4z"/>
              </Icon>
            </div>

            <div
                className={`w-12 fixed top-[57vh]  h-7 cursor-pointer transition duration-300 ease-in-out hover:scale-125 ${toggledIcon === 'news' && 'scale-125'}`}
                onClick={() => handleToggledIcon('news')}
                onMouseEnter={() => setNewsHover(true)}
                onMouseLeave={() => setNewsHover(false)}
            >
              <Icon
                  className={'mx-auto'}
                  hasGradient={newsHover || toggledIcon === 'news'}
                  height={'28px'}
              >
                <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M7 16h13v1h-13v-1zm13-3h-13v1h13v-1zm0-6h-5v1h5v-1zm0 3h-5v1h5v-1zm-17-8v17.199c0 .771-1 .771-1 0v-15.199h-2v15.98c0 1.115.905 2.02 2.02 2.02h19.958c1.117 0 2.022-.904 2.022-2.02v-17.98h-21zm19 17h-17v-15h17v15zm-9-12h-6v4h6v-4z"/>
              </Icon>
            </div>

          </div>
        </div>
      </div>
  );
}

export default Sidebar;