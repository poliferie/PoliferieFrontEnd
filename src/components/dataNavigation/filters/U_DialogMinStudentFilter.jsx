import React, { Component } from "react";
import DialogFilteringSlider from "./DialogFilteringSlider";
import PplIcon from "@material-ui/icons/SupervisorAccount";

const Icon = () => {
  // This can actually just be put directly into the props of DialogFilter
  return <PplIcon color="primary" />;
};

class DialogMinStudentFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="MinStudentFilter">
        <DialogFilteringSlider
          filterName="min_nstud"
          filterTitle="Numero minimo di studenti"
          min="70"
          max="200"
          startVal="70"
          icon={Icon()}
          filteringFunction={function(u) {
            //console.log("Filter name: " + this.filterName);
            //console.log("this.state.val:" + this.state.val);
            //console.log("u.Info.Iscritti:" + u.Info.Iscritti);
            return parseInt(u.Info.Iscritti) >= parseInt(this.state.val);
          }}
          //addCourseFilter={this.props.addCourseFilter}
          addFilter={this.props.addFilter}
          humanReadableDescription="Questa è una descrizione di esempio"
        />
      </div>
    );
  }
}

export default DialogMinStudentFilter;
