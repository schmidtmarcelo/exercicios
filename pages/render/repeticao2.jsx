import lista from '../../data/listaProdutos'

export default function repeticao2() {

    const comBorda = {
        border: "1px solid #000"
    }

    function renderizarLinhas() {
        return lista.map(produto => {
            return (
                <tr key={produto.id}>
                    <td style={comBorda}>{produto.id}</td>
                    <td style={comBorda}>{produto.nome}</td>
                    <td style={comBorda}>{produto.preco}</td>
                </tr>
            )
        })
    }

    return (
        <div>
            <table style={comBorda}>
                <thead>
                    <tr>
                        <th>Codigo</th>
                        <th>Nome</th>
                        <th>Preco</th>
                    </tr>
                </thead>
                <tbody>
                    {renderizarLinhas()}
                </tbody>
            </table>
        </div>
    )
}