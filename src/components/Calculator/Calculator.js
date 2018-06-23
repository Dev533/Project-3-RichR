import React, { Component } from "react";
// import Math from "../Math/Math";


class Calculator extends Component {
  state = {
    netIncome: "",
    payFrequency: "",
    monthlyHousing: "",
    monthlyInsurance: "",
    monthlyUtilities: ""
  };
  
 handleInputChange = event => {
   // Getting the value and name of the input which triggered the change.
   let value = event.target.value;
   const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
 };

  render() {
    return(
      <div>
      <h1> Fill in the info below. </h1>
      <h2> Income </h2>
      <form>
        <label>
        Net income on latest paycheck
          <input type="text" name="netIncome" value={this.state.netIncome} onChange={this.handleInputChange}/>
        </label>
        <br />
        <br />
        <label>
        Pay Frequency
          <input type="radio" />
          Weekly
        </label>
        <label>
          <input type="radio" />
          Biweekly
        </label>
        <label>
          <input type="radio" />
          Semi-Monthly
        </label>
        <label>
          <input type="radio" />
          Monthly
        </label>
        <h2> Expenses </h2>
        <p>Enter how much you pay each month for each of the following bills.</p>
        <label>
        Mortgage or Rent
          <input type="text" name="monthlyHousing" value={this.state.monthlyHousing} onChange={this.handleInputChange} />
        </label>
        <br />
        <br />
        <label>
        Insurance Payments
          <input type="text" name="monthlyInsurance" value={this.state.monthlyInsurance} onChange={this.handleInputChange} />
        </label>
        <br />
        <br />
        <label>
        Phone and Utilities
          <input type="text"  name="monthlyUtilities" value={this.state.monthlyUtilities} onChange={this.handleInputChange} />
        </label>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
     
    </div>
    )
  }
};
 


export default Calculator;
