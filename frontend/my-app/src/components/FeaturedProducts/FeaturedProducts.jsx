import React, {useEffect, useFetch, useState} from 'react'
import "./FeaturedProducts.scss"
import axios from "axios"
import { Card } from './../Card/Card';

export const FeaturedProducts = ({type}) => {
//      const { data, loading, error } = useFetch(
//      `/products?populate=*&[filters][type][$eq]=${type}`
//   );
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
]
const [resData,setData] = useState([])

useEffect(()=>{
    const fetchData = async ()=>{
        try{
            const data = await axios.get(process.env.REACT_APP_API_URL+"/products" ,
            {
                headers:{
                    Authorization: "bearer" + process.env.REACT_APP_API_TOKEN,
                }
            })
            console.log(data)

        }catch(err){
            console.log(err)
        }

    }
fetchData();
},[])
  return (<>
  <div className="featuredProducts">
    <div className="top">
        <h1>{type} Products</h1>
        <p>Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Vitae earum sapiente architecto? 
            Minima dolores, officiis dolorem animi dolore 
            temporibus, recusandae possimus pariatur corporis 
            tempora nobis mollitia 
            quasi nulla, maxime atque.</p>

    </div>

    <div className="bottom">
        {data.map((item)=>(
        <Card item={item} key={item.id}/>

        )

    )}
    </div>
    
  </div>
  
  
  </>
    
  )
}
