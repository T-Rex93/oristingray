import React,{ useState } from 'react';
import { Link } from "react-router-dom";
import './Form.module.css';

export default function LoginMod({ onLogin }) {

    let [boolCheck, setBoolCheck] = useState(false);

    let [user, setUser] = useState('');
    let [pass, setPass] = useState('');

    async function login(){
        if (localStorage.getItem(user)) {
            setBoolCheck(true);
            localStorage.setItem("authenticated","true");
            window.location.href = "/";
            return;
        } else {
            console.error('Invalid username or password');
        }
    }

    return (
        <div>
            <table>
                <tr>
                    <th>{/* Text */}</th>
                    <th>{/* Fields */}</th>
                </tr>
                <tr>
                    <td style={{ padding: "0px 20px"}}><p>Email</p></td>
                    <td><input type='text' value={user} onChange={(e) => setUser(e.target.value)} placeholder='Email' /></td>
                </tr>
                <tr>
                    <td style={{ padding: "0px 20px"}}><p>Password</p></td>
                    <td><input type='text' value={pass} onChange={(e) => setPass(e.target.value)} placeholder='Passsword' /></td>
                </tr>
            </table>
            <Link to={(boolCheck ? '/' :'/login')}>
                <button style={{marginTop:"2vh", display: "block"}} type='submit'
                    onClick={
                        () => {
                            (async () => {
                                await login();
                            })();
                        }
                    }
                > Login
                </button>
            </Link>
        </div>
    );
}