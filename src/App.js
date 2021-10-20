//Style Sheets
import './App.css';

//Components
import AngryButton from './components/AngryButton';
import CounterButton from './components/CounterButton';
import LightSwitchButton from './components/LightSwitchButton';
import TextRepeaterButton from './components/TextRepeatButton';

function App() {
  return (
    <div className={`App`}>
      <h1>Fancy Buttons!</h1>
      <section>
     <AngryButton />
     <CounterButton />
     <LightSwitchButton />
     <TextRepeaterButton />
      </section>
    </div>
  );
}

export default App;
