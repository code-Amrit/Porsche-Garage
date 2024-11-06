import React from 'react'

import { useCart, useDispatchCart } from '../components/ContextReducer'
export default function Cart() {

  let data=useCart();
  let dispatch=useDispatchCart();
  console.log("Cart Data:", data);
  if(data.length === 0)
   {console.log("Cart is empty!");
    return(
      
      <div className='m-5 w-100 text-center fs-3 text-white' > The Cart is Emty! </div>
    )
   }

   const handleCheckOut = async ()=>{
     let userEmail = localStorage.getItem("userEmail");
     let currentDate = new Date().toLocaleString();
     let response = await fetch("http://localhost:5000/api/orderData",{
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body : JSON.stringify({
        order_data:data,
        email : userEmail,
        Order_data: currentDate

      })

    }
     
      );
      console.log("Order Response :",response)
    if(response.status === 200){
      dispatch({type:"DROP"})
    }

    }

    
   

   let totalPrice =data.reduce((total,food)=> total +food.price,0)
  return (
    <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md' >
        <table className='table table-hover '>
          <thead className=' text-white fs-4'>
            <tr>
              <th scope='col' >#</th>
              <th scope='col' >Name</th>
              <th scope='col' >Quantity</th>
              <th scope='col' >Option</th>
              <th scope='col' >Amount</th>
              <th scope='col' ></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr>
                <th scope='row' className='text-white'>{index + 1}</th>
                <td className='text-white'>{food.name}</td>
                <td className='text-white'>{food.qty}</td>
                <td className='text-white'>{food.size}</td>
                <td className='text-white'>{food.price}</td>
                <td ><button type="button" className="btn p-0 btn-white" ><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUx66a7U2kz76VOIb5-sItfpoAseWdJYYA0E4QXYPW-w&s" width={25} height={25} alt="Delete" onClick={() => { dispatch({ type: "REMOVE", index: index }) } } /></button> </td>
                </tr>
            ))}
          </tbody>
        </table>
        <div><h1 className='fs-2 text-white'>Total Price: {totalPrice}/-</h1></div>
        <div>
          <button className='btn bg-success mt-5 ' onClick={handleCheckOut} > Check Out </button>
        </div>
      </div>



    
  )
}