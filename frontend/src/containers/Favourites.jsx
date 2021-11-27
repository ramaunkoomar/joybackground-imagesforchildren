import React,{useState} from 'react'
import FavCard from '../components/Common/FavCard';
import Preview from '../components/Common/Preview';
function Fav() {
    const [show,setShow]=useState(false);
    return (
      <>
       {show?<Preview setShow={setShow}/>:null} 
         <section style={{background: 'none',height: 70}} class="bg-section">
        <div style={{background: 'none'}} class="overlay">
           <div style={{boxShadow: '1px 0px 1px grey'}} class="stripe-white" behavior="" direction="">
             <div class='tag-wrapper'>
               <button>Black Background</button>
               <button>tags1</button>
               <button>tags1</button>
               <button>tags1</button>
               <button>tags1</button>
               <button>tags1</button>
               <button>tags1</button>
               <button>tags1</button>
               <button>tags1</button>
               <button>tags1</button>
               <button>tags1</button>
               <button>tags1</button>
               <button>tags1</button>
               <button>tags1</button>
               <button>tags1</button>
               </div>
   
              
              
           </div> 
        </div>
       </section>


   <div class="search-area">

    <div class="right-area">
        <div class='search-wrapper'>
            <input type="text" placeholder="Search" />
            <button><i class="fa fa-search" aria-hidden="true"></i></button>
        </div>
    </div>
    
       <div class="left-area">
           <span>Favourites</span>
       </div>

    
   </div>

   <ul class="card-wrapper">
   <FavCard setShow={setShow}/>
   <FavCard setShow={setShow}/>
   <FavCard setShow={setShow}/>
   <FavCard setShow={setShow}/>
   </ul>

    <section class="main">
        <button class='more-btn'>Show more</button>

    </section>

      </>
    )
}

export default Fav