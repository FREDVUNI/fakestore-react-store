import React from 'react'

const Ratings = ({value,text}) => {
    return (
        <div className="rating">
            {
                [1,2,3,4,5].map((rate,index)=>{
                    return(
                        <i key={index} className={
                            value + 1 === rate + 0.5 ?
                            "fa fa-star-half-alt":
                            value >= rate ? "fa fa-star":
                            "far fa-star"
                        }>
                        </i>
                    )
                })
            }
            <span style={{"marginLeft":10}}>{text && text}</span>
        </div>
    )
}

export default Ratings
