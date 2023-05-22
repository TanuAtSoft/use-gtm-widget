import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Testing App for GTM</h1>
      <div className='product-page-container' onClick={()=> alert("clicked")}>
        this is product page container
      </div>
    </div>
  );
}

export default App;
