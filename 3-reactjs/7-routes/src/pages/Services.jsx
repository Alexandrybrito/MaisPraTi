import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { useContext } from 'react';

function Services() {
    const navigate = useNavigate();
    const { logout } = useContext(AuthContext);

    const goToContact = ()=> {
        navigate('/contact');
    }

    return(
        <div className='page'>
            <h1>Services Page</h1>
            <ul>
                <li>Desenvolvimento de software</li>
                <li>Design Gráfico</li>
                <li>Banco de Dados</li>
                <li>Segurança</li>
            </ul>

            <button onClick={goToContact}>Contact US</button>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Services;