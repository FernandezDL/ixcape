    import './header.css';

    export default function Header(){
        return(
            <div className='mainContainer'>
                <img src="img/header/logoLetras.svg" alt="Logo de letras" class="headerImage"/>

                <div className='optionsContainer'>
                    <p>CULTURA E HISTORIA</p>
                    <p>RUTAS CULTURALES</p>
                    <p>CONTACTA CON ARTESANOS</p>
                </div>
                
                <img src='img/header/logo.svg' alt='Logo icono' className='logo'/>
            </div>
        )
    }