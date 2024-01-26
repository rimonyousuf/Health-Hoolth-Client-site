import { useEffect } from "react"

const useTitle = title => {
    useEffect(()=>{
        document.title = `${title}-Health Hoolth`;
    },[title])
}

export default useTitle;