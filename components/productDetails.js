import React from 'react';
import Image from 'next/image';

const ProductDetails = ({productURL}) => {
    return (
        <div style={{paddingLeft:"20px", width: "30%"}}>
            <Image src={productURL} alt="product-details-image" width={300} height={350} />
        </div>
    );
};

export default ProductDetails;
