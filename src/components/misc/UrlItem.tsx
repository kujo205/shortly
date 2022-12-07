import React, { useEffect, useRef, useState } from 'react'
import {Url} from './../UrlContextProvider';


 const UrlItem:React.FC<{url:Url}>=({url})=>{
  const mounted=useRef<boolean>(false);
  const [clicked,setClicked]=useState<boolean>(false);
useEffect(()=>{
  
  if(mounted.current&&clicked){
    const timer=setTimeout(()=>{
      setClicked(false)
    },1500);
    return ()=>clearTimeout(timer);
  }else{
    mounted.current=true; 
  }
},[clicked])


const clickHndler=(data:string)=>{
  setClicked(true);
  navigator.clipboard.writeText(data)
}

  console.log()
  return (
    <div>
      <li className='url-container'>
          <div>{url.originalUrl}</div>
          <div className='actions'>
            <div className='shortened-url'>{url.shortenedUrl}</div>
            <button className={`btn btn-primary ${clicked?'clicked':''}`} onClick={clickHndler.bind(null,url.shortenedUrl)}>
              {clicked?'copied!':'copy!'}</button>
            </div>  
        </li>

    </div>
  )
}
export default UrlItem