import React, { useState } from 'react'
import "./Products.scss"
import { List } from './../../components/List/List';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

export const Products = () => {
  const catId = parseInt(useParams().id)
  const [maxPrice,setMAxPrice] = useState(1000)
  const [sort,setSort] = useState(null)
  const [selectedSubCats,setSelectedSubCats] = useState([])

  const {data,loading,error} = useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`)
  
  const handleChange = (ev)=>{
    const value = ev.target.value;
    const isChecked = ev.target.checked;
    setSelectedSubCats(
      isChecked ?
      [...selectedSubCats,value]
      : selectedSubCats.filter((item)=>item !==value)
    )

  }
console.log(selectedSubCats)
  return (
    <>
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data?.map((item)=>(
          <div className="inputItem" key={item.id}>
            <input type='checkbox' id={item.id} value={item.id} onChange={handleChange}/>
            <label htmlFor={item.id}>{item.attributes.title}</label>
          </div>
          ))
          }
        </div>
        <div className="filterItem">
          <h2>Filter by Price</h2>
          <div className="inputItem">
          <span>0</span>
          <input type='range' min={0} max={1000} onChange={(ev)=>{setMAxPrice(ev.target.value)}}/>
          <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type='radio' id='asc' value="asc" name='price' onChange={(ev)=>{setSort("asc")}}/>
            <label htmlFor='asc'>Price : Lowest First</label>
          </div>
          <div className="inputItem">
            <input type='radio' id='desc' value="desc" name='price' onChange={(ev)=>{setSort("desc")}}/>
            <label htmlFor='desc'>Price : Highest First</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img 
        alt=''
        className='catImg'
        src='https://media.vogue.co.uk/photos/62dab9ea653f405e4447401c/16:9/w_1920%2Cc_limit/AcielleStyleDuMonde_LFWSS22_DAY2-63.jpg'/>
        <List catId={catId} maxPrice={maxPrice} sort={sort} selectedSubCats={selectedSubCats}
        
        />
      </div>

    </div>
    
    </>
  )
}
