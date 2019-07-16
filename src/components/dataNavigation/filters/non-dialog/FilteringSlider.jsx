import React, { Component } from "react";
import { thisExpression } from "@babel/types";
import { EPERM } from "constants";

class FilteringSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val:
        this.props.startVal ||
        "" + (parseInt(this.props.max) + parseInt(this.props.min)) / 2,

      numberVal:
        this.props.startVal ||
        "" + (parseInt(this.props.max) + parseInt(this.props.min)) / 2
    };

    this.filterName = this.props.filterName;
    this.handleChange = this.handleChange.bind(this);
    this.filteringFunction = this.props.filteringFunction.bind(this);
  }

  setUniStudentFilter(lambda) {
    this.props.addUniFilter(this.filterName, lambda);
  }
  setCourseStudentFilter(lambda) {
    this.props.addCourseFilter(this.filterName, lambda);
  }

  handleChange(e) {
    console.log(this.props.filterName + " changed val: " + e.target.value);

    if (!e.target.validity.valid) {
      console.log("Not a valid value. Nothing to update");
      // Update value for number input, but do not use it to filter. Needed to avoid dumb behaviour
      if (e.target.type === "number")
        this.setState({ ...this.state, numberVal: e.target.value });
      return;
    }

    this.setState({ val: e.target.value, numberVal: e.target.value });
  }

  render() {
    return (
      <div className="FilteringSlider">
        <p>
          {"Valore: "}
          <input
            type="number"
            id={this.props.filterName + "NumberInput"}
            min={this.props.min}
            max={this.props.max}
            value={this.state.numberVal}
            onInput={this.handleChange}
          />
        </p>
        <input
          type="range"
          name={this.props.filterName + "Slider"}
          id={this.props.filterName + "Slider"}
          min={this.props.min}
          max={this.props.max}
          value={this.state.val}
          onChange={this.handleChange}
        />
        <br />
        <button
          onClick={() => {
            console.log(this.props.filterName + " removed");
            this.setUniStudentFilter(e => true);
          }}
        >
          Remove
        </button>
        <button
          onClick={() => {
            console.log(this.props.filterName + " applied");
            this.setUniStudentFilter(this.filteringFunction);
          }}
        >
          Applica
        </button>
      </div>
    );
  }
}

export default FilteringSlider;
