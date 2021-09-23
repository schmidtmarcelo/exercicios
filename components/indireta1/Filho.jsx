export default function Filho(props) {
    console.log(props)
    return (
        <div>
            <h1>Filho </h1>
            <button onClick={props.funcao}>Falar co pai</button>
            <button onClick={() => props.funcao( "Filho falou com o pai 1", "TESTE2", 10)}>
                Falar co pai 2
            </button>
        </div>
    )
}