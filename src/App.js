import './App.css';
import { Header } from './components/Header'
import { AlwaysRender } from './components/Always-Render'
import uuid from 'react-uuid';
function App() {
  return (
    <div className="App">
        <Header key={uuid()}/>
        <AlwaysRender key={uuid()}/>
    </div>
  );
}

export default App;
