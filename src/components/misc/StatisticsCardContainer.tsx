import React from 'react'
import data from '../../data/statisticItems';
import StatisticsCard from './StatisticsCard';

 const StatisticsCardContainer:React.FC=()=>{
  return (<div>
   <div className='line'></div>
    <div className='cards-container'>
       
        {data.map((e,i)=>
        <StatisticsCard stat={e} key={i} className={`column-${i+1}`}/>
        )}


    </div>
  </div>
  )
}

export default StatisticsCardContainer;
