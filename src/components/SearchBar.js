import React from 'react'

//class and functional componants
class SearchBar extends React.Component {

    constructor() {
        super()

        this.state = {
            search: ''
        }
    }

    handleSearchChhange = (e) => {
        this.setState({
            [e.target.name]: e.target.value //whatever to your state, use [] is dynamic
        })
    }

    render() {  /*called anytime componet change*/
        return (
            <div className="searchbar-container">
                <form className="search-form">
                    <input 
                        type="search"
                        name="search"
                        value={this.state.search} //it will update this.state automatically
                        className="search-input"
                        placeholder="Search Restaurants"
                        onChange={this.handleSearchChhange}
                    />
                </form>

            </div>
        )
    }
}

export default SearchBar