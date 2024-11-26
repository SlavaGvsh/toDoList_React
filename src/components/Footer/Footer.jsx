import React from 'react'

const Footer = () => {
   const year = new Date();
  return (
    <div>Footer {year.getFullYear()}</div>
  )
}

export default Footer