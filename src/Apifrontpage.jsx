import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
import Header from "./header";
require('dotenv').config();
const getting_api=process.env.REACT_APP_BHARATNEWS_API_KEY;
const Frontpage=()=>{
   const[name,setName]=useState("");
    const[title,setTitle]=useState("");
    const[image,setImage]=useState("");
    const[publishedAt,setPublishedAt]=useState("");
    const[goto,setgoto]=useState("");
    const[num,setNum]=useState(0);
useEffect(
    ()=>{
        async function myyapi(){
            const myApi= await axios.get(getting_api);
        
             try{
             setName(myApi.data.articles[num].source.name);
             setTitle(myApi.data.articles[num].title);
             setImage(myApi.data.articles[num].urlToImage);
             setPublishedAt(myApi.data.articles[num].publishedAt);
             setgoto(myApi.data.articles[num].url);
             }
             catch(err){
                 alert(err);
             }
        }
        myyapi();
    },[num]
);


    return(<>
<div className="mydiv">
 <Header/>
<div className="outerdiv">
<div className="innerdiv">
<img className="slidingImage"src={image} alt="Sorry it is not Available" />
</div>
<div className="info">
<h3>{title}</h3>
<h4>{publishedAt}</h4>
<h4>{name}</h4>



</div>

<div className="btndiv">
<button className="button01" onClick={()=>{num>0?setNum(num-1):setNum(0)}}>previous</button>
<button className="button02" onClick={()=>{setNum(num+1)}}>next</button>

<a href={goto}><button className="button03">Goto</button></a>
</div>
</div>
</div>
</>
    );
}
export default Frontpage;