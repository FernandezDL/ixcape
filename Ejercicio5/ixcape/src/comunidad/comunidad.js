import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import './comunidad.css';

export default function Comunidad(){
    return(
        <div className='comunidadMainContainer'>
            <Header/>

            <div className='senoraContainer'>
                <div></div>

                <div className='senoraLetra'>
                    EXPLORA,<br/>CONECTA &<br/>COMPARTE
                </div>
            </div>
            <img src='img/comunidad/listones.png' alt='liston verde y azul' className='listones'/>

            <div className='mascaraContainer'>
                <img src='img/comunidad/mascara.png' alt='mascara blanco y negro'/>

                <div className='mascaraSecCol'>
                    <div className='mascaraLetras'>
                        <h2>TEJIENDO UNA GUATEMALA CON EXPERIENCIAS.</h2>
                        <div>En este espacio, damos voz a quienes han vivido la experiencia IXCAPE. Aquí, los participantes de nuestros intercambios culturales comparten sus vivencias, aprendizajes y conexiones con las comunidades guatemaltecas.</div>
                    </div>
                </div>
            </div>

            <img src='img/comunidad/letras.png' alt='liston verde y azul' className='letrasFoto'/>

            <div className='carruselContainer'>
                <div className='carruselItem yellowItem'>CONEXIONES<br/>EN ACCIÓN</div>
                <div className='carruselItem blueItem'>
                    <div className='blueItemLetter'>
                        <img src='img/comunidad/Flecha.svg' alt='flecha' className='flechaNegra'/>
                        VOCES DE<br/>IXCAPE
                    </div>

                    <img src='img/comunidad/muneco.svg' alt='muneco' className='muneco'/>
                </div>
                <div className='carruselItem blackItem'></div>
            </div>

            <Footer/>
            <img src="img/comunidad/cuadritos.png" alt='cuadritos de colores' className='cuadritos'/>
        </div>
    )
}