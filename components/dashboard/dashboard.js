import React from 'react';
import ProductDetails from '../products/productDetails';
import Login from '../users/login';


const Dashboard = ({ section }) => {
    const renderOrderPages = () => {
        switch (section) {
            case 'product-details':
                return (
                    <ProductDetails/>
                )
                case 'login':
                    return (
                        <Login/>
                    )
        };
    }
    return (
        <div>
            {renderOrderPages()}
        </div>
    )

}

export default Dashboard;