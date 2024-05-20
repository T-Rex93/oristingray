import TrackMod from '../components/TrackMod.js';

export default function Track(){
    document.title = 'Track | Oristingray';
    
    return(
        <div className='content'>
            <div className='content-left'>
                <h1>Welcome to the Tracking Page</h1>
                <div style={{display:"flex", justifyContent:"space-around"}}>
                    <TrackMod />
                </div>
            </div>
            {/*<div className='content-right'>
                <img src="Stingray4.jpg"/>
    </div>*/}
        </div>
    );
}