import './App.css';
import Message from './message.js'
import Greet from './components/Greet'
import Counter from './components/Counter'
import Welcome from './components/Welcome'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponentChild from './components/ParentComponentChild'
import NameList from './components/NameList';

function App() {
  return (
    <div className="App">
      <NameList/>
      <ParentComponentChild/>
      <EventBind/>
      <ClassClick/>
      <FunctionClick/>
      <Welcome/>
      <Counter/>
    <Greet name ="Shubham Singh">
        <p>This is your world</p>
      </Greet>
      <Greet name ="Dhruvi">
        <button>gandu</button>
      </Greet>
    </div>
  );
}

export default App;
