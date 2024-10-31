import './pop.css';
import { useNavigate } from 'react-router-dom';

export default function Pop(){
    const navigate = useNavigate();

    const handleClickHome = () => {
        navigate("/comunidad")
    };

    return(
        <div className='popMainContainer'>
            <div></div>

            <div className='letterBttnContainer'>
                <h1>TRANSACCIÓN<br/>EXITOSA</h1>

                <button className='blackBttn' onClick={handleClickHome}>SIGUE A LA COMUNIDAD</button>
            </div>
            
        </div>
    )
}