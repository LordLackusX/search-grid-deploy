
import React, { useState } from 'react';
import Data from './Data';
import LoadData from './LoadData';

const Search = () => {
 const[filter,setFlilter] = useState('');
 const searchText = (event) => {
    setFlilter(event.target.value);
 }  
 //console.warn(filter)

 //
 let dataSearch = Data.cardData.filter(item =>{ 
 return Object.keys(item).some(key=> item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())   
    )
    
 });

 /* let dataSearchL = LoadData.cardData.filter(item =>{ 
   return Object.keys(item).some(key=> item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())   
      )
      
   }); */



const [noOfElements, setnoOfElements] = useState(0.5);

const slice =  LoadData.cardData.slice(0,noOfElements);



const loadMore = () => {
setnoOfElements(noOfElements + noOfElements );
//this.dataSearch(slice)
}

/* const noResultFound = () => {

} */


return (

   // <h1 className="text-center text-secondary">  Search Filter  </h1>
    
    <section className = "py-4 container">
    <div className = " row justify-content-center ">  
    
    <div className =" col-12 md-6">
        <div className = "mb-3 col-4 mx-auto text-center">
        <h1 className=" text-secondary">  Search Filter  </h1>
        <input type ="text" className = "form-control" value={filter} onChange={searchText.bind(this) }/> 
        </div>    
    </div>
    
    
    {dataSearch.map((item,index)=>{     
     return(   
     <div className = "col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div className = " card p-0 overflow-hidden h-200 shadow ">
       <img src={item.img} className="car-img-top" alt="" />  
       <div className = "card-body">   
       <h5 className = "card-title"> Title: {item.title} </h5>
       <p className = "card-text">  Description: {item.desc} </p>

       </div>
      </div>
     </div>
     )

 
    })}

{slice.map((item,index)=>{     
     return(   
        
     <div className = "col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div className = " card p-0 overflow-hidden h-200 shadow ">
       <img src={item.imgL} className="car-img-top" alt="" />  
       <div className = "card-body">   
       <h5 className = "card-title"> Title: {item.titleL} </h5>
       <p className = "card-text">  Description: {item.descL} </p>

       </div>
      </div>
     </div>
     )

 
    })}

    </div>   

   <buttpn name="" id="" class="btn btn-secondary d-block" href="#" role="button" onClick={() => loadMore()}> Load More  </buttpn> 




    </section>

);
}

export default Search;