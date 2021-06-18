import NavBar from './componentes/NavBar';
import Banner from './componentes/Banner';
import Interesses from './componentes/Interesses';
import ParaSaberMais from './componentes/ParaSaberMais';
import FormularioContato from './componentes/FormularioContato';
import Rodape from './componentes/Rodape';

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Banner />
      <Interesses />
      <ParaSaberMais />
      <FormularioContato />
      <Rodape />
    </div>
  );
}

export default App;
