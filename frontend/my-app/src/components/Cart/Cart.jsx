import React from 'react'
import "./Cart.scss"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

export const Cart = () => {
    const data = [
    {id:1,
    img:"https://us.coca-cola.com/content/dam/nagbrands/us/coke/en/products/coke-zero-sugar/kozs-plp-thumbnail.png",
    img2:"https://m.media-amazon.com/images/I/61XxVmvUUXL.jpg",
    title:"Tiiitle",
    isNew:true,
    oldPrice:19,
    desc:"sssssssssss",
    price:12
},
    {id:1,
    img:"https://pyxis.nymag.com/v1/imgs/c3c/028/f79d167d262322a14d41d62d22d4695d77-redness.rsquare.w700.jpg",
    img2:"https://www.drdoppelt.com/wp-content/uploads/clear-nontinted.jpg",
    title:"Tiiitle",
    isNew:true,
    oldPrice:19,
    desc:"sssssssssss",
    price:12
}
]
  return (<>
  <div className="cart">
    <h1>Products in your Cart</h1>
    {data?.map(item=>(
    
    <div className='item' key={item.id}>
        <img src={item.img}/>
        <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0,100)}</p>
            <div className="price">
                1 X ${item.price}
            </div>
        </div>
    <DeleteOutlinedIcon className='delete'/>

    </div>))}
    <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
    </div>
    <button>PROCEED TO CHECKOUT</button>
    <span className='reset'>Reset Cart</span>

  </div>
  
  </>
    
  )
}
