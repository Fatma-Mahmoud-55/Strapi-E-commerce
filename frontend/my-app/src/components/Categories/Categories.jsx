import React from 'react'
import "./Categories.scss"
import { Link } from 'react-router-dom'

export const Categories = () => {
  return (
    <>
    <div className="categories">
        <div className="col">
            <div className="row">
                <img alt=''
                 src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
                />
              
                <button>
                    <Link className='link' to="/products/1">
                        WOMEN
                    </Link>
                </button>
            </div>
            <div className="row">
                <img alt='' 
                src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
                />
                <button>
                    <Link className='link' to="/products/2">
                        WOMEN
                    </Link>
                </button>
            </div>
        </div>
        <div className="col">
            <div className="row">
                 <img alt='' 
                   src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
                 />
                <button>
                    <Link className='link' to="/products/1">
                        MEN
                    </Link>
                </button>
            </div>
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                         <img alt='' 
                         src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
                         />
                <button>
                    <Link className='link' to="/products/1">
                        MEN
                    </Link>
                </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                         <img alt=''
                         src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"/>
                <button>
                    <Link className='link' to="/products/1">
                        Sale
                    </Link>
                </button>
                    </div>
                    </div>
            </div>
            <div className="row">
                 <img alt='' 
                 src="https://i.pinimg.com/564x/a1/e7/36/a1e736c3d081a517fca0875a08f30c46.jpg"/>
                <button>
                    <Link className='link' to="/products/1">
                        Sale
                    </Link>
                </button>
            </div>
        </div>
     
    </div>
    
    </>
  )
}
