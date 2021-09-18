export default function SomentePar(props) {
    /*;if(props.numero % 2 === 0) {
        return <h1>{props.numero}</h1>
    } else {
        return null
    }*/
    const numeroPar = props.numero % 2 === 0
    //return numeroPar ? <span>{props.numero}</span> : null

    return (
        <div>
            {numeroPar ? <span>{props.numero}</span> : null}
        </div>
    )
}