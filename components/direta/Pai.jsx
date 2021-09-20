import Filho from "./Filho";
// ...props mesma coisa que passar <Pai familia="schmitao" nome="padrão"/> que veio do pai
export default function Pai(props) {
    return (
        <div>
            <h1>Familia {props.familia}</h1>
            <Filho nome="martelo" familia={props.familia} />
            <Filho nome="aracema" familia={props.familia} />
            <Filho {...props} nome="vanessa" />  
        </div>
    )
}