import React, {useEffect} from 'react';
import {Dropdown, Panel} from "rsuite";
import {useDispatch, useSelector} from "react-redux";
import {getUserCarts} from "../state/actions/cartAction";
import {getSingleProduct} from "../state/actions/productAction";

const CartBasket = ({productID, cart}) => {
    const dispatch = useDispatch();
    const productSelector = useSelector(state => state.productState);
    const { product } = productSelector;

    useEffect(() => {
        getSingleProduct(dispatch, productID)
    },[dispatch, productID]);

    useEffect(() => {
        localStorage.cartCount = cart.products.length
    },[cart.products.length])
    return (
        <Panel>
            <Dropdown.Item>
                <div>
                    <p>{product?.title?.slice(0, 20)}</p>
                    <p>Amount: $ {product.price}</p>
                </div>
            </Dropdown.Item>
        </Panel>
    );
};

export default CartBasket;
