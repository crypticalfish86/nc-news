import './App.css';
import { Header } from './components/Header'
import { NavBar } from './components/Nav-Bar'
import { AlwaysRender } from './components/Always-Render'
import uuid from 'react-uuid';
function App() {
  return (
    <div className="App">
        <Header key={uuid()}/>
        <NavBar key={uuid()}/>
        <AlwaysRender key={uuid()}/>
    </div>
  );
}

export default App;
