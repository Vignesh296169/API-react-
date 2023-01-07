import React from 'react'

function Searchbar(props) {


    props.onSave()
  return (
    <div>
     <form>
      <input type="text" placeholder='Type someting'/>
      <br/>
      
      <button type="submit" >Search</button>


     </form>

    </div>
  )
}

export default Searchbar
