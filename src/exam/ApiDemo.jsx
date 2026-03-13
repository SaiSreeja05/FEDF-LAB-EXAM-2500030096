import React, { useState, useEffect } from 'react'
import axios from 'axios'
export default function ApiDemo() {
  const [data,setData] = useState([])
  const [error,setError] = useState("")

    useEffect(() => {
        axios.get("https://dummy-json.mock.beeceptor.com/posts").then((response) => {
            setData(response.data)
        }).catch((err) => {
            setError(err.message)
        });
       
    }, []);
  return (
    <div style={{marginLeft:"200px"}}>
      <h2 style={{marginLeft:"500px", color:"orange"}}>API Demo</h2>
      {
            error ? <b>{error}</b> :
            data.length == 0 ? 
            <b>Loading</b> :
            <table border="1" cellPadding={8} cellSpacing={2}>
               <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
                <th>Link</th>
               </tr>
               {
                data.map((post,index)=> (
                   <tr key={index}>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                    <td>{post.link}</td>
                   </tr>
                ) )
               }
            </table>
        }
    </div>
  )
}
