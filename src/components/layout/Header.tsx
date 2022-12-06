import React,{useState} from 'react'
import './Header.css';
import logo from './../../assets/images/logo.svg';
import burger from './../../assets/images/burger-button.svg';

const Header: React.FC = () => {

    const[show,setShow]=useState(false);


    return (
        <header className='header'>
            <div id="logo-container" onClick={()=>setShow(pr=>!pr)}>
                <div>
                    <img src={logo} />
                </div>
                <div className='burger-container'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </div>
            <nav className={`navbar ${!show?'hide':''}`}>
                <ul className='navigation'>
                    <li className='btn-secondary'>features</li>
                    <li className='btn-secondary'>pricing</li>
                    <li className='btn-secondary'>resources</li>
                </ul>
                <aside>
                    <button className='btn btn-secondary'>login</button>
                    <button className='btn btn-primary'>sign up</button>
                </aside>

            </nav>

        </header>
    )
}
export default Header;