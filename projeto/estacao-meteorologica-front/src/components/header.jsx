import { Link } from "react-router-dom";
import './header.css';


export default function Header(){
    return(
        <header>
            <h2>
                Estação meteorológica
            </h2>
            <nav>
                <ul>
                    <li><Link to='dashboard'>Home</Link></li>
                    <li><Link to='dashboard'>Cadastros</Link></li>
                    <li><Link to='dashboard'>Relatórios</Link></li>
                    <li><Link to='/'>Sair</Link></li>
                </ul>
            </nav>
        </header>
    )
}
