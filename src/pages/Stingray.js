import StingrayMod from '../components/StingrayMod.js';

export default function Stingray(){
    document.title = 'Stingray | Oristingray';
    
    return(
        <div className='content'>
            <div className='content-left'>
                <h1>Stingray Fish Data</h1>
                <div style={{display:"flex", justifyContent:"space-around"}}>
                    <StingrayMod />
                </div>
            </div>
            <div className='content-right'>
                <img src="Stingray3.png"/>
            </div>
        </div>
    );
}