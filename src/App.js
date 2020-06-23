import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Installments from "./components/Installments";

function App() {
    const [total, setTotal] = useState(0);
    const [parcela, setParcela] = useState(0);
    const [rendimento, setRendimento] = useState(0);
    const [taxa, setTaxa] = useState(0);

    const handleChangeTotal = (total) => {
        setTotal(total);
    };
    const handleChangeParcela = (parcela) => {
        setParcela(parcela);
    };
    const handleChangeRendimento = (rendimento) => {
        setRendimento(rendimento);
    };
    const handleChangeTaxa = (taxa) => {
        setTaxa(taxa);
    };

    let numParcela = [];

    for (let i = 0; i < 3; i++) {
        numParcela.push(i);
    }

    return (
        <div className="container">
            <h1>React - Juros Compostos</h1>

            <div className="row">
                <Form
                    total={handleChangeTotal}
                    parcela={handleChangeParcela}
                    rendimento={handleChangeRendimento}
                    taxa={handleChangeTaxa}
                />
            </div>
            <div className="row">
                {numParcela.map(() => {
                    return <Installments total={total} parcela={parcela} rendimento={rendimento} taxa={taxa} />;
                })}
            </div>
        </div>
    );
}

export default App;
