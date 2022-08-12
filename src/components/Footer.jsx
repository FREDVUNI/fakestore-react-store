import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'

const Footer = () =>{
    return(
        <div className="footer">
        <div className="container">
            <div className="row">
                <div className="footer-co11">
                    <h3>About us</h3>
                    <p>Best online store to buy right now, fashion trends that matter. Reviews & clothes: Women's, Men's, Old, Young, children.</p>
                    <p>Best online store to buy right now, fashion trends that matter. Reviews & clothes: Women's, Men's, Old, Young, children.</p> 
                </div>
                <div className="footer-co12">
                    <h3>Links</h3>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/products">Products</Link>
                        </li>
                        <li>
                            <Link to="/sign-up">Register</Link>
                        </li>
                        <li>
                            <Link to="/sign-in">Login</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-co13">
                    <h3>Follow us</h3>
                    <ul>
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
                    </ul>
                </div>
            </div>
            <br/>
            <p className="copyright">Copyright Iconic online store &copy; {( new Date().getFullYear())}</p>
        </div>
    </div>
    )
}

export default Footer