import './App.css'
import Header from './components/Header';
import ClassDemo from './components/ClassDemo'
function App() {
  const User = "Mithun Mohandas"
  return (
    <div>
      <Header message={User} />
      <h1 className="App container bg-info p-5">Testing Area</h1>
      <hr className='mt-5' />
      <ClassDemo message={User} />
    </div>
  );
}
export default App;

