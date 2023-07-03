import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';

function App() {

  const [gatos, setGatos] = useState([])

  const aoNovoGatoAdicionado = (gato) => {
    console.log(gato)
    setGatos([...gatos, gato])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoGatoCadastrado={gato => aoNovoGatoAdicionado(gato)} />
    </div>
  );
}

export default App;
