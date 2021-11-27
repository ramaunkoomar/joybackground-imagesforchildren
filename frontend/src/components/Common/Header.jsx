import React from 'react'
import Logo from  '../../assets/images/logo/logo.png'
function Header() {
    return (
      
         <header>
        <div class="main-header">
            <img style={{height: 30}} src={Logo}/> 
            <button type="button" onclick="show(event)" class="menu"><i class="fas fa-bars"></i></button>   
        </div>
        <nav id="sidemenu" class="tags">
            <span onclick="show()" class="close"><i class="fa fa-times" aria-hidden="true"></i></span>
            <ul>
                <li>Nature</li>
                <li>Space</li>
                <li>Books</li>
                <li>Office</li>
            </ul>
            <select style={{background: 'none',fontSize:'16px',marginLeft: '5px'}}>
                <option value="" hidden>Favourites</option>
            </select>
        </nav>
        
    </header>
       
    )
}

export default Header;