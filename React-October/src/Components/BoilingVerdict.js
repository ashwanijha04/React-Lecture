

function BoilingVerdict(props) {

    if(props.celcius >= 100) {
        return (<p> The water would boil! </p>)
    } else {
        return <p> The water would not boil! </p>
    }

}

export default BoilingVerdict;



{/* <BoilingVerdict celcius="100"/> */}