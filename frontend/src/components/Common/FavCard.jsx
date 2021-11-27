import React from "react";
import Img  from '../../assets/images/logo/like.png'
import Like from '../../assets/images/logo/logo.png'
function FavCard(props){
    return(
        <li style={{ 
           
            width: '80%',
            margin: 'auto',
            height:'auto',
            marginTop: 20,
        
            }} 
        onClick={()=>props.setShow(true)}
        class="card">
        <button> <img src={Like}/> </button>
        <img style={{height:600}} src={Img} alt=""/>
        <div class="fav-btn-wrapper">
            <button class="fav-btn-download">download</button>
            <button class='fav-btn-remove'>remove</button> 
        </div>
    </li>
    )
}

export default FavCard;