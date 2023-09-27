import { useState } from "react"
import'../Componants/course.css'

const Course = () => {
  const[cn,setcn]=useState('');
  const[d,setd]=useState('');
  const[e,sete]=useState('');
  const[error,seterror]=useState("")

  const readcn =(event) =>{
    event.preventDefault();
    setcn(event.target.value)
    console.log(cn)
  }


  const readd =(event) =>{
    event.preventDefault();
    setd(event.target.value)
    console.log(d)
  }

  const reade =(event) =>{
    event.preventDefault();
    sete(event.target.value)
    console.log(e)
    
  }
const checkerror =(event) => {
    
    if(cn.trim()==='' || d.trim() ==='' || e.trim()==='')
     {
         seterror(true);
         return;
     }
}
const readdata =(event) =>{
  event.preventDefault();

  const myobj ={
    cn:cn,
    dr:d,
    fee:e,
}
console.log(myobj);

fetch("https://aswinproject1-4acc2-default-rtdb.firebaseio.com/Item.json",
  {
    method: "POST",
    body: JSON.stringify(myobj),
    headers: {
      "Content-Type": "application/json"
    },
  }
);
} 
const viewdata =(event) =>{
  event.preventDefault();
  fetch("https://aswinproject1-4acc2-default-rtdb.firebaseio.com/Item.json").then((response) => {
    // console.log(response);
    return response.json();
  }).then((data) => {
    console.log(data);
  })
}


  return (
    <div>
        <form align='center'>
         

    
     <h1 text align='center' className="header">COURSE REGISTRATION</h1> 

<p text align='center'>
     Course Name <input type="textbox" className="Name" placeholder="NAME" onChange={readcn}/></p>
     <p text align='center'>Duration <input type="textbox" className="Text" placeholder="TEXT" onChange={readd}/></p>
     <p text align='center'> Fee Amount <input type="number" className="Date" placeholder="AMOUNT" onChange={reade}/></p>
     <button className="b1" type="submit" onClick={readdata}><b>SAVE</b></button>
      
     <button className="b2" type="submit" onClick={viewdata}><b>VIEW</b></button>
     
     </form>
     {error && 'Error occurs'}
       </div>
  )
}

export default Course
