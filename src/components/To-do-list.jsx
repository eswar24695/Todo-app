import React from "react";
import {Add,Edit,Delete} from "./action"
const To_do_list=({list,dispatch})=>{
    return(
        <div>
            {list.map((todo,i)=>{
                return(
                    <section className="card" key={`${todo.value}-${i}`}>
                        <section className="notes">{todo.value}</section>
                        <article>
                            <button className="list-btn" onClick={()=>{dispatch({type:Edit,payload:todo})}}>Edit</button>
                            <button className="list-btn" onClick={()=>{dispatch({type:Delete,payload:todo})}}>Delete</button>
                        </article>
                    </section>
                )
            })}
        </div>
    )
}
export default To_do_list