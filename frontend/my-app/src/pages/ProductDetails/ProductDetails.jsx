import React from 'react'
import "./ProductDetails.scss"
import { useState } from 'react'
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from './../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';

export const ProductDetails = () => {
   const [quantity, setQuantity] = useState(1);
  const [selectedImg,setSelectedImg] = useState("img")
  const id = useParams().id
  const dispatch = useDispatch()

  const {data,loading,error} = useFetch(`/products/${id}?populate=*`)


  return (<>
  <div className="productDetails">
    {loading ? "loading" : (<>
    
    <div className="left">
      <div className="images">
        <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url} onClick={(e)=>setSelectedImg("img")} alt=''/>
        <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url} onClick={(e)=>setSelectedImg("img2")} alt=''/>
        
      </div>
      <div className="mainImg">
        <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes[selectedImg]?.data?.attributes?.url}  alt=''/>
      </div>
    </div>
    <div className="right">
       <h1>{data?.attributes?.title}</h1>
            <span >$ {data?.attributes?.price}</span>
            <p>{data?.attributes?.desc}</p>

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
            <button className='add' onClick={()=>dispatch(addToCart({
              id: data.id,
              title: data.attributes.title,
              desc: data.attributes.desc,
              price: data.attributes.price,
              img: data.attributes.img.data.attributes.url,
              quantity
            }))}>
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
    </>)}
  </div>
  
  
  </>
    
  )
}
