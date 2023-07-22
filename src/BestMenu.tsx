import React from 'react'
import { Menu } from './model/Resturant'

interface OwnProps extends Menu {

}

const BestMenu:React.FC<OwnProps> = ({name, category, price}) => {
  return (
    <div>
      <div>{name}</div>
      <div>{category}</div>
      <div>{price}</div>
    </div>
  )
}

export default BestMenu