import './App.css';
import Header from './components/header/header';
import Card from './components/card/card';
import Footer from './components/footer/footer';
import React, { useState, useRef } from 'react';
import Test from './test/test';
import Calendario from './calendario/calendario';

function App() {
  const [showTest, setShowTest] = useState(false);
  const [showCalendario, setShowCalendario] = useState(false);

  const textoRutasRef = useRef(null); // Referencia a la sección de RUTAS CULTURALES

  const handleScrollToRutas = () => {
    textoRutasRef.current.scrollIntoView({ behavior: 'smooth' }); // Hace scroll suave hasta la sección
  };

  const handleClickTest = () => {
    setShowTest(true);
  };

  const handleCloseTest = () => {
      setShowTest(false);
  };

  const handleClickCalendario = () => {
      setShowCalendario(true);
  };
  
  const handleCloseCalendario = () => {
      setShowCalendario(false);
  }; 

  return (
    <div className="App">
      <Header/>
      <div className='firstContainer'>
        <div className='letters'>LA CULTURA</div>
        <div className='letters'>GUATEMALTECA</div>
        <div className='letters'>NO SOLO</div>
        <div className='letters'>SE CUENTA</div>
        <div className='pinkLetters'>SE VIVE</div>
      </div>

      <div className='secondContainer'>
        NUESTRA TIERRA, NUESTRA CULTURA, NUESTRAS RAICES, NUESTRA GENTE, NUESTRA
      </div>

      <div className='yellowContainer'>
        GUATEMALA, UNA HERENCIA VIVA QUE ESPERA SER DESCUBIERTA Y EXPERIMENTADA
      </div>

      <div className='mascaraContainer'>
        <img src="img/home/mascara.svg" alt='máscara' className='mascaraImg'/>
        <div className='mascaraText'>
          <div className='mascaraTitle'>
            <div className='titleFirstLine'>
              <div className='blueLetter'> MÁS</div>
              <div>QUE UNA</div>
            </div>
            PLATAFORMA            
          </div>
          <div className='mascaraBody'>
            Ixcape se dedica a explorar y vivir la riqueza cultural de Guatemala a través de rutas auténticas, experiencias con artesanos locales y la inversión en nuestras tradiciones.
          </div>
          <div className='mascaraBody'>
            Conoce nuestra gente, su talento, y nuestra riqueza natural y cultural, déjate llevar por lo mejor de Guatemala, en un viaje que va más allá de lo turístico...
          </div>
          <div className='mascaraBodyPink'>Una verdadera experiencia de vida</div>
        </div>
      </div>
      
      <Card onScrollToRutas={handleScrollToRutas} /> {/* Pasamos la función a `Card` */}

      <div ref={textoRutasRef} className='textoRutas'>RUTAS CULTURALES</div> {/* Elemento objetivo */}

      <div className="tarjetaAzul">
        <div className="textoTarjetas">
          <div className="tituloTarjetas">HAZTE <br/> EL TEST</div>
          <div className="textoTarjetas2">
            <button className="tarjetaButton tarjetaButtonAzul" onClick={handleClickTest}>
              <img src="img/home/Component.svg" alt="Botón con flecha azul" className="tarjetaImg" />
            </button>
            <div className="cuerpoTarjetas">
              <div className="subrayado">¿Vas solo o con cuates?</div>
              Descubre cuál es la ruta cultural ideal para ti. Responde algunas preguntas sencillas y encuentra la experiencia perfecta que se adapta a tus intereses y estilo de viaje.
            </div>
          </div>
        </div>
      </div>

      <div className="tarjetaAmarilla">
        <div className="textoTarjetas">
          <div className="tituloTarjetas">VE EL <br/> CALENDARIO</div>
          <div className="textoTarjetas2">
            <button className="tarjetaButton tarjetaButtonAmarilla" onClick={handleClickCalendario}>
              <img src="img/home/botonFlechaAmarilla.svg" alt="Botón con flecha amarilla" className="tarjetaImg" />
            </button>
            <div className="cuerpoTarjetas">
              <div className="subrayado">¡Que no se te pase nada!</div>
              Consulta nuestro calendario actualizado de eventos y actividades culturales. Encuentra las fechas clave de fiestas, ceremonias y recorridos especiales.
            </div>
          </div>
        </div>
      </div>

      <div className="tarjetaRosa">
        <div className="textoTarjetas">
          <div className="tituloTarjetas">INSCRÍBETE</div>
          <div className="textoTarjetas2">
            <button className="tarjetaButton tarjetaButtonRosa">
              <img src="img/home/botonFlechaRosa.svg" alt="Botón con flecha rosa" className="tarjetaImg" />
            </button>
            <div className="cuerpoTarjetas">
              <div className="subrayado">Vive la cultura!</div>
              Forma parte de nuestras rutas culturales. Inscríbete y asegura tu lugar en las experiencias que te conectarán con la historia, el arte y las tradiciones locales.
            </div>
          </div>
        </div>
      </div>

      <div className='tarjetaNegra'>
        LA CULTURA ESTA VIVA,<br/>
        Y ESTA ESPERANDO QUE TU LA DESCUBRAS<br/>
        Y LA VIVAS CON NOSOTROS
      </div>

      {showTest && (
          <div className="culturaContainer show">
              <Test onClose={handleCloseTest} />
          </div>
      )}

      {showCalendario && (
        <div className="culturaContainer show">
            <Calendario onClose={handleCloseCalendario} />
        </div>
      )}
      
      <Footer/>
    </div>
  );
}

export default App;
