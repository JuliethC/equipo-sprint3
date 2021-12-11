import React,{useEffect,useState} from "react";
import axios from "axios";
import * as ReactBootStrap from "react-bootstrap";

const UserTable =() =>{
    const [posts,setPosts]= useState({blogs:[]})
    
    useEffect(() => {
        const fetchPostList = async ()=>{
            const {data} =await axios(
                "http://localhost:8080/api/users"
                //"https://jsonplaceholder.typicode.com/posts"
            );
            setPosts({blogs:data});
            console.log(data);
        };
        fetchPostList();

    },[setPosts])

    return(
      <div>
       <ReactBootStrap.Table striped bordered hover variant ="dark">
            <thead>
               <tr>
                 
                 <th>Id</th>
                 <th>Nombre</th>
                 <th>Dirección</th>
                 <th>Acciones</th>
               </tr>
            </thead>
            <tbody>
                {posts.blogs && 
                      posts.blogs.map((item)=>(
                       <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name} </td>
                        <td>{item.address}</td>
                        <td><button className="btn btn-primary">
                               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
                                 <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
                               </svg>
                            </button>{"  "}
                            <button className="btn btn-danger">
                               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-x-fill" viewBox="0 0 16 16">
                                 <path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z"/>
                               </svg>
                            </button></td>
                       </tr>
                        ))}
            </tbody>
        </ReactBootStrap.Table>
       </div>
    )
}

export default UserTable;