import React from 'react'
import {Url} from './../UrlContextProvider';
import UrlItem from './UrlItem';
import './UrlContainer.css'




const UrlContainer:React.FC<{urls:Url[]}>=({urls})=>{
  return (
    <ul className='url-parent-container'>
        {urls.map((e,i)=><UrlItem url={e} key={i}/>)}

    </ul>
  )
}
export default UrlContainer;