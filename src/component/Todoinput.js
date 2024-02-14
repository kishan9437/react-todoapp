import React, { useState } from 'react'
//import './App.css'

export default function Todoinput(props) {
    const [inputText,setInputText]=useState('');
    const handleEnterPress=(e)=>{
        if(e.keyCode===13){
          props.addList(inputText)
          setInputText("")
        }
    }
  return (
    <div className='input-container'>
        <input type='text' className='input-box-todo' placeholder='Enter Your Todo' value={inputText} onChange={e=>{setInputText(e.target.value)}} onKeyDown={handleEnterPress}/>
        <button className='add-btn' onClick={()=>{
            props.addList(inputText)
            setInputText('')
        }}>+</button>
        
    </div>
  )
}
