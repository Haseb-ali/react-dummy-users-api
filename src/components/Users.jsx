import React, { Component,useEffect} from "react";
export const Users=()=>{
    const [users,setUsers]=React.useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos/").then((data)=>{
            data.json().then((res)=>{
                setUsers(res);
                // console.table(res);

                
            })
        })
    },[])
    return(
        <table className="user-table">
            <thead>
                <tr>
                <th>USER ID</th>
                <th>USER TITLE</th>
                <th>COMPLETED</th>
                </tr>
            </thead>    
            <tbody>
                {
                    users.map((user,idex)=>(
                        <tr key={idex}>
                            <td>{user.id}</td>
                            <td>{user.title}</td>
                            <td>{user.completed ?'ture' : 'false'}</td>
                        </tr>
                        
                    ))
                }
                
            </tbody>
        </table>
    );
}