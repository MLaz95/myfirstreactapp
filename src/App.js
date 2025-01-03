import { useState } from 'react';
import './App.css';
import Card from './components/card';
import NewCardButton from './components/NewCardButton';
import Modal from './components/Modal';

function App() {
  const [links, setLinks] = useState([
    {
      name: 'test',
      url: 'test.com',
    },
    {
      name: 'test2',
      url: 'test2.com',
    },
    {
      name: 'test3',
      url: 'test3.com',
    }
  ]);

  const [isModalOpen, setModalOpen] = useState(false);
  
  function HandleNewLink(newName, newUrl){
    setLinks([
      ...links,
      {name: newName, url: newUrl}
    ]);
  }


  return (
    <div className='container'>
      {
        links.map((link, index) => (
          <Card key={index} link={link} />
        ))
      }

      {/* <button onClick={() => addLink('test4', 'test4.com')}>Press Me</button> */}
  
      <NewCardButton isModalOpen={isModalOpen} setModalOpen={setModalOpen}/>
      <Modal isModalOpen={isModalOpen} setModalOpen={setModalOpen} newLink={HandleNewLink}/>
    </div>  

  );
}

export default App;
