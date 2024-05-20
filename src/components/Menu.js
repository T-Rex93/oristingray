import React from 'react';

function logout(){
    console.log("Logout called");
    localStorage.removeItem("authenticated");
    window.location.href = "http://localhost:3000/";
}

export default function Menu() {
    let isLoggedIn= false;

    //let authenticated = localStorage.getItem("authenticated");

  return (
    <div>
      <table>
        <thead>
          <tr>
          <th>{/* Icons */}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td>
            <img src='images/stingray-icon.png' alt='Stingray Icon' style={{width : '100px'}}/>
            <p><a href="/stingray">Stingray Fish Data</a></p>
          </td>
        </tr>
        <tr>
          <td>
            <img src='images/handbag-icon.png' alt='Handbag Icon' style={{width : '100px'}}/>
            <p><a href="/product">Stingray Leather Fashion Product</a></p>
          </td>
        </tr>
        <tr>
          <td>
            <img src='images/magnifying-icon.png' alt='Magnifying Icon' style={{width : '100px'}}/>
            <p><a href="/tracking">Tracking Original Product</a></p>
          </td>
        </tr>
        </tbody>
      </table>
      <button onClick={() => { logout(); } }>Logout </button>
    </div>
  );
}
