import './App.css';
import Card from './components/card';
import NewCardButton from './components/NewCardButton';
import Modal from './components/Modal';

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
      <Modal />
    </div>  

  );
}

export default App;
