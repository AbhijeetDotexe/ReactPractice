import './App.css';
import Counter from './components/Counter';
import CounterClass from './components/CounterClass';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './reduxContainer/store';
import BookContainer from './reduxContainer/BookContainer';

function add(x,y){
  return x+y;
}

function Testing(){
  const name = "Abhijeet Rana";
  const age = 23;
  return (
    <div>
    <h1>We are inside the testing component now </h1>
    <h2>The sum of 2+2 is {add(2,2)}</h2>
    <h3>Hello, My name is {name} and my Age is {age}</h3>
    </div>
  )
}


function App() {
  return (
    <Provider store={store}>  
    <div>
      <Header/>
      <Testing/>
      <h1>This is just for testing if the application is even working or not</h1>
      <Counter/>
      <CounterClass name="Abhijeet Rana" age="23"/>
      <BookContainer/>
    </div>
    </Provider>
  );
}

export default App;
