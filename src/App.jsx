import './App.css';
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenido a mi tienda" />
    </div>
  );
}

export default App;
