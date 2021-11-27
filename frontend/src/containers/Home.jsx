import React,{useEffect,useState} from "react";
import Card from "../components/Common/Card";
import API from "../API";
import {Link} from 'react-router-dom'


function Home(){
    const [images,setImages]=useState({results:[]});
    const [tag,setTag]=useState([]);
    const [current,setCurrent]=useState(1);
    const [search,setSearch]=useState('')

    useEffect(()=>{
        const api=new API();
        api.getTags()
        .then(res=>setTag(res.results))
        .catch(err=>console.log('err',err))
    },[])

    useEffect(()=>{
        const api= new API();
        if(current!==1){
            api.getImages(current)
            .then(res=>{
                let prevResult=images.results
                res.results.map((element)=>{
                    prevResult.push(element)
                })
                setImages({...images,result:prevResult,next:res.next})
            })
            .catch(err=>console.log('err',err))
        }
        else{
           
            api.getImages(current)
            .then(res=>setImages(res))
            .catch(err=>console.log('err',err))
        }
      
    },[current])

    console.log(images);
    return(
        <>
        <section class="bg-section">
        <div class="overlay">
           <div style={{boxShadow: '1px 0px 1px grey'}} class="stripe-white" behavior="" direction="">
             <div class='tag-wrapper'>
              {tag.map((element,index)=>{
                  return <Link  style={{marginLeft:20}} to={'/search/'+element.name}><button>{element.name}</button></Link>
              })}
              
               </div>
   
              
              
           </div> 
            <div class="content-area">
               <div class="content-wrapper">
                    <span id="title1">Find Your</span>
                    <span id="title2">BackGround</span>
                    <div class="input-wrapper">
                        <input value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Type here..." class="search-area" />
                        <Link  to={'/search/'+search}><i class="fas fa-search"></i></Link>
                       </div>
               </div>
            </div>
        </div>
       </section>
        <ul class="card-wrapper">
            {images.results.map((element,index)=>{
                return <Card  url={element.image} key={element.id}/>
            })}
            
        </ul>

        <section class="main">
           {images.next? <button onClick={()=>setCurrent(current+1)} class='more-btn'>Show more</button>:null}
        </section>

</>


    )
}

export default Home;