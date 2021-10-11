import React from "react";
import DatePicker from "react-datepicker";

const CompanyDate = (props) => {
  return (
    <div className="finInput">
      <label>Week ending on ...</label>
      <DatePicker
        className="datePickerForm form-control"
        selected={props.startDate}
        value={props.startDate}
        onChange={(date) => props.setStartDate(date)}
      />
    </div>
  );
};

export default CompanyDate;
