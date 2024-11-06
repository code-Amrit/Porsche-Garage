import React, { createContext, useContext, useReducer } from 'react'

const CartStateContext= createContext();
const CartDispatchContext=createContext();
const reducer= (state,action)=>{ //actions likne hai yahan like add ,delete
switch (action.type) {
    case "ADD":
        return [...state,{id:action.id,name:action.name,qty:action.qty,size:action.size,price:action.price,img:action.img}]
        
    case "REMOVE":
        let newArr=[...state]
        newArr.splice(action.index,1)
        return newArr;
    case "UPDATE":
        let arr = [...state]
        arr.find((car,index)=>{
            if(car.id === action.id){
                console.log(car.qty,parseInt(action.qty),action.price + car.price)
                arr[index] ={...car,qty : parseInt(action.qty) + car.qty,price:action.price + car.price}
            }
            return arr
        })    
      return arr   
    case "DROP" :
        let empArray=[]
        return empArray
      
    default:
        console.log("Error in Reducer");
}

}

export const CartProvider =({children})=>{
  
    const[state,dispatch]= useReducer(reducer,[]) //first cart will be empty

    return(

    <CartDispatchContext.Provider value={dispatch}>
       <CartStateContext.Provider value={state}>
        {children}
       </CartStateContext.Provider>

    </CartDispatchContext.Provider>

  )
}

export const useCart = ()=> useContext(CartStateContext);
export const useDispatchCart=()=> useContext(CartDispatchContext);