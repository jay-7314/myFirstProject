import { useEffect, useState} from "react";


function useLocation(){
    const [pageName, setPageName] = useState<string>("");

    useEffect(()=>{
        setPageName(window.location.pathname);
        const handlePopState = ()=> setPageName(window.location.pathname);
        window.addEventListener("popstate", handlePopState);
        return ()=> window.removeEventListener("popstate", handlePopState);
    },[]);

return {pageName};
}
export default useLocation
