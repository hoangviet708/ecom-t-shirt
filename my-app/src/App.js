import { useState } from 'react';
import './App.css';



function Header({ setContent }) {

  const handleClick = () => {
    setContent('logged')
  }
  return (
    <div>
      Header
      <button onClick={handleClick}>Loggin</button>
    </div>
  )
}

function Content({ content }) {
  return (
    <div>
      {content}
    </div>
  )
}

function Footer() {
  return (
    <div>
      Footer
    </div>
  )
}



function App() {
  const [content, setContent] = useState('not loggin')
  return (

    <div className="App">
      <Header setContent={setContent} />
      <Content content={content} />
      <Footer />
    </div>
  );
}

export default App;
