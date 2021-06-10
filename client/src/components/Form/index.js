import React from "react";
import "../../style/style.css";

function Form({ q, handleInputChange, handleFormSubmit }) {
  return (
    <form >
      <div  className="form-group">
        <label htmlFor="Query">
          <strong style={{fontSize: '20px'}}>Book</strong>
        </label>
        <input
          className="form-control"
          id="Title"
          type="text"
          value={q}
          placeholder="The Alchemist"
          name="q"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="pull-right">
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-danger float-right"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default Form;