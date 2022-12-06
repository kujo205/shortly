import React from 'react'
import './Form.css';

 const Form:React.FC=()=>{
  return (<form className='form'>
    <input type="text" placeholder='Shorten a link here...' />
    <input type='submit' className='btn btn-primary' value='Shorten it!'  />



  </form>
    
  )
}
export default Form