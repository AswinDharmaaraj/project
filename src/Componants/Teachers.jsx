import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'

const Read = () => {
    var[Teachers,setTeachers] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:3005/students")
        .then(Response=>{
            console.log(Response.data)
            setTeachers(Teachers=Response.data)
        })
          .catch(err=>console.log(err))
    })
  return (
    <div>
      <typography>Welcome to My App</typography>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Class</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
              {Teachers.map((value,index)=>{
                return<TableRow>
                  <TableCell>{value.name}</TableCell>
                  <TableCell>{value.grade}</TableCell>
                </TableRow>
              })}
            </TableBody>
        </Table>
      </TableContainer>s
    </div>
  )
}

export default Read
