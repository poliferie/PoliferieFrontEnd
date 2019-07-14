import React, { Component } from "react";
import DialogFilteringSlider from "./DialogFilteringSlider";
import WorkIcon from "@material-ui/icons/Work";

const Icon = () => {
  // This can actually just be put directly into the props of DialogFilter
  return <WorkIcon color="primary" />;
};

class DialogOccupazioneFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="OccupazioneFilter">
        <DialogFilteringSlider
          filterName="min_occupation"
          filterTitle="Filtra per occupazione"
          min="0"
          max="100"
          startVal="80"
          icon={Icon()}
          filteringFunction={function(u) {
            //console.log("Filter name: " + this.filterName);
            //console.log("this.state.val:" + this.state.val);
            return (
              parseFloat(u.Opportunita.occupazioneLavoro) >=
              parseFloat(this.state.val)
            );
          }}
          addFilter={this.props.addFilter}
        />
      </div>
    );
  }
}

export default DialogOccupazioneFilter;