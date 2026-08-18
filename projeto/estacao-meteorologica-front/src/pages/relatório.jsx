import Header from "../components/header";

export default function Relatorio(){
    const leituras = [
        {horario: "12:00", qualidadeAr: "Boa", iqa: 44, temperatura: "32°C", umidade: "40%"},
        {horario: "13:00", qualidadeAr: "Boa", iqa: 50, temperatura: "27°C", umidade: "44%"},
        {horario: "14:00", qualidadeAr: "Boa", iqa: 20, temperatura: "30°C", umidade: "50%"},
        {horario: "15:00", qualidadeAr: "Boa", iqa: 60, temperatura: "22°C", umidade: "55%"}
    ]

    return(
        <div className="container">
            <Header />
            <h2>Relatório da Estação Meteorológica</h2>
            <p>Dadossobre clima em tempo real.</p>

            <section className="graficos">
                {/* inserir graficos */}
            </section>

            <section className="leituras">
                <table>
                    <thead>
                        <tr>
                            <th>Horário</th>
                            <th>Qualidade do ar</th>
                            <th>IQA</th>
                            <th>Temperatura</th>
                            <th>Umidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            leituras.map((item,index) =>(
                                <tr key={index}>
                                    <td>{item.horario}</td>
                                    <td>{item.qualidadeAr}</td>
                                    <td>{item.iqa}</td>
                                    <td>{item.temperatura}</td>
                                    <td>{item.umidade}</td>

                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>
        </div>
    )
}