import React,{useState,useEffect} from 'react'
import Skeleton from 'react-loading-skeleton'
import '../App.css'
import ProductCard from './ProductCard'
import 'react-loading-skeleton/dist/skeleton.css'

const Products = () => {
    let url = 'https://fakestoreapi.com/products'
    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(false)

    useEffect(()=>{
        let loadProducts = true;

        const getProducts = async() =>{
            const res = await fetch(url,{mode: 'cors'})
            setLoading(true)

            if(loadProducts){
                setProducts(await res.json());
                setLoading(false)
            }
            return ()=>{
                loadProducts = false;
            }
        }
        getProducts()
    },[url])

    const Loading = () =>{
        return(
        <>
            <div className="col4 product"> 
                <Skeleton height={350}/>
            </div>
            <div className="col4 product"> 
                <Skeleton height={350}/>
            </div>
            <div className="col4 product"> 
                <Skeleton height={350}/>
            </div>
            <div className="col4 product"> 
                <Skeleton height={350}/>
            </div>
            <div className="col4 product"> 
                <Skeleton height={350}/>
            </div>
            <div className="col4 product"> 
                <Skeleton height={350}/>
            </div>
            <div className="col4 product"> 
                <Skeleton height={350}/>
            </div>
            <div className="col4 product"> 
                <Skeleton height={350}/>
            </div>
            <div className="col4 product"> 
                <Skeleton height={350}/>
            </div>
            <div className="col4 product"> 
                <Skeleton height={350}/>
            </div>
            <div className="col4 product"> 
                <Skeleton height={350}/>
            </div>
            <div className="col4 product"> 
                <Skeleton height={350}/>
            </div>
        </>
        )
    }
    return (
        <div className="container">
            <div className="content">
                <h2 className="title">Featured Products</h2>
                <div className="categories">
                </div>
                <div className="row products">
                { loading ? <Loading/> :
                    products.map((product)=>(
                        <ProductCard product={product} key={product.id}/>
                    ))
                }
                </div>
              </div>
        </div>
    )
}

export default Products
