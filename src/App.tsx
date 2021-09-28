import './App.css';
import Button from './components/EventProps/Button';
import Input from './components/EventProps/Input';
import Person from './components/Props/Person';
import PersonList from './components/Props/PersonList';
import Test from './components/Props/Test';

function App() {

  const info = {
    first: 'Mohamed',
    last: 'Idbenouakrim',
    age: 29
  }

  const infoList = [
    {
      first: 'Mohamed',
      last: 'Idbenouakrim',
      age: 29
    },
    {
      first: 'John',
      last: 'Doe',
      age: 35
    },
    {
      first: 'Elon',
      last: 'Musk',
      age: 38
    }
  ]

  return (
    <div className="App">
      {/* Props */}
      <Test
        name='Mohamed'
        count={25}
      />

      <Person
          info={info}
      />

      <PersonList
          infoList={infoList}
      />

      {/* Events */}
      <Button
        handleClick={(e, id) => console.log('clicked ',e , id)}
      />

      <Input 
          value=''
          handleChange={(e) => console.log(e)}
      />

    </div>
  );
}

export default App;
