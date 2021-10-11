import React from "react";
// import Form from "react-bootstrap/Form";

const CompanyInput = (props) => {
  return (
    <div className="finInput">
      <label>Type a company id e.g. AAPL</label>
      <input
        list="browsers"
        name="browser"
        id="browser"
        onChange={(e) => props.setQuery(e.target.value.toUpperCase())}
        placeholder='AAPL,MSFT,TSLA,GOOGL'
      />
      <datalist id="browsers">
        <option value="AAPL"></option>
        <option value="MSFT"></option>
        <option value="AMZN"></option>
        <option value="TSLA"></option>
        <option value="GOOG"></option>
        <option value="GOOGL"></option>
        <option value="NVDA"></option>
        <option value="FB"></option>
        <option value="PYPL"></option>
        <option value="NFLX"></option>
        <option value="ADBE"></option>
        <option value="CMCSA"></option>
        <option value="CSCO"></option>
        <option value="INTC"></option>
        <option value="PEP"></option>
        <option value="AVGO"></option>
      </datalist>
    </div>
  );
};

export default CompanyInput;
