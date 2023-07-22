import React from 'react'
import { Menu } from './model/Resturant'

interface OwnProps extends Menu {
  showBestMenuName(name:string):string
}

const BestMenu:React.FC<OwnProps> = ({name, category, price, showBestMenuName}) => {
  return (
    <div style={{display:'flex'}}>
      <div>{name}</div>
      <div>{category}</div>
      <div>{price}</div>
      <div>{showBestMenuName('동네피자')}</div>
    </div>
  )
}

export default BestMenu