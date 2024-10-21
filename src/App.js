
import './App.css';
import Counter from './Components/Counter';
import IncreaseCounter from "../src/Components/IncreaseCounter"
import DecreaseCounter from './Components/DecreaseCounter'
import IncreaseByTwoCounter from '../src/Components/IncreaseByTwoCounter';
function App() {
  return (
    <div class="App">
      <Counter></Counter>
      <IncreaseCounter/>
      <DecreaseCounter/>
      <IncreaseByTwoCounter/>
    </div>
  );
}

export default App;
