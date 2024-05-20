import {Link} from 'react-router-dom';
import classes from './NavBar.module.css';

function logout(){
    console.log("Logout called");
    localStorage.removeItem("authenticated");
    window.location.href = "/";
}

export default function NavBar(){
    // add different states to the NavBar later
    let isLoggedin = false;

    let authenticated = localStorage.getItem("authenticated");

    return(
        <header className={classes.header}>
            <h1 className={classes.logo}> </h1>
            <nav>
                <ul>
                    <li><Link style={{padding:"0px"}} to='/'><img style={{ width:"5vw", height:"auto"}} src="./images/stingray-icon.png" /> </Link></li>
                    
                    {authenticated ? <li></li>: <li><Link to='/login'> Login </Link></li>}
                    {authenticated ? <li></li>: <li><Link to='/signup'> SignUp </Link></li>}

                    {authenticated ? <li><Link to='/stingray'> Stingray Data </Link></li> : <li></li>}
                    {authenticated ? <li><Link to='/product'> Product Data </Link></li> : <li></li>}
                    

                    {authenticated ? <li><Link to='/tracking'> Tracking Product </Link></li> : <li></li>}

                    {authenticated ? <li><button style={{border: "0px", background: "rgb(74, 244, 250)" ,fontWeight: "550",fontSize: "larger", padding: "17px", marginLeft: "93vw"}} onClick={()=>{logout()}}> Logout </button></li> : <li></li>}

                    
                </ul>
            </nav>
        </header>
    );
}