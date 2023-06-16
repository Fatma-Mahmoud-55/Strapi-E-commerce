import React from 'react'
import "./ProductDetails.scss"
import { useState } from 'react'
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

export const ProductDetails = () => {
   const [quantity, setQuantity] = useState(1);
  const [selectedImg,setSelectedImg] = useState(0)

  const images = [
    "https://us.coca-cola.com/content/dam/nagbrands/us/coke/en/products/coke-zero-sugar/kozs-plp-thumbnail.png",
    "https://m.media-amazon.com/images/I/61XxVmvUUXL.jpg"
  ]
  return (<>
  <div className="productDetails">
    <div className="left">
      <div className="images">
        <img src={images[0]} onClick={(e)=>setSelectedImg(0)}/>
        <img src={images[1]} onClick={(e)=>setSelectedImg(1)}/>
      </div>
      <div className="mainImg">
        <img src={images[selectedImg]}/>
      </div>
    </div>
    <div className="right">
       <h1>title</h1>
            <span >$ 123</span>
            <p>Lorem ipsum dolor sit amet consectetur a
              dipisicing elit. Reprehenderit consectetur, facil'
              is, voluptate ab, nostrum quibusdam maxime
               rem doloremque aperiam dolorum est dicta ducimus cum.
               Blanditiis maxime nisi distinctio repellat dolorem!</p>

       <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button className='add'>
              <AddShoppingCartIcon/> ADD TO CART
            </button>
            <div className="links">
              <div className="item">
                <FavoriteBorderIcon/> ADD TO WISH LIST
              </div>
              <div className="item">
                <BalanceIcon/> ADD TO COMPARE
              </div>
            </div>
             <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <span className='hr1'></span>
            
            <div className="info">
              <span>DESCRIPTION</span>
              <span className='hr'></span>
              
              <span>ADDITIONAL INFORMATION</span>
              <span className='hr'></span>
                
              <span>FAQ</span>
            </div>
    </div>
  </div>
  
  
  </>
    
  )
}
