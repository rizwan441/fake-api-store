import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products)


    const renderList = products.map((product) => {
        const {id,title,category,image,price}= product
        return (
            <div className="four colum wide" key={id}>
                <Link to= {`/product/${id}`}>
            <div className="ui link cards">
                    <div className="image">
                        <img src={image} alt="ia"/>
               </div>
                <div className="content">
                        <div className="header">{title}</div>
                        <div className="meta price">${price }</div>
                </div>
            </div>
                </Link>
        </div>
        )
    })



    return (
        <div>
            {renderList}()
        </div>
        
    )
    
}
export default ProductComponent