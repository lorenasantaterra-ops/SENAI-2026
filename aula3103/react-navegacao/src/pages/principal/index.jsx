import { Link } from "react-router-dom";


export default function Principal(){
    return(
        <div className="container">
            <header>
                <h1>Pastelão do Sesi</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}