import {Component} from "react"


class ShowListDetails extends Component {
    state = {resultList: [], searchInput: false}

    componentDidMount() {
        this.showDetailsResponse()
    }

    showDetailsResponse = async () => {
        const url = "https://mocki.io/v1/bc41f50a-04f3-40c9-a77d-64c27a171093";
        const options = {
            method: "GET"
        }
        const response = await fetch(url, options)
        
        if (response.ok === true) {
            const jsonData = await response.json()
            const {data} = jsonData
            this.setState({resultList: data})
        }
    }

    changeInput = (event) => {
        event.preventDefault()
        this.setState(prevState => ({searchInput: !prevState.searchInput}))
    }

    showResults = () => {
        const {resultList, searchInput} = this.state
        const itemDetails = resultList[0]
        return searchInput ? (
            <div>
                <h1>{itemDetails.mandiName}</h1>
                <ul>
                    {itemDetails.mandi.map(eachVal => (
                        <div>
                            <li>arrivalDate: {eachVal.arrivalDate}</li>
                            <li>commodity: {eachVal.commodity}</li>
                            <li>dailyPriceId: {eachVal.dailyPriceId}</li>
                            <li>district: {eachVal.district}</li>
                            <li>grade: {eachVal.grade}</li>
                            <li>market: {eachVal.market}</li>
                            <li>maxPrice: {eachVal.maxPrice}</li>
                            <li>minprice: {eachVal.minPrice}</li>
                            <li>modalprice: {eachVal.modalPrice}</li>
                            <li>state: {eachVal.state}</li>
                            <li>variety: {eachVal.variety}</li>
                            
                        </div>
                    ))}
                </ul>
            </div>
        ) : "disshow"
    }    

    render() {

        return (
            <div>
                <input type="checkbox" onChange={this.changeInput} /> 
                {this.showResults()}
            </div>
                    
        )
    }
}

export default ShowListDetails;