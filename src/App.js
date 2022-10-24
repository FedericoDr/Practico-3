import Galeria from "./Componentes/galeria";
import Header from "./Componentes/header/header";


function App() {
  return (
    <>
      <div className="Titulos">
        {/* Parte 2 */}
        <Header/>

        <br></br>
         {/* Parte 1 */}
        <Galeria/>
        
      </div>
    </>
  );
}

export default App;
