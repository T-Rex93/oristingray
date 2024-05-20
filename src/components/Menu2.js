import React from 'react';

function logout(){
    console.log("Logout called");
    localStorage.removeItem("authenticated");
    window.location.href = "http://localhost:3000/";
}

export default function Menu2() {
    let isLoggedIn= false;

    //let authenticated = localStorage.getItem("authenticated");

  return (
    <div>
      <table>
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
      </table>
      <button onClick={() => { logout(); } }>Logout </button>
    </div>
  );
}
