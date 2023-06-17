import React from 'react'
import "./FeaturedProducts.scss"
import { Card } from './../Card/Card';
import useFetch from '../../hooks/useFetch';


export const FeaturedProducts = ({type}) => {
     const { data, loading, error } = useFetch(
     `/products?populate=*&[filters][type][$eq]=${type}`
  );


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
        {error ? "Something Wrong !!!" :loading?"loading":data?.map((item)=>(
        <Card item={item} key={item.id}/>

        )

    )}
    </div>
    
  </div>
  
  
  </>
    
  )
}
