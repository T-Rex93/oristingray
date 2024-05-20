import React, { useState } from "react";
import {Link} from "react-router-dom";
import './Form.module.css'

export default function ProductMod() {
    let [boolCheck, setBoolCheck] = useState(false);
    let [id, setId] = useState('');
    let [name, setName] = useState('');
    let [rawId, setRawId] = useState('');

    const [selectedOption, setSelectedOption] = useState('');
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    }
    
    async function submit() {
        if(id !== '' && name !== '' && rawId !== '' && selectedOption !== '')
        {
            setBoolCheck(true);
            let product_data = JSON.parse(localStorage.getItem("product"));
            if(!product_data){
                product_data=[]
                localStorage.setItem("products",JSON.stringify(product_data));
            }
            let product={'id':id,'name':name,'rawId':rawId,'type':selectedOption};
            product_data.push(product);
            localStorage.setItem("products",JSON.stringify(product_data));
            alert('Data Submitted')
        } else {
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
                    <td><input type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder="Id" /></td>
                </tr>
                <tr>
                    <td><p>Name:</p></td>
                    <td><input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" /></td>
                </tr>
                <tr>
                    <td><p>Type:</p></td>
                    <td><input type="radio" name="options" value="bag" checked={selectedOption === 'bag'} onChange={handleOptionChange} />Bag</td>
                </tr>
                <tr>
                    <td><p></p></td>
                    <td><input type="radio" name="options" value="shoes" checked={selectedOption === 'shoes'} onChange={handleOptionChange} />Shoes</td>
                </tr>
                <tr>
                    <td><p></p></td>
                    <td><input type="radio" name="options" value="others" checked={selectedOption === 'others'} onChange={handleOptionChange}/>Other</td>
                </tr>
                <tr>
                    <td><p>Raw Material Stingray ID:</p></td>
                    <td><input type="text" value={rawId} onChange={(e) => setRawId(e.target.value)} placeholder="rawId" /></td>
                </tr>
            </table>
            <Link to={(boolCheck ? '/' : '/product')}>
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