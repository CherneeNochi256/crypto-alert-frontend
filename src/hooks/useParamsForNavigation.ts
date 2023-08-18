import {useEffect} from "react";

const useParamsForNavigation = (location: any) => {
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const scrollTo = queryParams.get('scrollTo');

    if (scrollTo) {
      const element = document.getElementById(scrollTo);
      if (element) {
        element.scrollIntoView({behavior: 'smooth'});
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.search]);
}
export default useParamsForNavigation