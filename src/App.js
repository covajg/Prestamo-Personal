import React, { Fragment, useState } from 'react'
import Header from './Componentes/Headers'
import Formulario from './Componentes/Formulario'
import Mensaje from './Componentes/Mensaje'
import Resultado from './Componentes/Resultado'
import Spinner from './Componentes/Spinner'

function App() {
  
  //Definir el State
  const [ cantidad, guardarCantidad] = useState(0);
  const [ plazo, guardarPlazo] = useState('');
  const [total,guardarTotal] = useState(0);
  const [cargando,guardarCargando] = useState(false);

  let componente;

  if(cargando){
    componente = <Spinner/>
  }else if(total === 0){
    componente = <Mensaje/>
  }else{
    componente = <Resultado
                  total={total}
                  plazo={plazo}
                  cantidad={cantidad}
                />
  }


  return (
    <Fragment>
      <Header
        titulo="Cotizador de Prestamos"
      />
      <div className='container'>
        < Formulario
          cantidad={cantidad}
          guardarCantidad={guardarCantidad}
          plazo={plazo}
          guardarPlazo={guardarPlazo}
          guardarTotal={guardarTotal}
          guardarCargando={guardarCargando}
        />
        <div className='mensajes'>
          { componente }
        </div>
      </div>
    </Fragment>
  );
}

export default App;
