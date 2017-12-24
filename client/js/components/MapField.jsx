import React from 'react';
import PropTypes from 'prop-types';
import {
  Map,
  Marker,
} from 'google-maps-react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

import constants from './../constants';

import './../../sass/MapField.scss';

/**
 * A form field for collecting an address and coordinates by text or map.
 */
class MapField extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mapfield-component">
        <label
          className="mapfield-address-label"
        >
          <b>{this.props.label}</b>
          <i className="subtle"> ({constants.MAP_FIELD.ADDRESS.HINT})</i>
        </label>
        <div className="mapfield-address-autocomplete">
          <PlacesAutocomplete
            inputProps={{
              onBlur: this.props.onAddressBlur,
              onChange: this.props.onAddressChange,
              placeholder: constants.MAP_FIELD.ADDRESS.PLACEHOLDER,
              value: this.props.address,
            }}
            classNames={{
              input: 'mapfield-address-input',
              autocompleteContainer: 'mapfield-address-autocomplete-container',
            }}
          />
        </div>
        <div className="mapfield-map-container">
          <Map
            google={window.google}
            initialCenter={constants.MAP_FIELD.MAP.INITIAL_CENTER}
            zoom={constants.MAP_FIELD.MAP.INITIAL_ZOOM}
            onClick={this.props.onMapClick}
          >
            {this.props.location ? (
              <Marker
                title={this.props.address}
                name={this.props.address}
                position={this.props.location}
                icon={{
                  url: this.props.affirmativeMarker
                    ? constants.RESULTS_MAP.SUPPORTS_ICON
                    : constants.RESULTS_MAP.OPPOSES_ICON,
                  anchor: new google.maps.Point(16,51),
                  scaledSize: new google.maps.Size(32,51),
                }}
              />
            ) : null}
          </Map>
        </div>
      </div>
    )
  }
}

MapField.propTypes = {
  address: PropTypes.string,
  affirmativeMarker: PropTypes.bool,
  label: PropTypes.string,
  location: PropTypes.object,
  onAddressBlur: PropTypes.func,
  onAddressChange: PropTypes.func,
  onMapClick: PropTypes.func,
}

export default MapField;
