import "./App.css";
import { TodoWrapper } from "./components/TodoWrapper";

function App() {
  return (
    <div className='App'>
      <img
        className='background'
        src='images/background.png'
        alt='todolistguy'
      ></img>
      <div className='image-wrapper'></div>
      <TodoWrapper />
    </div>
  );
}

export default App;
