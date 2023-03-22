import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Read = () => {
    var[students,setstudents] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:3005/students")
        .then(Response=>{
            console.log(Response.data)
            setstudents(students=Response.data)
        })
          .catch(err=>console.log(err))
    })
    const deleteStudents=(id)=>{
      console.log("delete clicked"+id)
      axios.delete("http://localhost:3005/students/"+id)
      .then(response=>{
        alert("deleted")
        window.location.reload(false)
      })
    }

  return (
    <div>
      <typography>Welcome to My App</typography>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Grade</TableCell>
                    <TableCell>delete</TableCell>
                    <TableCell>Update</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
              {students.map((value,index)=>{
                return<TableRow>
                  <TableCell>{value.id}</TableCell>
                  <TableCell>{value.name}</TableCell>
                  <TableCell>{value.grade}</TableCell>
                  <TableCell><Button onClick={()=>deleteStudents(value.id)}>DELETE</Button></TableCell>
                  <Button variant='contained' color='primary'>Update</Button>
                </TableRow>
              })}
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Read
