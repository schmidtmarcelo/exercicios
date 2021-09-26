import { useState } from "react"
import NumeroDisplay from "../../components/NumeroDisplay"

export default function contador() {
    const [valor, setValor] = useState(0)

    /*function calculo(soma) {
        soma ? setValor(valor + 1) : setValor(valor - 1)
    }
    <button onClick={() => calculo(false)}>-</button>
    <button onClick={() => calculo(true)}>+</button>
    forma q eu fiz
    */

    const dec = () => setValor(valor - 1)

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <h1>Contador</h1>
            <NumeroDisplay numero={valor} />
            <div>
                <button onClick={dec}>-</button>
                <button onClick={() => setValor(valor + 1)}>+</button>
            </div>
        </div>
    )
}