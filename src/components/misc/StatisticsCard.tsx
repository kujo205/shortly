
import React from 'react'

import './StatisticsCard.css'

export class Statistics{
    img:string;
    text:string;
    title:string;
    constructor(img:string,text:string,title:string){
        this.title=title;
        this.img=img;
        this.text=text;
    }
}


 const StatisticsCard:React.FC<{stat:Statistics,className:string}>=({stat,className})=>{
  return (
    <div className={`statistics-card ${className}`}>
        <div className='statisctic-img-container'>
            <img src={stat.img}/>
        </div>
        <h4>{stat.title}</h4>
        <p>{stat.text}</p>
    </div>
  )
}
export default StatisticsCard;