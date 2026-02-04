import './App.css';
import RojarComp from './components/RojarComp';
import NicksonComp from './components/NicksonComp';
import CounterComp from './components/CounterComp';
import ToggleImage from './components/ToggleImage';
 import ChangeImage from './components/ChangeImage';

function App() {
  return (
    <div className="App">
      <RojarComp fname="Rojar" lname="Nickson" email="rojar@gmail.com" contact={9087685650} city="Chennai"/><hr></hr>
      <NicksonComp fname="Rojar" lname="Nickson" email="rojar@gmail.com" contact={9087685650} city="Chennai"/><hr/>
      <CounterComp/><hr></hr>

      <ToggleImage/><hr></hr>
      <ChangeImage/>


    </div>
  );
}

export default App;
