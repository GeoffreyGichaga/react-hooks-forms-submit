import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData, setSubmittedData ] = useState([])
  const [errros,setErrors]=useState([])

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault()
    if(firstName >0){
      const formData = {
        firstName:firstName,
        lastName:lastName
      }
  
      const dataArray = [...submittedData,formData]
      setSubmittedData(dataArray)
  
      setFirstName("");
      setLastName("")
      setErrors([])
    }else{
      setErrors(["First name is required"])
    }

  }

  function handleErrors(){
   
      errros.map((error,index)=>{
        return(
          <p key={index} style={{color:"red"}}>{error}</p>
        )
      })
   
  }

  



  const listOfSubmmision = submittedData.map((data,index)=>{
    return(
      <div key={index}>
        <li>
          {data.firstName} {data.lastName}
        </li>

      </div>
    )
  })

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
    
    <p>{errros.length>0 ? 
    errros.map((error,index)=>{
      return(
        <p key={index} style={{color:"red"}}>{error}</p>
      )
    }):null
    
  }</p>


    <h2>Submissions</h2>
    {listOfSubmmision}


    </div>
  );
}

export default Form;
