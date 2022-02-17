import React from 'react';
import { Divider, Radio, Modal, Button, toaster, Notification } from "rsuite";
import { getAllCategories, getProducts } from "../state/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "../components/productList";
import Navbar from "../components/navbar";
import { BoxLoading } from 'react-loadingg';
import { getUserCarts } from "../state/actions/cartAction";
import Brand from "../assets/brand.png";
import Image from "next/image";

const Index = () => {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    const [selectedCategory, setSelectedCategory] = React.useState('all');
    const [sortAscending, setSortAscending] = React.useState('');
    const [sortDescending, setSortDescending] = React.useState('');
    const dispatch = useDispatch();
    const productSelector = useSelector(state => state.productState)
    const { products, categories, isLoading } = productSelector;
    const cartSelector = useSelector(state => state.cartState)
    const { carts, isLoading: cartLoading } = cartSelector;

    const filteredProducts = products.filter(product => product.category === selectedCategory)

    React.useEffect(() => {
        getProducts(dispatch, sortAscending || sortDescending)
        getUserCarts(dispatch);
        getAllCategories(dispatch);
    }, [dispatch, sortAscending, sortDescending]);

    if (typeof window !== 'undefined') {
        window.onload = () => {
            setOpen(true);
        }
        window.ononline = () => {
            toaster.push(onlineMessage)
        }
        window.onoffline = () => {
            toaster.push(offlineMessage)
        }
    }
    const onlineMessage = (
        <Notification placement="topStart" style={{ background: 'green' }} type='success' duration={5000}>
            <span style={{ color: 'white' }}>You are back online</span>
        </Notification>
    );
    const offlineMessage = (
        <Notification placement="topStart" style={{ background: 'red' }} type='error' duration={5000}>
            <span style={{ color: 'white' }}>You lost connection to the internet</span>
        </Notification>
    );
    return (
        <div>
            <Navbar itemCart={carts} />
            <div style={{ display: "flex", width: "100%" }}>
                <div style={{
                    width: "20%", height: "93vh", border: "1px solid #4b658433",
                    borderRadius: "5px", marginLeft: "20px", paddingTop: "10px"
                }}>
                    <center><h6>Search Filter</h6></center><br />
                    <div style={{ padding: "10px" }}>
                        <h6 style={{ fontWeight: 500 }}>Search Category to Match</h6><br />
                        <div style={{ fontSize: "16px", display: "flex", flexDirection: 'column' }}>
                            <Radio
                                checked={selectedCategory === 'all'}
                                onClick={() => setSelectedCategory('all')}>All Products</Radio>
                            {categories.map((category, index) => (
                                <div key={index}>
                                    <Radio
                                        checked={category === selectedCategory}
                                        onClick={() => setSelectedCategory(category)}> {category}</Radio>
                                </div>
                            ))}
                            <Divider />
                            <h6 style={{ fontWeight: 500 }}>Sort Products to Match</h6><br />
                            <Radio
                                checked={sortAscending === 'asc'}
                                onClick={() => {
                                    setSortAscending('asc');
                                    setSortDescending('')
                                }}>
                                Ascending
                            </Radio>
                            <Radio
                                checked={sortDescending === 'desc'}
                                onClick={() => {
                                    setSortDescending('desc');
                                    setSortAscending('');
                                }}>
                                Descending
                            </Radio>
                            <Divider />
                            <h6 style={{ fontWeight: 500 }}>Sort Products Limit to Match</h6><br />
                            <div style={{}}>
                                <Radio>3</Radio>
                                <Radio>6</Radio>
                                <Radio>9</Radio>
                                <Radio>12</Radio>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ width: "80%", display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
                    {isLoading && (
                        <BoxLoading />
                    )}
                    {selectedCategory === "all" ? (
                        products.map(product => (
                            <div key={product.id}>
                                <ProductList
                                    product_id={product.id}
                                    title={product.title}
                                    image={product.image}
                                    price={product.price}
                                    rating={product.rating}
                                    category={product.category}
                                />
                            </div>
                        ))
                    ) :
                        filteredProducts.map(product => (
                            <div key={product.id}>
                                <ProductList
                                    product_id={product.id}
                                    title={product.title}
                                    image={product.image}
                                    price={product.price}
                                    rating={product.rating}
                                    category={product.category}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
            <Modal style={{ marginTop: "7em" }} open={open} onClose={handleClose}>
                <Modal.Header>
                    <Modal.Title>
                        <div style={{ display: "flex", gap: "1em" }}>
                            <Image src={Brand} width={50} height={50} alt="brand" />
                            <h4>ONLINE SHOPPING KENYA</h4>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul style={{ fontSize: "18px" }}>
                        <li>This website is integrated using Next JS framework (React JS).</li>
                        <li>The website uses fakeStore API</li>
                        <li>The website is for UI Development and State changes(Redux)</li>
                        <li>The website integrates Paypal API provided by Rapid API</li>
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button data-test="okay-button" onClick={handleClose} appearance="primary">
                        Ok
                    </Button>
                    <Button onClick={handleClose} appearance="subtle">
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Index;
