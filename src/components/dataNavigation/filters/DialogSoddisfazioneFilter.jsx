import React, { Component } from "react";
import DialogFilteringSlider from "./DialogFilteringSlider";
import SmileyIcon from "@material-ui/icons/SentimentSatisfiedAlt";

const Icon = () => {
  return <SmileyIcon color="primary" />;
};

class DialogSoddisfazioneFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="SoddisfazioneFilter">
        <DialogFilteringSlider
          filterName="min_satisfaction"
          filterTitle="Filtra per soddisfazione"
          min="0"
          max="100"
          startVal="80"
          icon={Icon()}
          filteringFunction={function(u) {
            var objVal = parseFloat(u.Soddisfazione.Soddisfazione) || 0;

            return objVal >= parseFloat(this.state.val);
          }}
          addFilter={this.props.addFilter}
          humanReadableDescription="Questo valore indica quanto gli studenti che ti hanno preceduto sono stati complessivamente soddisfatti, su una scala che va da 1 a 100"
        />
      </div>
    );
  }
}

export default DialogSoddisfazioneFilter;
