import React, { useEffect,useState } from "react";
import "./Alert.css";


const Alart = () => {
    const [isLoading,setIsLoading]=useState(true);


    useEffect(()=>{ 
         const timer=setTimeout(()=>{
             setIsLoading(false)
             return ()=>clearTimeout(timer)
         },4000)
 
     },[])
 
    

    return (
        <div className={isLoading && "alert"}>
      {isLoading && <h2>با سلام ! برای دیدن نمونه کار به علت محدودیت اینترنت حتما از روشن بودن وی پی ان خود اطمینان حاصل فرمایید</h2>}
    </div>
    );
};

export default Alart;