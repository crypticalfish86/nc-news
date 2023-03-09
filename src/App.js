import './App.css';
import { Header } from './components/Header'
import { AlwaysRender } from './components/Always-Render'
import uuid from 'react-uuid';
import { Footer } from './components/Footer';
function App() {
  return (
    <div className="App">
        <Header key={uuid()}/>
        <AlwaysRender key={uuid()}/>
        <Footer key={uuid()}/>
    </div>
  );
}

export default App;
