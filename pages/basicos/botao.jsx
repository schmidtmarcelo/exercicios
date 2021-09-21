function acao1() {
    console.log("acao1")
}

export default function botao() {

    function acao2() {
        console.log("acao2")
    }

    function acao5(e) {
        console.log(e)
    }

    return (
        <div>
            <button onClick={acao1}>Click</button>
            <button onClick={acao2}>Click2</button>
            <button onClick={function acao3() {
                console.log("acao3")
            }}>Click3</button>
            <button onClick={() => console.log("açao 4")}>Click 4</button>
            <button onClick={acao5}>Click5</button>
            <button onClick={e => acao5(e)}>Click5 V2</button>
            <div>
                <input type="text" onChange={e => console.log(e.target.value)} />
            </div>
        </div>
    )
}