import { useState } from "react";
import { Link } from "react-router-dom";
import imagemEstacao from '../assets/estacao.jpg'
import "./login.css";

export default function Login(){
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState ('');
    const [confirmaSenha, setConfirmaSenha] = useState ('');

    return (
        <section className="container">
            <div className="card">
                <img src={imagemEstacao} alt="Imagem da Estação Metereologica" />
                <div className="formulario">
                    <h2>Cadastro do Usuário</h2>

                    <form action="">

                        <label htmlFor="usuario">
                            Usuário
                        </label>

                        <input
                        type="text"
                        id="usuario"
                        className="input"
                        placeholder="Digite seu usuário"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)} />
                       


                        <label htmlFor="senha">
                            Senha
                        </label>

                        <input
                        type="password"
                        id="senha"
                        className="input"
                        placeholder="Digite a senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)} />

                        <label htmlFor="confSenha">Confirma Senha</label>
                        <input
                        type="password"
                        id="confSenha"
                        className="input"
                        placeholder="Confirme sua senha"
                        value={confirmaSenha}
                        onChange={(e) => setConfirmaSenha(e.target.value)} />

                        <Link to='/dashboard' className="botao">
                            Cadastrar  
                        </Link>

                     
                    </form>
                </div>
            </div>
        </section>
    )
}