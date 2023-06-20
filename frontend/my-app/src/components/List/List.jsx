import React from 'react'
import "./List.scss"
import { Card } from './../Card/Card';
import useFetch from './../../hooks/useFetch';

export const List = ({catId,selectedSubCats,maxPrice,sort}) => {
      // const {data,loading,error} = useFetch(`/products?populate=*&[filters][categories][id]=${catId}
      // ${selectedSubCats?.map((item)=>`&[filters][sub_categories][id][$eq]=${item}`)}
      // &[filters][price][$lte]=${maxPrice}&sort=price:${sort}`)
      const {data,loading,error} = useFetch(`/products?populate=*${selectedSubCats?.map((item)=>`&[filters][sub_categories][id][$eq]=${item}`)}&[filters][price][$lte]=${maxPrice}`)
      // const { data, loading, error } = useFetch(
      //   `/products?populate=*${selectedSubCats.map(
      //     (item) => `&[filters][sub_categories][id][$eq]=${item}`
      //   ).join('')}&[filters][price][$lte]=${maxPrice}&[sort]=price:${sort}`
      // );
        
      

      console.log(data)


  return (<>
  <div className="list">
    {loading ? "loading" 
    : data?.map((item)=>(
        <Card item={item} key={item.id}/>

    ))}
  </div>
  
  </>
    
  )
}
