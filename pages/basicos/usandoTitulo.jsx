import Titulo from '../../components/Titulo'

export default function usandoTitulo() {
    return (
        <div>
            <Titulo 
                principal="Pagina de Cadastro"
                secundario="Incluir e bla bla"
            />
            <Titulo 
                principal="Pagina de login"
                secundario="email e senha"
                pequeno = {true}
            />
        </div>
    )
}