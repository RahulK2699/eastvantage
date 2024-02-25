import React from 'react'

type Props = {
  icon: string | any,
  label: string,
  text : any
}

const Details = (props:Props) => {
  const { icon, label, text } = props;
  return (
    <div className='profile__details'>
      <img className='profile__details--icon' src= {icon} alt='details'/>

      <div className='profile__details--info'>
        <p>{label}</p>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Details
