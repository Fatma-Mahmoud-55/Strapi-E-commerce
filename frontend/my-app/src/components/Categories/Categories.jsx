import React from 'react'
import "./Categories.scss"
import { Link } from 'react-router-dom'

export const Categories = () => {
  return (
    <>
    <div className="categories">
        <div className="col">
            <div className="row">
                <img alt='' src='https://images.asos-media.com/products/asos-design-t-shirt-with-mexico-and-palm-tree-pocket-graphic-print-in-off-white/202824801-1-offwhite?$n_640w$&wid=513&fit=constrain'></img>
                <button>
                    <Link className='link' to="/products/1">
                        Sale
                    </Link>
                </button>
            </div>
            <div className="row">
                <img alt='' src='https://images.asos-media.com/products/only-crew-neck-t-shirt-in-black/201930154-1-black'></img>
                <button>
                    <Link className='link' to="/products/1">
                        Sale
                    </Link>
                </button>
            </div>
        </div>
        <div className="col">
            <div className="row">
                 <img alt='' src='https://images.asos-media.com/products/asos-design-t-shirt-with-mexico-and-palm-tree-pocket-graphic-print-in-off-white/202824801-1-offwhite?$n_640w$&wid=513&fit=constrain'></img>
                <button>
                    <Link className='link' to="/products/1">
                        Sale
                    </Link>
                </button>
            </div>
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                         <img alt='' src='https://images.asos-media.com/products/asos-design-t-shirt-with-mexico-and-palm-tree-pocket-graphic-print-in-off-white/202824801-1-offwhite?$n_640w$&wid=513&fit=constrain'></img>
                <button>
                    <Link className='link' to="/products/1">
                        Sale
                    </Link>
                </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                         <img alt='' src='https://images.asos-media.com/products/asos-design-t-shirt-with-mexico-and-palm-tree-pocket-graphic-print-in-off-white/202824801-1-offwhite?$n_640w$&wid=513&fit=constrain'></img>
                <button>
                    <Link className='link' to="/products/1">
                        Sale
                    </Link>
                </button>
                    </div>
                    </div>
            </div>
            <div className="row">
                 <img alt='' src='https://images.asos-media.com/products/asos-design-t-shirt-with-mexico-and-palm-tree-pocket-graphic-print-in-off-white/202824801-1-offwhite?$n_640w$&wid=513&fit=constrain'></img>
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
