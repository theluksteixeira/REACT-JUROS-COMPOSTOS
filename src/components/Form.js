import React, { useState } from "react";

export default function Form(props) {
    const [montante, setMontante] = useState(0);
    const [jurosMensal, setJurosMensal] = useState(0);
    const [periodo, setPeriodo] = useState(0);

    const jurosCompostos = (valorInicial, taxa, tempo) => {
        const P = valorInicial;
        const i = taxa;
        const n = tempo;
        return (P * (1 + i)) ^ n;
    };

    const handleCalcMontante = (event) => {
        setMontante(event.target.value);
        props.total(jurosCompostos(montante, jurosMensal, periodo));
        props.taxa("0,50");
        props.parcela(3);
        props.rendimento("5,00");
        return;
    };

    const handleCalcTaxa = (event) => {
        setJurosMensal(event.target.value);
        props.total(jurosCompostos(montante, jurosMensal, periodo));
        return;
    };

    const handleCalcPeriodo = (event) => {
        setPeriodo(event.target.value);
        return jurosCompostos(montante, jurosMensal, periodo);
    };

    return (
        <>
            <div className="input-field col s4">
                <input type="number" id="montante" value={montante} onChange={handleCalcMontante} />
                <label htmlFor="montante">Montante inicial</label>
            </div>
            <div className="input-field col s4">
                <input type="number" id="jurosMensal" value={jurosMensal} onChange={handleCalcTaxa} />
                <label htmlFor="jurosMensal">Taxa de juros mensal</label>
            </div>
            <div className="input-field col s4">
                <input type="number" id="periodo" value={periodo} onChange={handleCalcPeriodo} />
                <label htmlFor="periodo">Período (meses)</label>
            </div>
        </>
    );
}
