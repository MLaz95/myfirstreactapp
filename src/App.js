import './App.css';
import Card from './components/card'

function App() {
  let links = [
    {
      name: 'test-1',
      url: 'test-1.com'
    },
    {
      name: 'test-2',
      url: 'test-2.com'
    },
    {
      name: 'test-3',
      url: 'test-3.com'
    },
    {
      name: 'test-4',
      url: 'test-4.com'
    },
    {
      name: 'test-5',
      url: 'test-5.com'
    },
  ];

  return (
      
    links.map((link, index) => (
      <Card key={index} link={link} />
    ))

  );
}

export default App;
