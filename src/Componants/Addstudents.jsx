import { Button,Typography,TextField, } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Addstudents = () => {
    var[students,setstudents] = useState({
        id:"",
        name:"",
        grade:""
    })
    const handlechange = (e)=>{
        const {name,value} = e.target
        setstudents({...students,[name]:value})
        console.log(students)
    }
    const saveData=()=> {
        console.log("button clicked")
        axios.post("http://localhost:3005/students",students)
        .then(response=>{
            alert("Succesfully Added")
        })
        .catch(error=>{
            alert("Failed")
        })
    }
  return (
    <div>
        <br></br>
        
        <br></br>
        
        <br></br>   
       <Typography varient='h2'>New Students</Typography>
       <TextField label='id' varient='outlined' name='id' value={students.id} onChange={handlechange}/><br></br><br></br>
       <TextField label='Name' varient='outlined' name="name" value={students.name} onChange={handlechange}/><br></br><br></br>
       <TextField label='Grade' varient='outlined' name="grade" value={students.grade} onChange={handlechange}/><br></br><br></br>
    <Button varient='contained' color='secondary' onClick={saveData}>SUBMIT</Button>
    
    </div>
  )
}

export default Addstudents
