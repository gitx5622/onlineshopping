import React, {useEffect} from 'react';
import { useDispatch, useSelector} from "react-redux";
import { useRouter} from "next/router";
import { Tag, Panel} from 'rsuite';
import {getSingleProduct} from "../state/actions/productAction";
import Navbar from "../components/navbar";
import Image from "next/image";

const ProductDetails = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const {productID} = router.query;

    const productSelector = useSelector(state => state.productState);
    const { product } = productSelector;
    const productURL = product?.image;
    useEffect(() => {
        getSingleProduct(dispatch, productID)
    }, [dispatch, productID])
    return (
        <div>
            <Navbar/>
            <div style={{display:"flex", flexWrap: "wrap", width: "100%"}}>
                <div style={{paddingLeft:"20px", width: "30%"}}>
                    <Image src={productURL} alt="product-details-image" width={300} height={350} />
                </div>
                <div style={{width:"70%"}}>
                    <Panel>
                    <Tag color="orange">{product.category}</Tag>
                    <h3>{product.title}</h3>
                    <h3>{product.price}</h3>
                    <p>{product.description}</p>
                    </Panel>
                </div>
            </div>
        </div>
    );
};
export default ProductDetails;
