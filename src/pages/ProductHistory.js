import ProdHistoryMod from "../components/ProdHistoryMod.js";

export default function ProductHistory(){
    document.title = 'Product History | Oristingray';
    
    return(
        <div className='content'>
            <div className='content-left'>
                <h1>Product History Data</h1>
                <div style={{display:"flex", justifyContent:"space-around"}}>
                    <ProdHistoryMod />
                </div>
            </div>
        </div>
    );
}