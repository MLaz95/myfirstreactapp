import { useState } from 'react';
import useLocalStorage from 'use-local-storage';
import './App.css';
import Card from './components/card';
import NewCardButton from './components/NewCardButton';
import Modal from './components/Modal';

function App() {

  // light/dark mode
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  function toggleTheme(){
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  // stateful array of shortcuts
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
  
  // adds a new shortcut to array
  function HandleNewLink(newName, newUrl){
    setLinks([
      ...links,
      {name: newName, url: newUrl}
    ]);
  }
  
  // used to manage modal component
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div id='background' data-theme={theme}>
      <div className='container'>
        {
          links.map((link, index) => (
            <Card key={index} link={link} />
          ))
        }

        {/* <button onClick={() => addLink('test4', 'test4.com')}>Press Me</button> */}
    
        <NewCardButton isModalOpen={isModalOpen} setModalOpen={setModalOpen}/>
        <Modal isModalOpen={isModalOpen} setModalOpen={setModalOpen} newLink={HandleNewLink}/>
        <button onClick={toggleTheme}>Light Switch</button>
      </div>
    </div>

  );
}

export default App;
