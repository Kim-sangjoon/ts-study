import React from 'react'
import { Address, Resturant } from './model/Resturant'

interface OwnProps {
    info: Resturant,
    changeAddress(address:Address):void
}

const Store:React.FC<OwnProps> = ({info}) => {
  return (
    <div>
      <div>{info.name}</div>
      <div>{info.category}</div>
      <div>{info.address.city}</div>
    </div>
  )
}

export default Store