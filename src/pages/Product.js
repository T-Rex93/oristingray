import ProductMod from '../components/ProductMod.js';
import product1 from '../files/Product1.jpg'

export default function Product(){
    document.title = 'Product | Oristingray';
    
    return(
        <div className='content'>
            <div className='content-left'>
                <h1>Product Data</h1>
                <div style={{display:"flex", justifyContent:"space-around"}}>
                    <ProductMod />
                </div>
            </div>
            <div className='content-right'>
                <img src={product1} alt='Product1'/>
            </div>
        </div>
    );
}