import { useState } from 'react';
import useLocalStorage from 'use-local-storage';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Card from './components/Card';
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

  // array of shortcuts saved in localstorage
  const [links, setLinks] = useLocalStorage('links', []);
  console.log(links)
  
  // adds a new shortcut to array
  function HandleNewLink(newName, newUrl){
    setLinks([
      ...links,
      {id: uuidv4(), name: newName, url: newUrl}
    ]);
    
    console.log(links);
    setModalOpen(false);
  }

  function DeleteLink(link){
    setLinks(
      links.filter(l => l.id !== link.id)
    );
  }
  
  // used to manage modal component
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div id='background' data-theme={theme}>
      <div className='container roboto-default'>
        {
          links.map((link, index) => (
            <Card key={index} link={link} deleteLink={DeleteLink} />
          ))
        }
    
        <NewCardButton isModalOpen={isModalOpen} setModalOpen={setModalOpen}/>
        <Modal isModalOpen={isModalOpen} setModalOpen={setModalOpen} newLink={HandleNewLink}/>
        <button onClick={toggleTheme} className='light-btn'>{theme === 'light' ? String.fromCharCode(9788) : String.fromCharCode(9790)}</button>
      </div>
    </div>

  );
}

export default App;
