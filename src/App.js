//import logo from './logo.svg';
//import './App.css';
import './styles/index.scss';
import Hello from './components/Hello'
import Card from './components/Card'
import JsExemple from './components/JsExemple'
import Effect from './Hooks/Effect'
import Header from './components/Header'
import Rooting from './components/Rooting'

function App() {
  return (
    <div className="App">
      <div>
        <Header/>

        <Rooting/>

        <Hello name="Pauline"/>

        <Card title="Texte de titre" desc="petite description"/>

        <JsExemple /> 

        <Effect/> 


      </div>
    </div>
  );
}
export default App;
