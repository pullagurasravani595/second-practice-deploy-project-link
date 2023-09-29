
const ItemDetails = props => {
    const {details} = props
    const {mandiName, mandi} = details
    return (
        <div>
            <h1>{mandiName}</h1>
            <ul>
                {mandi.map(eachVal => (
                    <li>{eachVal}</li>
                ))}
            </ul>
            
        </div>
    )
}

export default ItemDetails
