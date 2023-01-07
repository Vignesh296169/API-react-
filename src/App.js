
import './App.css';
import Searchbar from './Components/Searchbar';
import ImageList from './Components/ImageList';
import SearchImage from './Api';
import React,{useState} from 'react';


function App() {
  const [images,setimages]=useState([])
  // here enter details take from input bar after that we pass that in api as parameter
 const savehandler=async (item)=>{
  
   const retur= await SearchImage(item);
  //  now we sent that data to image list component
       setimages(retur)
 }
 
  return (
    <div className="App">
      <Searchbar onSave={savehandler}/>
      <ImageList images={images}/>
      <footer>
        <section><em>-Vignesh</em></section>
     
      </footer>
    </div>
  );
}

export default App;
// first create three component files