import React from 'react';

type Props = {
  disabled: boolean,
  className: string,
  children: JSX.Element |  string | null,
  style: object,
  onClick: Function,
  callWithEventObject: boolean
}

const Button = (props: Props) => {

  const { 
    children, 
    disabled, 
    className, 
    style,
    onClick,
    callWithEventObject
  } = props;
  

  return (
    <button 
      className={`button ${className}`}
      style={style}
      disabled={disabled}
      onClick={(event) => callWithEventObject ? onClick(event) : onClick()}
    >
      {
        children
      }
    </button>
  )
}

Button.defaultProps = {
  disabled: false,
  callWithEventObject: false,
  className: '',
  style: {},
}

export default Button;