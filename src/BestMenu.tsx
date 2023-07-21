import React from 'react'
import { Menu } from './model/Resturant'

interface OwnProps extends Menu {
  
}

const BestMenu:React.FC<OwnProps> = () => {
  return (
    <div>BestMenu</div>
  )
}

export default BestMenu