import React,{useEffect,useState} from 'react'
import Card from '../components/Common/Card'
import {useParams} from 'react-router-dom';
import API from '../API';
import {Link} from 'react-router-dom';
function Search() {
    const {tag}=useParams();
    const [data,setData]=useState([]);
    const [search,setSearch]=useState('');
    const [tagOg,setTag]=useState([]);

    useEffect(()=>{
        const api=new API();
        api.getTags()
        .then(res=>setTag(res.results))
        .catch(err=>console.log('err',err))
    },[])


    useEffect(()=>{
        const api=new API();
        api.getImage(tag)
        .then(res=>setData(res.results))
        .catch(err=>console.log(err));


    },[tag])

    const searchCall=()=>{
        if(search=='') return ;
        const api=new API();
        api.getImage(search)
        .then(res=>setData(res.results))
        .catch(err=>console.log(err));

    }


    return (
     <>
         <section style={{background: 'none',height: 70}} class="bg-section">
        <div style={{background: 'none'}} class="overlay">
           <div style={{boxShadow: '1px 0px 1px grey'}} class="stripe-white" behavior="" direction="">
             <div class='tag-wrapper'>
             {tagOg.map((element,index)=>{
                  return <Link  style={{marginLeft:20}} to={'/search/'+element.name}><button>{element.name}</button></Link>
              })}
               </div>
   
              
              
           </div> 
        </div>
       </section>

   <div class="search-area">

    <div class="right-area">
        <div class='search-wrapper'>
            <input value={search} onChange={e=>setSearch(e.target.value)}  type="text" placeholder="Search"/>
            <button onClick={searchCall} ><i class="fa fa-search" ></i></button>
        </div>
    </div>
    
       <div class="left-area">
        {search?<span>Search <b>"{search}"</b> </span>:<span>Search <b>"{tag}"</b> </span>}   
       </div>

    
   </div>

   <ul class="card-wrapper">
    {data.length==0?<div style={{height:5000,textAlign:'center'}}><h1>no data found</h1></div>:null}
   {data.map((element,index)=>{
                return <Card data={element} url={element.image} key={element.id}/>
            })}
   </ul>
 
    <section class="main">
     

    </section>

     </>
    )
}

export default Search