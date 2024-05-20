import SignUpMod from '../components/SignUpMod.js';

export default function SignUp(){
    document.title = 'Sign Up | Oristingray';
    
    return(
        <div className='content'>
            <div className='content-left'>
                <h1> Sign Up </h1>
                <div style={{display:"flex",justifyContent:"space-around"}}>
                    <SignUpMod />
                </div>
            </div>
        <div className='content-right'>
            <img src="Stingray2.jpg"/>
        </div>
        </div>
    );
}