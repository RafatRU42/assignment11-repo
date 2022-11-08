import logo from './logo.svg';
import toast, { Toaster } from 'react-hot-toast';

import './App.css';

function App() {

  const handleToast =()=>{
    toast.success('This is Toast')
  }

  return (
    <div className="App">
 <h1>I am Rafat</h1>

 <button className="btn">Button</button>
<button onClick={handleToast} className="btn btn-primary">Button</button>
<button className="btn btn-secondary">Button</button>
<button className="btn btn-accent">Button</button>
<button className="btn btn-ghost">Button</button>
<button className="btn btn-link">Button</button>

    </div>
  );
}

export default App;
