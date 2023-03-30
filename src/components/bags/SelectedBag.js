import React from 'react'
import classes from "./SelectedBag.module.css"

const SelectedBag = (props) => {
  return (
   <>
    <div className={classes.container}>
        
      <div className={classes.image}>
          <img src={props.image} alt={props.name} />
      </div>

      <div className={classes.info}>
        <h3> {props.name}</h3>
        <p style={{marginBottom:'0.5rem'}}><span style={{fontWeight:'bold'}}>Description: </span>{props.description}</p>
        <p style={{marginBottom:'0.5rem'}}><span style={{fontWeight:'bold'}}>Year: </span>{props.year}</p>
        <p><span style={{fontWeight:'bold'}}>Color: </span>{props.color}</p> 
        </div>
      </div>
   </>
  )
}

export default SelectedBag
