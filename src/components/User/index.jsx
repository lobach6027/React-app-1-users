import React from 'react'
import s from './style.module.css'


export default function User(props) {
  return (
     <div className={s.card}>
      <img className={s.foto} src={props.foto} alt="personal-foto" />
        <div className={s.info}>
        {props.experience ? (<span className={s.exp}> has work experience</span>):""} 
        <h2>{props.name}</h2>
        <p>{props.city}</p>
        <span>{props.age} y.o.,  </span>
        <span>{props.job} </span>
        </div>
    </div>

  )
}
