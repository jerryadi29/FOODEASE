import React, { Component } from 'react'
import Navbar2 from '..//DATA2/Navbar2'

import "C:/Users/adi/projectdemo/src/STYLING/PageNum.css"
import Pagination from '../DATA2/Pagination'




export default class Main2 extends Component {
    constructor(){
        super()
        this.state={Products:
            [   {Title:"Thali",img:"https://image.shutterstock.com/image-photo/indian-food-thali-north-600w-694601056.jpg",Phone:898223221,Price:100,Qty:0,id:0},
                {Title:"jeera rice",img:"https://image.shutterstock.com/image-photo/cumin-rice-jeera-popular-indian-600w-1785410987.jpg",Phone:898223221,Price:200,Qty:0,id:1},
                {Title:"pullao",img:"https://image.shutterstock.com/image-photo/vegetable-pulao-pilaf-yellow-white-600w-401693401.jpg",Phone:898223221,Price:300,Qty:0,id:2},
                {Title:"biryani",img:"https://image.shutterstock.com/image-photo/biryani-indian-asian-rice-meal-600w-1386851531.jpg",Phone:898223221,Price:200,Qty:0,id:3},
                {Title:"halwa",img:"https://image.shutterstock.com/image-photo/gajar-ka-halwa-carrotbased-sweet-600w-759925777.jpg",Phone:898223221,Price:160,Qty:0,id:4},
                {Title:"veg-biryani",img:"https://image.shutterstock.com/image-photo/indian-vegetable-pulav-biryani-made-600w-1067975957.jpg",Phone:898223221,Price:500,Qty:0,id:5},
                {Title:"dosa",Price:120,Qty:0,img:"https://static.toiimg.com/thumb/63841432.cms?width=1200&height=900",id:6},
                {Title:"Pav bhaji",Price:90,Qty:0,img:"https://www.indianhealthyrecipes.com/wp-content/uploads/2014/10/pav-bhaji-recipe.jpg",id:7},
                {Title:"burger",Price:100,Qty:0,img:"https://www.thespruceeats.com/thmb/vJUFf6L4p8y9Cn_1pE9Z7Ua9uok=/3000x2001/filters:fill(auto,1)/indian-style-burger-1957599-hero-01-266103a4bb4e4ee7b5feb4da2d2e99da.jpg",id:8},
                {Title:"panner-tikka",Price:140,Qty:0,img:"https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Neha_Mathur/Achari_Paneer_Tikka_Recipe_Party_Food.JPG",id:9},
                {
                        Title:"chowmin",
                        Price:70,
                        Qty:0,
                       img:"https://greenbowl2soul.com/wp-content/uploads/2019/11/veg-chowmein.jpg",
                    id:10},
            
                    {
                        Title:"pizza",
                        Price:200,
                        Qty:0,
                       img:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-keto-pizza-073-1544039876.jpg?crop=0.668xw:1.00xh;0.233xw,0.00255xh&resize=980:*",
                    id:11},
                    {
                      Title:"pulao",
                      Price:200,
                      Qty:0,
                     img:"https://i2.wp.com/vegecravings.com/wp-content/uploads/2016/07/veg-pulao-recipe-step-by-step-instructions.jpg?fit=3840%2C2992&quality=65&strip=all&ssl=1",
                  id:13},
                  {
                    Title:"Sandwich",
                    Price:110,
                    Qty:0,
                   img:"https://static01.nyt.com/images/2018/08/29/dining/ko-ham-omelet-horizontal/ko-ham-omelet-horizontal-articleLarge.jpg",
                id:14},
                {
                    Title:"fries",
                    Price:125,
                    Qty:0,
                   img:"https://www.thespruceeats.com/thmb/RXb2wiu_t9yJgrlaf4OhlDspPFg=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-make-homemade-french-fries-2215971-hero-01-02f62a016f3e4aa4b41d0c27539885c3.jpg",
                id:15},
                {
                    Title:"hotdog",
                    Price:70,
                    Qty:0,
                   img:"https://cdn.cnn.com/cnnnext/dam/assets/210826215046-hotdog-stock-exlarge-169.jpg",
                id:16},
                {
                    Title:"MilkShake",
                    Price:210,
                    Qty:0,
                   img:"https://www.thespruceeats.com/thmb/AuQtmDWE6Hk0Bi5jNGbaKqR8tvY=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/cookie-milkshake-recipe-305397-hero-01-ae75bd5313724a03ba1b538dc6a1a167.jpg",
                id:17},
            ]

        }
    }
    inc=(props)=>{
        const {Products}=this.state
        // console.log(props)
        const id=props.id
        Products.map( (item)=>{

            if(item.id===id){
                item.Qty+=1
                
            }
        } )

        this.setState({
            Products:Products
        })
        
       
        
     }

    dec=(props)=>{
     
        const {Products}=this.state
        if( props.Qty>0){
        const id=props.id 
        Products.map( (item)=>{
            if(item.id===id){
                item.Qty-=1        
            }
        } )

         this.setState({
             Products:Products
         })
        }
     }
     reset=(props)=>{
        

        const {Products}=this.state

       
        const id=props.id 
      

        Products.map( (item)=>{
            if(item.id===id){
                item.Qty=0
            }
        } )

        this.setState({
            Products:Products
        })

     }
     
   count=()=>{

    const {Products}=this.state

    let c=0;

   Products.forEach( (x)=>{
      c=c+x.Qty;
   } )

   return c;

  }


  totalItems=()=>{

    const {Products}=this.state;
   
    return Products.length

  }




    render() {
        const{Products}=this.state
        return (
            <div className="App2">
                <Navbar2 
                total={this.count()}/>

                
            <Pagination Products={Products} 
            Increament={this.inc}  
            Decreament={this.dec} 
            delete={this.reset} 
            key={Products.id}
            totalItems={this.totalItems}/>
                 
            </div>
        )
    }
}
