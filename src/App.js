import './App.css';
import Button from '../src/components/Button.js'
import { ReactComponent as Logo } from '../src/assets/images/logo.svg'

function App() {
  return (
    <div className="App">
      <span className="logo">
        <Logo />
      </span>
      <Button name="Go to meal list" />
      <Button name="Saved meals" />
    </div>

  );
}

export default App;
