import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome: 'Gordinhos',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    {
      nome: 'Danados',
      corPrimaria: '#82cffa',
      corSecundaria: '#e8f8ff'
    },
    {
      nome: 'Preguiçosos',
      corPrimaria: '#db6ebf',
      corSecundaria: '#fae9f5'
    }
  ]

  const [gatos, setGatos] = useState([])

  const aoNovoGatoAdicionado = (gato) => {
    console.log(gato)
    setGatos([...gatos, gato])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoGatoCadastrado={gato => aoNovoGatoAdicionado(gato)} />

      {times.map(time => <Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria} />)}

    </div>
  );
}

export default App;
