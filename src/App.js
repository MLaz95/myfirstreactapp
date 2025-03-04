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

  function toggleTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  // array of shortcuts saved in localstorage
  const [links, setLinks] = useLocalStorage('links', []);

  // adds a new shortcut to array
  function HandleNewLink(newName, newUrl) {
    if(newName !== '' && newUrl !== ''){

      // sets links
      setLinks([
        ...links,
        { id: uuidv4(), name: newName, url: newUrl }
      ]);

      // scroll to bottom to see new link
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });

      // close modal
      setModalOpen(false);

    } else{

      // if a field is empty show error messages
      if(newName === ''){
        document.getElementById('link-name-err').style = 'display: inline';
      }
      if(newUrl === ''){
        document.getElementById('link-url-err').style = 'display: inline';
      }
    }
  }

  function DeleteLink(link) {
    setLinks(
      links.filter(l => l.id !== link.id)
    );
  }

  // DRAG&DROP FUNCTIONALITY
  function dragStartHandler(e, index) {
    // take dragged item index in array
    e.dataTransfer.setData('index', index)
    e.dataTransfer.effectAllowed = 'move';
  }

  // necessary to allow functionality
  function dragOverHandler(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }

  function dropHandler(e, index) {
    // save index of dragged and destination item
    const dragIndex = e.dataTransfer.getData('index');
    const dropIndex = index;

    // retrieve items from localStorage
    const dragItem = links[dragIndex];
    const dropItem = links[dropIndex];

    // make temporary array and move the items
    let tempLinks = [...links];
    tempLinks.splice(dragIndex, 1, dropItem);
    tempLinks.splice(dropIndex, 1, dragItem);

    // set the new localstorage
    setLinks(tempLinks);
  }

  // adds shadow to nav if page is scrolled
  document.addEventListener('scroll', (e) => {
    const navEl = document.getElementsByTagName('nav')[0];
    if(window.scrollY > 50){
      navEl.classList.add('shadow')
    }else{
      navEl.className = ''
    }
  })

  // used to manage modal component
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div id='background' className='roboto-default' data-theme={theme}>
      <nav>
        <div className='container nav-content'>
          <div className='tile'>
            <NewCardButton isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
          </div>
          <button onClick={toggleTheme} className='light-btn'>{theme === 'light' ? String.fromCharCode(9788) : String.fromCharCode(9790)}</button>
        </div>
      </nav>
      <div className='container grid'>

        {
          links.map((link, index) => (
            <div className='tile' key={index} onDragOver={dragOverHandler} onDrop={e => dropHandler(e, index)}>
              <Card
                key={index}
                index={index}
                link={link}
                deleteLink={DeleteLink}
                emitDragStart={dragStartHandler}
              />
            </div>
          ))
        }

        <Modal isModalOpen={isModalOpen} setModalOpen={setModalOpen} newLink={HandleNewLink} />
      </div>
    </div>

  );
}

export default App;
