import React,{useState,useEffect} from 'react';

function App() {
  const [colors, setColors] = useState([]);
  const colorGen = ()=>
  {
    const s='0123456789ABCDEF'
    let result =''

    for(let i =0;i<6;i++)
    {
       let index = Math.floor(Math.random()*s.length);
       result+=s[index];
    }

    return '#'+result;     
  }

  const buildColors = ()=>
  {
    let c = Array(5);
    for(let i =0;i<5;i++)
      c[i] = colorGen();
    setColors(c);
  }

  

  useEffect(() => {
    buildColors();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  
  return (
    <div className="App">
      {
        colors.map((m)=>
        {
          return (
          <div className="container" style={{backgroundColor: m}}>
          <h1>{m}</h1>
          </div>
          )
        })
      }
    </div>
  );
}

export default App;
