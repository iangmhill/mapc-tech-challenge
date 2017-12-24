import React from 'react';
import PropTypes from 'prop-types';
import {
  Map,
  Marker,
} from 'google-maps-react';

import constants from './../constants';

import './../../sass/ResultsMap.scss';

class ResultsMap extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const markers = this.props.voters.map((voter, index) => (
      <Marker
        key={index}
        title={voter.address}
        name={voter.address}
        position={voter.jsonPoint}
        icon={{
          url: voter.supportsCandidate
            ? constants.RESULTS_MAP.SUPPORTS_ICON
            : constants.RESULTS_MAP.OPPOSES_ICON,
          anchor: new google.maps.Point(16,51),
          scaledSize: new google.maps.Size(32,51),
        }}
      />
    ));
    return (
      <div className="resultsmap-component">
        <Map
          google={window.google}
          initialCenter={constants.MAP_FIELD.MAP.INITIAL_CENTER}
          zoom={constants.MAP_FIELD.MAP.INITIAL_ZOOM}
          onClick={this.props.onMapClick}
        >
          {markers}
        </Map>
      </div>
    )
  }
}

ResultsMap.propTypes = {
}

export default ResultsMap;
