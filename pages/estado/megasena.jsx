import { useEffect, useState } from "react"
import NumeroDisplay from "../../components/NumeroDisplay"
import { mega } from "../../functions/mega"

export default function megasena() {
    const [qdte, setQtde] = useState(6)
    const [numeros, setNumeros] = useState([])

    useEffect(() => {
        setNumeros(mega())
    }, [])

    function renderNumeros() {
        return numeros.map(numero => <NumeroDisplay key={numero} numero={numero} />)
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <h1>Mega sena</h1>
            <div style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap"
            }}>
                {renderNumeros()}
            </div>
            <div>
                <input type="number" min={6} max={20} value={qdte}
                    onChange={ev => setQtde(ev.target.value)} />
                <button onClick={() => setNumeros(mega(qdte))}>
                    Gerar Aposta
                </button>
            </div>
        </div>
    )
}