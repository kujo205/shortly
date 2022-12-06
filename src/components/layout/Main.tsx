import React from 'react'
import data from '../../data/statisticItems';
import './Main.css';
import Form from '../forms/Form';
import StatisticsCardContainer from '../misc/StatisticsCardContainer';
import {Statistics} from '../misc/StatisticsCard';

import image from './../../assets/images/illustration-working.svg'



const Main:React.FC=()=>{
  return (
    <main className='main'>
        
        <section className='info-section-container'>
        
            <div className='info-section'>
                <h1>More than just shorter links</h1>
                <p>Build your brand’s recognition and get detailed insights 
  on how your links are performing.</p>
                <button className='btn btn-primary'>Get started</button>
            </div>
            <div className="img-container">
                <img src={image} alt="a person working on computer" id='working-man-img'/>
            </div>
            
        </section>
        <section className='statistics-section'>
            <Form/>
            <h2>Advanced Statistics</h2>
            <p>Track how your links are performing across the web with our 
  advanced statistics dashboard.</p>

            <StatisticsCardContainer/>
        </section>
        <section className='prefooter-section'>
            <h2>Boost your links today</h2>
            <button className='btn btn-primary'>Get Started</button>
        </section>
    </main>
  )
}
export default Main;