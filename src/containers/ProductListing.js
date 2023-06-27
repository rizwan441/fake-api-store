import React,{useEffect} from "react";
import { useDispatch, useSelector,} from "react-redux";
import axios from "axios";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/ProductAction";
const ProductListing = () => {
    const products = useSelector((state) => state);


    const dispatch = useDispatch();

    
    const FectProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
            console.log(err)
        })
        dispatch(setProducts(response.data))
        
    }

    useEffect(() => {
        FectProducts()
    },[])


    console.log("first",products)
    return (
        <div className="">
            <h1>ProductListing</h1>
            <ProductComponent />
        </div>
    )
    
}
export default ProductListing