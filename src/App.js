import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Installments from "./components/Installments";

function App() {
    const [montante, setMontante] = useState(0);
    const [jurosMensal, setJurosMensal] = useState(0);
    const [periodo, setPeriodo] = useState(0);

    const handleChangeMontante = (montante) => {
        setMontante(montante);
    };
    const handleChangeJurosMensal = (jurosMensal) => {
        setJurosMensal(jurosMensal);
    };
    const handleChangePeriodo = (periodo) => {
        setPeriodo(periodo);
    };

    const jurosCompostos = (valorInicial, taxa, tempo) => {
        const P = valorInicial;
        const i = taxa / 100;
        const n = tempo;
        return (P * Math.pow(1 + i, n)).toFixed(2);
    };

    let numParcela = [];

    for (let i = 0; i < periodo; i++) {
        numParcela.push(i);
    }

    let color = 'green';
    if (jurosMensal < 0) {
        color = 'red';
    }

    return (
        <div className="container">
            <h1>React - Juros Compostos </h1>

            <div className="row">
                <Form
                    montantePai={handleChangeMontante}
                    jurosMensalPai={handleChangeJurosMensal}
                    periodoPai={handleChangePeriodo}
                />
            </div>
            <div className="row">
                {numParcela.map((item) => {
                    const calJurosCompostos = jurosCompostos(montante, jurosMensal, item + 1);
                    const calRendimento = (calJurosCompostos - montante).toFixed(2);
                    const tx = ((calRendimento * 100) / montante).toFixed(2) + "%";
                    return (
                        <Installments
                            key={item}
                            parcela={item + 1}
                            total={`R$ ${calJurosCompostos}`}
                            rendimento={`R$ ${calRendimento}`}
                            taxa={tx}
                            color={color}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default App;
