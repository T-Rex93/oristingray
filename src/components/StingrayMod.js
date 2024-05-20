import React, { useState } from "react";
import {Link} from "react-router-dom";
import './Form.module.css'

export default function StingrayMod() {
    let [boolCheck, setBoolCheck] = useState(false);
    let [rawId, setRawId] = useState('');
    let [name, setName] = useState('');
    let [country, setCountry] = useState('');

    const [selectedOption, setSelectedOption] = useState('');
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    }
    
    async function submit() {
        if(rawId !== '' && name !== '' && country !== '' && selectedOption !== '')
        {
            setBoolCheck(true);
            let stingray_data = JSON.parse(localStorage.getItem("stingray"));
            if(!stingray_data){
                stingray_data=[]
                localStorage.setItem("stingrays",JSON.stringify(stingray_data));
            }
            let stingray={'id':rawId,'name':name,'country':country,'status':selectedOption};
            stingray_data.push(stingray);
            localStorage.setItem("stingrays",JSON.stringify(stingray_data));
            alert('Data Submitted')
            return;
        }
        else {
            alert('Please fill in all the blanks in the form');
        }
    }

    return(
        <div>
            <table className="table">
                <tr>
                    <th>{/* Text */}</th>
                    <th>{/* Fields */}</th>
                </tr>
                <tr>
                    <td><p>ID:</p></td>
                    <td><input type="text" value={rawId} onChange={(e) => setRawId(e.target.value)} placeholder="rawId" /></td>
                </tr>
                <tr>
                    <td><p>Species Name:</p></td>
                    <td><input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" /></td>
                </tr>
                <tr>
                    <td><p>Country of Origin:</p></td>
                    <td><input type="text" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Country" /></td>
                </tr>
                <tr>
                    <td><p>Status:</p></td>
                    <td><input type="radio" name="options" value="protected" checked={selectedOption === 'protected'} onChange={handleOptionChange} />Protected</td>
                </tr>
                <tr>
                    <td><p></p></td>
                    <td><input type="radio" name="options" value="commercial" checked={selectedOption === 'commercial'} onChange={handleOptionChange} />Commercial</td>
                </tr>
            </table>
            <Link to={(boolCheck ? '/' : '/stingray')}>
                <button type='submit'
                    onClick={
                        () => {
                            (async () => {
                                await submit();
                            })();
                        }
                    }
                > Save
                </button>
            </Link>
        </div>
    );
}

