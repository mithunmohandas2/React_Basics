import './App.css'
import Header from './components/Header';
import ClassDemo from './components/ClassDemo'
import Counter from './components/Counter';
import Employees from './Employees'


//functional component
function App() {
  const User = "Mithun Mohandas";
  const EmpData = [
    {name : 'Elon', age: 46 , email:"elonmusk@tesla.com"},
    {name : 'Mark', age: 43, email:"markzuckerberg@facebook.com"},
    {name : 'Steve', age: 88, email:"stevejobs@apple.com"},
    {name : 'Bill', age: 74, email:"billgates@microsoft.com"},
    {name : 'Mukesh', age: 65, email:"mukeshambani@reliance.in"},
  ]
  

  return (
    <div>
      <Header message={User} />
      <div className='row'>
        <div className="col-md-6">
          <Counter title={"Counter One"} />
        </div>
        <div className="col-md-6">
          <Counter title={"Counter Two"} />
        </div>
      </div>
      <hr className='mt-5' />
      <h1 className='text-center my-3'>Employee Data</h1>

      {/* javascript map method */}
      { EmpData.map((obj,index)=>{
        return(
          <Employees key={index} {...obj} /> // using spread operator 
        )

      }) }


      <hr className='mt-5' />
      <ClassDemo message={User} />
    </div>
  );
}
export default App;

