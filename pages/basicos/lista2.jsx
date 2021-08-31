function gerarLista() {
    const lista = [
        <span>1</span>,
        <span>1</span>,
        <span>1</span>,
        <span>1</span>,
        <span>1</span>,
        <span>1</span>,
        <span>1</span>,
        <span>1</span>,
        <span>1</span>
    ]
    return lista
}

export default function lista2() {
    return (
        <div>
            {gerarLista()}
        </div>
    )
}

