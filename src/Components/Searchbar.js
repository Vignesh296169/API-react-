import React,{useState} from 'react'
import styles from "./Searchbaar.module.css"
import Card from '../assest/Card'
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
    <Card>
    <div className={styles.search}>
      
     <form onSubmit={preventHandler}>
      <input onChange={changeHandler} value={Enteredtext} type="text" placeholder='Type someting'/>
      <br/>
      
      <button type="submit" >Search</button>


     </form>

    </div></Card>
  )
}

export default Searchbar
