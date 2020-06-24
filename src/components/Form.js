import React, { useState } from "react";

export default function Form(props) {
    const [montante, setMontante] = useState(0);
    const [jurosMensal, setJurosMensal] = useState(0);
    const [periodo, setPeriodo] = useState(0);

    const handleCalcMontante = (event) => {
        setMontante(event.target.value);
        props.montantePai(event.target.value);
        props.jurosMensalPai(jurosMensal);
        props.periodoPai(periodo);
        return;
    };

    const handleCalcTaxa = (event) => {
        setJurosMensal(event.target.value);
        props.montantePai(montante);
        props.jurosMensalPai(event.target.value);
        props.periodoPai(periodo);
        return;
    };

    const handleCalcPeriodo = (event) => {
        setPeriodo(event.target.value);
        props.montantePai(montante);
        props.jurosMensalPai(jurosMensal);
        props.periodoPai(event.target.value);
        return;
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
