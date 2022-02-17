import React from 'react';
import ProductDetails from '../productDetails';


const Dashboard = ({ section }) => {
    const renderOrderPages = () => {
        switch (section) {
            case 'product-details':
                return (
                    <ProductDetails />
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