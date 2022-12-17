import React,{useReducer,useState} from "react";
import To_do_list from "./To-do-list";
import {Add,Edit,Delete} from "./action"
const To_do=()=>{
    const [todo,setTODO]=useState({value:"",order:""});
    const [isAdd,setAdd]=useState(true);

    const reducer=(state,action)=>{
        switch(action.type){
            case Add:
                const updatedState=[...state,{value:todo.value,order:state.length+1}];
                setTODO({value:"",order:""});
                return updatedState;
            case Edit:
                let statecopy=[...state];
                if(isAdd){
                    setAdd(false);
                    setTODO(action.payload)
                }else{
                    statecopy.forEach((st)=>{
                        if(st.order === todo.order){
                            st.value = todo.value;
                        }
                    })
                    setAdd(true);
                    setTODO({value:"",order:""});
                }
                return statecopy;
            case Delete:
                let newState = state.filter((st)=>{
                    return st.order !== action.payload.order
                })
                return newState
            default:
                return state;
        }
    }
    const [state,dispatch]=useReducer(reducer,[]);
    const handleDispatch=()=>{
        if(isAdd){
        if(todo.value!=""){
        dispatch({type:Add})
        }
        }
        else{
            if(todo.value!="")
            dispatch({type:Edit})
        }
    }
    return(
        <div className="container">
           <h1>To Do List</h1>
           <div className="input-div">
            <textarea id="task" rows={3} cols={30} onChange={(event)=>{setTODO({...todo,value:event.target.value})}} value={todo.value}></textarea>
            <div className="btn-div"><button id="btn" onClick={()=>{handleDispatch()}}>{isAdd?"Save":"Edit & Save"}</button></div>          
           </div>
            <To_do_list list={state} dispatch={dispatch}/>
        </div>
    )
}
export default To_do;