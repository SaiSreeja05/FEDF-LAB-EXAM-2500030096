import React, { useState, useEffect} from 'react'

export default function RegisteredFarmers() {
  const [users, setUsers] = useState([])
  
    useEffect(() => {
      const data = JSON.parse(localStorage.getItem("farmersRegistration")) || []
      setUsers(data)
    }, [])
  
  return (
    <div style={{marginLeft:"400px"}}>
      <h2 style={{marginLeft:"200px", color:"orangered"}}>Registered Farmers</h2>
        <table border="1" cellPadding={8} cellSpacing={2}>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>landArea</th>
            <th>CropType</th>
            <th>Contact</th>
            <th>Location</th>
          </tr>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.fullname}</td>
              <td>{user.email}</td>
              <td style={{textAlign:"center"}}>{user.username}</td>
              <td style={{textAlign:"center"}}>{user.landArea}</td>
              <td>{user.cropType}</td>
              <td>{user.contactNo}</td>
              <td>{user.location}</td>
            </tr>
          ))}
      </table>
    </div>
  )
}
