import React, { Component } from "react";
// import Math from "../Math/Math";

const Calculator = () => (
  <div>
    <h1> Fill in the info below. </h1>
    <h2> Income </h2>
    <form>
      <label>
      Net income on latest paycheck
        <input type="text" name="name" />
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
        <input type="text" name="name" />
      </label>
      <br />
      <br />
      <label>
      Insurance Payments
        <input type="text" name="name" />
      </label>
      <br />
      <br />
      <label>
      Phone and Utilities
        <input type="text" name="name" />
      </label>
      <br />
      <br />
      <input type="submit" value="Submit" />
    </form>
   
  </div>
);

export default Calculator;
