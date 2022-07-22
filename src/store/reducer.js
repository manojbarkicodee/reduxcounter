// import { Reducer } from "redux";
import  {increment, decrement } from './actiontype'
let initial={count:0}

export const reducer=(state=initial.count,action)=>{
    switch(action.type)
    {
       case increment:
           state++
           return state
         case decrement:
             state--
             return state
            default:
                return state
       
    }
}