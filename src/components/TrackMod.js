import React from 'react';
import { Link } from 'react-router-dom';
//import './Form.module.css';
//import StingrayMod from './StingrayMod.js';
//import ProductMod from './ProductMod.js';

export default function TrackMod() {
    const stingrayData = JSON.parse(localStorage.getItem("stingrays")) || [];
    const productData = JSON.parse(localStorage.getItem("products")) || [];

    return(
        <div>
            <h2>Stingrays</h2>
            {/*<StingrayMod />*/}
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Country of Origin</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {stingrayData.map((stingray) => (
                        <tr key={stingray.id} style={{textAlign:"center"}}>
                            <td>{stingray.id}</td>
                            <td>{stingray.name}</td>
                            <td>{stingray.country}</td>
                            <td>{stingray.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2>Products</h2>
            {/*<ProductMod />*/}
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Raw Material Stingray ID</th>
                    </tr>
                </thead>
                <tbody>
                    {productData.map((product) => (
                        <tr key={product.id} style={{textAlign:"center"}}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.type}</td>
                            <td>{product.rawId}</td>
                            <td><Link to="/product-history"><button>Check History</button></Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
