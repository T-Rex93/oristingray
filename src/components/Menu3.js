import React from 'react';

function logout(){
    console.log("Logout called");
    localStorage.removeItem("authenticated");
    window.location.href = "http://localhost:3000/";
}

export default function Menu3() {
    let isLoggedIn= false;

    //let authenticated = localStorage.getItem("authenticated");

  return (
    <div>
      <table>
        <tr>
          <td>
            <img src='images/magnifying-icon.png' alt='Magnifying Icon' style={{width : '100px'}}/>
            <p><a href="/tracking">Tracking Original Product</a></p>
          </td>
        </tr>
      </table>
      <button onClick={() => { logout(); } }>Logout </button>
    </div>
  );
}
