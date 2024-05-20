import LoginMod from '../components/LoginMod.js';

export default function Login() {
    document.title = 'Login | Oristingray';
    return(
        <div className='content'>
            <div className='content-left'>
                <h1> Login </h1>
                <div style={{display:"flex",justifyContent:"space-around"}}>
                    <LoginMod />
                </div>
            </div>
            <div className='content-right'>
                <img src="Stingray2.jpg"/>
            </div>
        </div>        
    );
}