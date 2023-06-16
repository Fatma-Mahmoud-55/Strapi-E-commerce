import React from 'react'
import "./List.scss"
import { Card } from './../Card/Card';

export const List = () => {
    const data = [
    {id:1,
    img:"https://us.coca-cola.com/content/dam/nagbrands/us/coke/en/products/coke-zero-sugar/kozs-plp-thumbnail.png",
    img2:"https://m.media-amazon.com/images/I/61XxVmvUUXL.jpg",
    title:"Tiiitle",
    isNew:true,
    oldPrice:19,
    price:12
},
    {id:1,
    img:"https://pyxis.nymag.com/v1/imgs/c3c/028/f79d167d262322a14d41d62d22d4695d77-redness.rsquare.w700.jpg",
    img2:"https://www.drdoppelt.com/wp-content/uploads/clear-nontinted.jpg",
    title:"Tiiitle",
    isNew:true,
    oldPrice:19,
    price:12
},
    {id:1,
    img:"https://us.coca-cola.com/content/dam/nagbrands/us/coke/en/products/coke-zero-sugar/kozs-plp-thumbnail.png",
    img2:"https://m.media-amazon.com/images/I/61XxVmvUUXL.jpg",
    title:"Tiiitle",
    isNew:true,
    oldPrice:19,
    price:12
},
    {id:1,
    img:"https://pyxis.nymag.com/v1/imgs/c3c/028/f79d167d262322a14d41d62d22d4695d77-redness.rsquare.w700.jpg",
    img2:"https://www.drdoppelt.com/wp-content/uploads/clear-nontinted.jpg",
    title:"Tiiitle",
    isNew:true,
    oldPrice:19,
    price:12
},
    {id:1,
    img:"https://pyxis.nymag.com/v1/imgs/c3c/028/f79d167d262322a14d41d62d22d4695d77-redness.rsquare.w700.jpg",
    img2:"https://www.drdoppelt.com/wp-content/uploads/clear-nontinted.jpg",
    title:"Tiiitle",
    isNew:true,
    oldPrice:19,
    price:12
},
    {id:1,
    img:"https://pyxis.nymag.com/v1/imgs/c3c/028/f79d167d262322a14d41d62d22d4695d77-redness.rsquare.w700.jpg",
    img2:"https://www.drdoppelt.com/wp-content/uploads/clear-nontinted.jpg",
    title:"Tiiitle",
    isNew:true,
    oldPrice:19,
    price:12
},
]
  return (<>
  <div className="list">
    {data.map((item)=>(
        <Card item={item} key={item.id}/>
    ))}
  </div>
  
  </>
    
  )
}
