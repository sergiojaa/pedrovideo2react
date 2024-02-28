
import './App.css';

function App() {
  
 
  return (
    <div className="App">
     <User name='sergi' age = {18} email='sergi@gmail.com'/>
     <User name='nika' age = {24} email='nika@gmail.com'/>
     <User name='gio' age = {18} email='gio@gmail.com'/>
     <Job salary={10000} position = 'junior developer' company = 'amazon' />
    </div>
  );
}

const User = (props)=>{
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
    </div>
  )
}
const Job = (props) =>{
  return(
    <div>
      <h1>{props.salary}</h1>
      <h1>{props.position}</h1>
      <h1>{props.company}</h1>
    </div>
  )
}
export default App;
