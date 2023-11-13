import React from 'react'

const CandyListItem = (props) => {
  return (
    <>
        <li id={props.id}>{props.name} - {props.desc} - {props.price} 
            <button onClick={props.buy} id="1" className='btn btn-dark'>buy one</button>
            <button  onClick={props.buy} id="2" className='btn btn-dark m-1'>buy two</button>
            <button onClick={props.buy} id="3" className='btn btn-dark'>buy three</button>
        </li>
    </>
  )
}

export default CandyListItem;