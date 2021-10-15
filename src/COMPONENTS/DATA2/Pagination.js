import {React,useState} from 'react'
import Items2 from './Item2'
import "../../STYLING/PageNum.css"
import "../../STYLING/Items2.css"


const Pagination=(props)=>{
    const {Products}=props

    const [currentPage,setcurrentPage]= useState(1);
   const [itemsPerPage,setitemsPerPage]= useState(5);
   const [limitedProduct,setlimitedProduct]=useState(Products)
    
   const pages = [];
   for (let i = 1; i <= Math.floor(props.totalItems() / itemsPerPage); i++) {
               pages.push(i);
               
       }

      
    const pageEvent=(e)=>{


       if(e.target.id==1 || e.target.id==2 || e.target.id==3){
            var items=limitedProduct.length-Number(e.target.id)*itemsPerPage
         if(items>0){

            setlimitedProduct(limitedProduct.slice(0,items))
         }
        
     
        console.log(items)
       }        
      
    }
 
    console.log(limitedProduct)


    const pageNum=pages.map((num)=>{
      

         return ( 
        <li  key={num} id={num} onClick={pageEvent} >
             {num}         
        </li>
         )

    })


    

    return(

   <div >
         {
                    limitedProduct.map( (item)=>{
                    //    console.log(item)
                        return <Items2   
                        item={item}
                        key={Products.id} 
                        Increament={props.Increament} 
                        Decreament={props.Decreament} 
                        delete={props.delete}
                    
                        />
                    } )
                }

        <ul  className="Pagination">
            {pageNum}  
        </ul>
    </div>

     
    )



}

export default Pagination