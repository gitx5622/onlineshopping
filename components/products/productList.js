import React from 'react';
import Image from 'next/image';
import { useRouter} from "next/router";
import {Rate, Panel, Button} from 'rsuite';

const ProductList = ({product_id, title, price, image, rating }) => {
    const router = useRouter();
    return (
           <Panel bordered style={{width:"250px", marginBottom:"10px"}}>
               <div style={{cursor: "pointer"}} onClick={() => router.push(`/products/${product_id}`)}>
                   <Image src={image} width={300} height={350} alt={title} />
               </div>
               <Rate defaultValue={rating.rate} />
               <h5 style={{cursor: "pointer"}} onClick={() => router.push(`/${product_id}`)}>{title.slice(0, 25)}</h5>
               <h5 style={{color:"#3498FF", fontWeight:700}}>$ {price}</h5>
               <Button style={{width:"100%"}} color="orange" appearance="primary">Add to Cart</Button>
           </Panel>
    );
};

export default ProductList;