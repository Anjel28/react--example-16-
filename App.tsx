//CLASS COMPONENTS -{EXAMPLE}
import React from 'react';
//import MyComponent from './components/MyComponent';
//import Welcome from './components/Welcome';
//import ParentComponent from './components/ParentComponent';
//import ColorBox from './components/ColorBox';
//import Greeting from './components/Greeting';
//import MyBox from './components/MyBox';
//import Counter from './components/Counter';
//import MyCar from './components/MyCar';
//import Dashboard from './components/Dashboard';
//import StatusDisplay from './components/StatusDisplay';
//import Drinks from './components/Drinks';
//import MyForm from './components/MyForm';
//import Select from './components/Select';
//import CustomSelect from './components/CustomSelect';
//import MultiInputForm from './components/MultiInputForm';
import CheckboxExample from './components/CheckboxExample';

function App(){
/*  const options = [
    {value: "apple", label: "Apple"},
    {value: "banana", label: "Banana"},
  ];*/
// const options = [
  //{value: "one", label: "one"},
  //{value: "two", label: "two"},
 //];
 //const [selected, setSelected] = React.useState("one");
return(
<>
<div className="container">
{/*  <MyComponent   />  
  <Welcome name="Anjel" age={25} />
  <ParentComponent />
  <ColorBox  />
  <Greeting  title="Anjel" count={0}/>
  <MyBox />
  <Counter />*
  <MyCar name="Anjel" age={25} />
   <Dashboard ShowDetails />
   <StatusDisplay status= 'loadin g' />
   <Drinks />
   
   <MyForm   />
   <Select  options={options} value={selected} onChange={setSelected}/>
   <CustomSelect options={options} placeholder="choose fruit"/>
   <MultiInputForm />*/}
   <CheckboxExample />
   
</div>
</>
)
}
  


export default App;

