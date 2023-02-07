import './App.css';
import { Header } from './components/Header'
import { NavBar } from './components/Nav-Bar'
import { AlwaysRender } from './components/Always-Render'
function App() {
  return (
    <div className="App">
        <Header/>
        <NavBar/>
        <AlwaysRender/>
    </div>
  );
}

export default App;
