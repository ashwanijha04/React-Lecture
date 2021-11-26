
function BirthdayComponent() {

    let daysLeftToBirthday = 2;

    if(daysLeftToBirthday>5) {
        return(
            <h1>
                Your birthday is far away!
            </h1>
        )

    } else {
        return (
            <h1>
                Your birthday is coming soon!
            </h1>
        )

    }
}

export default BirthdayComponent;