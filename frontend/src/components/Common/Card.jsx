import React,{useState} from "react";
import Like from '../../assets/images/logo/like.png'
import Preview from "./Preview";

function Card(props){
    const [show,setShow]=useState(false);
    
    return (
        <>
        {show?<Preview data={props.data} setShow={setShow}/>:null}
        <li onClick={()=>setShow(!show)}   class="card">
        <button> <img src={Like}/> </button>
        <img src={'https://res.cloudinary.com/dhh2ivhsq/'+props.url} alt=""/>
       </li>
       </>
    )
}

export default Card;