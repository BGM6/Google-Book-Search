import React from "react";
import "./style.css";

const SearchForm = props => {
    return (
        <form>
            <div className="form-group">
                <label className="BookSearchLabel" style={{color: 'white'}}><h3>Search For SavedBooks</h3></label>
                <br></br>
                <input className="col-12 form-control"
                    value={props.search}
                    type="text"
                    name="searchBook"
                    placeholder="Enter SavedBooks's Name"
                    onChange={props.handleInputChange}
                />
            </div>
            <button type="submit" className="submitBtn btn btn-primary" onClick={props.handleFormSubmit}>
                Submit
            </button>
        </form>
    )
}



export default SearchForm
