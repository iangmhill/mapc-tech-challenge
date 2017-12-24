import React from 'react';
import PropTypes from 'prop-types';

import constants from './../constants';

import './../../sass/BooleanField.scss';

class BooleanField extends React.Component {
  constructor(props) {
    super(props);
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleOptionChange(event) {
    this.props.onChange(event.target.value === 'true');
  }

  render() {
    return (
      <div className="booleanfield-component">
        <label
          className="booleanfield-label"
        >
          <b>{this.props.label}</b>
        </label>
        <label>
          <input
            type="radio"
            value="true"
            name={this.props.name}
            onChange={this.handleOptionChange}
            checked={this.props.value === true}
          />
          <span>{constants.BOOLEAN_FIELD.RESPONSES.YES}</span>
        </label>
        <label>
          <input
            type="radio"
            value="false"
            name={this.props.name}
            onChange={this.handleOptionChange}
            checked={this.props.value === false}
          />
          <span>{constants.BOOLEAN_FIELD.RESPONSES.NO}</span>
        </label>
      </div>
    )
  }
}

BooleanField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func,
}

export default BooleanField;
