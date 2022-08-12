import React from 'react'
import '../App.css'

const PageNotFound = () =>{
    return(
        <>
           <div className="container">
               <div className="content">
                   <div className="row row2">
                    <div className="product-col4">
                            <img src={"../images/404.svg"} alt="product"/>
                        </div>
                        <div className="col-single">
                            <h3 id="details">Page was not found.</h3>
                        </div>
                    </div> 
               </div>
           </div>
        </>
    )
}

export default PageNotFound