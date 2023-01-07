import React,{useState} from 'react'

function Searchbar(props) {
  const[Enteredtext,settext]=useState('')
   
  const changeHandler=(event)=>{
    settext(event.target.value);
  }
  
  
  const preventHandler=(e)=>{
          e.preventDefault();
          const res={
            title:Enteredtext,
            
          }
     
    props.onSave(res.title);
    settext('')
    
        }
    
  return (
    <div>
     <form onSubmit={preventHandler}>
      <input onChange={changeHandler} value={Enteredtext} type="text" placeholder='Type someting'/>
      <br/>
      
      <button type="submit" >Search</button>


     </form>

    </div>
  )
}

export default Searchbar
