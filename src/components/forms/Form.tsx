import React,{useEffect, useRef,useState} from 'react'
import './Form.css';
import { useGlobalContext} from '../UrlContextProvider';

 const Form:React.FC=()=>{
  const {state:{error}}=useGlobalContext();
  const [showError,setShowError]=useState<boolean>(false);

  useEffect(()=>{
    if(error){
      setShowError(true);
      const timer=setTimeout(()=>{
        setShowError(false);
      },3000);
      return ()=>clearTimeout(timer);

    }
  },[error])

  const input = useRef<HTMLInputElement>(null);

  const {fetchHandler,state}=useGlobalContext();


  const submitHandler=(e:React.FormEvent)=>{
    e.preventDefault();
    fetchHandler(input.current!.value);
    input.current!.value='';
  }  

  return (<form className='form' onSubmit={submitHandler}>
    <input type="text" className={showError?'invalid':''} placeholder={showError?`${state.message}`:'Shorten a link here...'} ref={input}/>
    <input type='submit' className='btn btn-primary' value='Shorten it!'  />



  </form>
    
  )
}
export default Form