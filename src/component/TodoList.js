import React from 'react'

export default function TodoList(props) {
  return (
    <div>
        <li className='list-item'>
            {props.item}
            <span className='icons'>
                <i className="fa-solid fa-trash-can icons-delete" 
                onClick={e=>{
                    props.delete(props.index)
                }}></i>
            </span>
        </li>
    </div>
  )
}
