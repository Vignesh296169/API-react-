
import './App.css';
import Searchbar from './Components/Searchbar';
import ImageList from './Components/ImageList';
import ImageShow from './Components/ImageShow';
function App() {
 const savehandler=(signal)=>{
  console.log(signal);
 }
 
  return (
    <div className="App">
      <Searchbar onSave={savehandler}/>
      <ImageList/>
    <ImageShow/>
    </div>
  );
}

export default App;
// first create three component files