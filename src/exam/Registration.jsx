import React, { useState } from 'react'

export default function Registration() 
{
  const[formdata, setFormData] = useState({
    fullname:"",
    gender:"",
    email:"",
    username:"",
    password:"",
    landArea:"",
    cropType:"",
    contactNo:"",
    location:""
  })
   const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setFormData({
      ...formdata,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingRegistrations = JSON.parse(localStorage.getItem('farmersRegistration')) || []
    const newRegistration = {
      ...formdata,
      id: Math.floor(Math.random() * 9000) + 1000,
    }
    
    existingRegistrations.push(newRegistration)
    
    localStorage.setItem('farmersRegistration', JSON.stringify(existingRegistrations))
    alert('Registered Successfully')
    
    setFormData({
      fullname: '',
      gender: '',
      email: '',
      password: '',
      username: '',
      landArea:'',
      cropType:"",
      contactNo: '',
      location: '',
    })
  }

  return (
    <div style={{marginLeft:"600px"}}>
     <h2>Registration</h2>
     <form onSubmit={handleSubmit} >
      <div>
      Enter Name
      <input 
      type='text'
      name='fullname'
      value={formdata.fullname}
      onChange={handleChange}
      />
      </div>
      <br/>
      <div>
            Gender
            <select
              name="gender"
              value={formdata.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <br/>
          <div>
            Email
            <input
              type="email"
              id="email"
              name="email"
              value={formdata.email}
              onChange={handleChange}
              required
            />
          </div>
          <br/>

          <div>
            Username
            <input
              type="text"
              name="username"
              value={formdata.username}
              onChange={handleChange}
              required
            />
          </div>
          <br/>

          <div>
            Password
            <input
              type="password"
              name="password"
              value={formdata.password}
              onChange={handleChange}
              required
            />
          </div>
          <br/>
          
          <div>
            landArea
            <input
              type="number"
              name="landArea"
              value={formdata.landArea}
              onChange={handleChange}
              required
            />
          </div>
          <br/>

          <div>
            CropType
            <input
              type="text"
              name="cropType"
              value={formdata.cropType}
              onChange={handleChange}
              required
            />
          </div>
          <br/>

          <div>
            ContactNo
            <input
              type="tel"
              name="contactNo"
              value={formdata.contactNo}
              onChange={handleChange}
              required
            />
          </div>
          <br/>

          <div>
            Location
            <input
              type="text"
              name="location"
              value={formdata.location}
              onChange={handleChange}
              required
            />
          </div>
          <br/>
          <div>
            <button type='submit' style={{backgroundColor:"springgreen", marginLeft:"100px"}}>Register</button>
          </div>
     </form>
    </div>
  )
}
