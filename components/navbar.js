import React, {useEffect, useState} from 'react';
import { RiShoppingBasketFill } from 'react-icons/ri';
import {Button, Divider, Dropdown, Badge} from "rsuite";
import Brand from '../assets/brand.png';
import Image from 'next/image';
import {useRouter} from "next/router";
import CartBasket from "./cartBasket";

const Navbar = ({itemCart}) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [cartItemLength, setCartItemLength] = useState('');
    const router = useRouter();
    useEffect(() => {
        const userToken = localStorage.token && JSON.parse(localStorage.token);
        if (userToken) {
            setLoggedIn(true);
        }else {
            setLoggedIn(false);
        }
        const cartLength = localStorage.cartCount;
        setCartItemLength(cartLength)
    }, [])
    return (
        <div>
        <div style={{fontSize:"20px", paddingLeft:"20px", paddingRight:"20px", display: 'flex', justifyContent:'space-between'}}>
            <div style={{display:"flex", paddingTop:"5px"}}>
                <Image src={Brand} width={50} height={50} alt="brand"/>
                <h5>ONLINE SHOPPING <br/>KENYA</h5>
            </div>
            <div className="middle-links">
                <ul style={{cursor:"pointer", display: 'flex', gap:"2em", listStyle: 'none', paddingTop:"10px",}}>
                    <li onClick={()=> router.push('/')}>Products</li>
                    <li onClick={()=> router.push('/')}>Living</li>
                    <li onClick={()=> router.push('/')}>Style</li>
                    <li onClick={()=> router.push('/')}>Decor</li>
                </ul>
            </div>
            <div style={{display:"flex", gap:"3em", paddingTop:"10px"}}>
                {loggedIn ? (
                            <Dropdown trigger='click' style={{background: "white", padding: "0px"}} icon={
                                <Badge color="blue" content={cartItemLength}>
                                    <RiShoppingBasketFill size={30}/>
                                </Badge>}
                            >
                                {itemCart?.map((cart) => (
                                        cart?.products.map((product) => (
                                            <div key={product.productId}>
                                                <CartBasket
                                                    productID={product.productId}
                                                    cart={cart}
                                                />
                                            </div>
                                        ))
                                    ))}
                            </Dropdown>
                    ) :
                    <RiShoppingBasketFill size={35}/>
                }
                <div>
                    {loggedIn && (
                        <Button
                            color="orange"
                            appearance="primary"
                            onClick={() => {
                                localStorage.clear();
                                router.push('/user/login')
                            }}
                        >
                            Logout
                        </Button>
                    )}
                    {!loggedIn && (
                        <Button
                            color="orange"
                            appearance="primary"
                            onClick={() => router.push('/user/login')}
                        >
                            Login
                        </Button>
                    )}

                </div>
            </div>
        </div>
            <Divider style={{marginTop:"10px"}}/>
        </div>
    );
};
export default Navbar;