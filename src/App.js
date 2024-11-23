import './App.css';
import Card from './components/card';
import NewCardButton from './components/NewCardButton';

function App() {
  let links = [];

  return (
    <div className='container'>
      {
        links.map((link, index) => (
          <Card key={index} link={link} />
        ))
      }
  
      <NewCardButton />
    </div>  

  );
}

export default App;
