import React, { useEffect, useRef, useState } from 'react'
import { useDispatchCart,useCart } from './ContextReducer';

export default function Cards(props) {
   
  let dispatch= useDispatchCart();
  let data= useCart()

  const priceRef= useRef();
   let options = props.options;
   let priceOP = Object.keys(options);

   const[qty,setQty]= useState(1)
   const[size,setSize]= useState("")   
   const handleAddToCart = async ()=>{

    let car = []
    for (const item of data){
      if(item.id=== props.item._id){
        car =item ;
        break;
      }
    }
    if (car !== []){
       if(car.size === size){
        await dispatch({type:"UPDATE",id:props.item._id,price: finalPrice,qty: qty})
        return
       }
       else if(car.size !== size){
    

       await dispatch({type:"ADD",id: props.item._id,name: props.item.name,price: finalPrice,qty: qty,size: size})
       return
   }return 
  }//console.log(data)

        await dispatch({type:"ADD",id: props.item._id,name: props.item.name,price: finalPrice,qty: qty,size: size}) 
  }

   let finalPrice=qty* parseInt(options[size]);
   useEffect(()=>{
    setSize(priceRef.current.value)
   },[])

  return (
    <div>
      <div>
        <div className="card m-5" style={{ "width": "auto","maxHeight": "550px" }}>
        <img src={props.item.img} className='card-img-top' alt="React Logo" style={{height:"300px",objectFit:"fill"}}/>
          <div className="card-body">
            <h5 className="card-title fs-4">{props.item.name}</h5>
            <div className="card-text text-muted" >
              {props.item.description}
              <div className='container w-100'>
                  
                  <select className='m-2 h-100  text-white bg-dark rounded ' ref={priceRef} onChange={(e)=>setSize(e.target.value)}>
                    {//options as chrome or matte from backend
                            priceOP.map((data)=>{
                              return <option key={data} value={data}>{data}</option>
                            })                    
                    }
                   </select>

                   <select className='m-2 h-100  text-white bg-dark rounded' onChange={(e)=>setQty(e.target.value)}>
                    {Array.from(Array(6), (e,i)=>{
                      return(
                        <option key={i+1} value={i+1}> {i+1}</option>
                      )
                    })}
                    
                  </select>
                   <div className="h-100 fs-5 ">
                   ₹{finalPrice}/-
                  </div> 

              </div>
              <hr>
              </hr>
              <button className='btn btn-dark btn-outline-success text-white justify-center ms-2' onClick={handleAddToCart}>Add to Cart</button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
