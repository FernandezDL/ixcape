import './header.css';
import { useNavigate } from 'react-router-dom';

export default function Header(){
    const navigate = useNavigate();

    const handleClickHome = () => {
        navigate("/")
    };

    return(
        <div className='mainContainer'>
            <button class="headerImage" onClick={handleClickHome}>
                <img src="img/header/logoLetras.svg" alt="Logo de letras"/>
            </button>

            <div className='optionsContainer'>
                <p>CULTURA E HISTORIA</p>
                <p>RUTAS CULTURALES</p>
                <p>CONTACTA CON ARTESANOS</p>
            </div>
            
            <button className='logoFigura' onClick={handleClickHome}></button>
        </div>
    )
}