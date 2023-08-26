import React, { useState } from 'react';
import Store from './Store';
import {Address, Resturant} from './model/Resturant';
import BestMenu from './BestMenu';
import Fprops from './Fprops';

let data:Resturant = {
  name: '맛있는 식당',
  category: 'western',
  address: {
    city: 'seoul',
    detail: 'detailadd',
    zipCode: 123456
  },
  menu:[
    {name:"rose pasta", price: 2000, category: "PASTA"},
    {name:"steak", price: 3000, category: "STEAK"}
  ]
}

const App:React.FC = () => {
  const [myResturant, setMyResturant] = useState<Resturant>(data);
  const changeAddress = (address:Address) => {
    setMyResturant({...myResturant, address:address})
  }
  const showBestMenuName = (name:string) => {
    return name
  }
  return (
    <div>
      <Store info={myResturant} changeAddress={changeAddress} />
      <BestMenu name="불고기피자" category="피자" price={1000} showBestMenuName={showBestMenuName} comment='아주 맛있군요' />
    </div>
  )
}

export default App