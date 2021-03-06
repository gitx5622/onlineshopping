import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getSingleProduct } from "../../state/actions/productAction";
import Navbar from "../navbar";
import { Tag, Panel } from 'rsuite';

const ProductDetails = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { productID } = router.query;

    const productSelector = useSelector(state => state.productState);
    const { product } = productSelector;

    useEffect(() => {
        getSingleProduct(dispatch, productID)
    }, [dispatch, productID])
    return (
        <div>
            <Navbar />
            <div style={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
                <div style={{ paddingLeft: "20px", width: "30%" }}>
                    {/* <Image src={productURL} alt="product-details-image" width={300} height={350} /> */}
                    <h3>Product</h3>
                </div>
                <div style={{ width: "70%" }}>
                    <Panel data-test="single-product">
                        <Tag color="orange">{product?.category}</Tag>
                        <h3 >{product?.title}</h3>
                        <h3>{product?.price}</h3>
                        <p>{product?.description}</p>
                    </Panel>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
