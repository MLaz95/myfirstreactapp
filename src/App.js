import { useState } from 'react';
import useLocalStorage from 'use-local-storage';
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

  // stateful array of shortcuts
  const [links, setLinks] = useState([
    {
      id: 0,
      name: 'css-tricks',
      url: 'https://css-tricks.com',
    },
    {
      id: 1,
      name: 'google',
      url: 'https://www.google.com',
    },
    {
      id: 2,
      name: 'test3',
      url: 'test3.com',
    }
  ]);
  
  // adds a new shortcut to array
  function HandleNewLink(newName, newUrl){
    setLinks([
      ...links,
      {id: links.length, name: newName, url: newUrl}
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
      <div className='container'>
        {
          links.map((link, index) => (
            <Card key={index} link={link} deleteLink={DeleteLink} />
          ))
        }

        {/* <button onClick={() => addLink('test4', 'test4.com')}>Press Me</button> */}
    
        <NewCardButton isModalOpen={isModalOpen} setModalOpen={setModalOpen}/>
        <Modal isModalOpen={isModalOpen} setModalOpen={setModalOpen} newLink={HandleNewLink}/>
        <button onClick={toggleTheme} className='light-btn'>{theme === 'light' ? String.fromCharCode(9788) : String.fromCharCode(9790)}</button>
      </div>
    </div>

  );
}

export default App;
