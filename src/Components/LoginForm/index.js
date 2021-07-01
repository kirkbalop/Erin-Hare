import React from "react";

function ApptForm(props) {
  return (
    <form>
      <label htmlFor="Name">Name</label>
      <input type="text" id="apptName"></input>
      <select id="apptType">
        <option>Please Select</option>
        <option>Standard Cut/Color</option>
        <option>Belayage</option>
      </select>
    </form>
  );
}
