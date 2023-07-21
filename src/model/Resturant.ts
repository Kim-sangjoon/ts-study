// let data = {
//     name: '맛있는 식당',
//     category: 'western',
//     address: {
//       city: 'seoul',
//       detail: 'detailadd',
//       zipCode: 123456
//     },
//     menu:[
//       {name:"rose pasta", price: 2000, category: "PASTA"},
//       {name:"steak", price: 3000, category: "STEAK"}
//     ]
//   }

export type Resturant = {
    name:string;
    category:string;
    address: Address;
    menu: Menu[];
};

export type Address = {
    city:string;
    detail:string;
    zipCode:number;
}

export type Menu = {
    name:string;
    price:number;
    category:string;
}