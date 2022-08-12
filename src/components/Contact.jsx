import React from 'react'
import '../App.css'

const Contact = () =>{
    return (
        <>
        <div className="container">
            <div className="content">
                <div className="row mtop">   
                    <div className="product-col4">
                        <img src={"./images/log.svg"} alt="contact"/>
                    </div>
                    <div className="sign-col">
                        <div className="form-box">
                            <h2 className="left-">Contact us</h2>
                                <p>Best online store to buy right now, fashion trends that matter. Reviews & clothes: Women's, Men's, Old, Young, children.</p>
                            <ul className="-span">
                                <li>
                                    <a href="https://github.com/FREDVUNI?tab=overview&from=2022-03-01&to=2022-03-31" rel="noreferrer" target="_blank">
                                        <i className="fab fa-facebook"></i> Facebook
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/FREDVUNI?tab=overview&from=2022-03-01&to=2022-03-31" rel="noreferrer" target="_blank">
                                        <i className="fab fa-twitter"></i> Twitter
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/FREDVUNI?tab=overview&from=2022-03-01&to=2022-03-31" rel="noreferrer" target="_blank">
                                        <i className="fab fa-instagram"></i> Instagram
                                    </a>
                                </li>
                                <li>
                                    <i className="fa fa-phone-alt"></i> +234 5367 736538
                                </li>
                                 <li>
                                    <i className="fa fa-phone-alt"></i> +234 5367 736538
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
        </>
    )
}

export default Contact