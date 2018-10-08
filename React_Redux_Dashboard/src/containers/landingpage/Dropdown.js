import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import '../../style/Dropdown.css';

export default class Dropdown extends Component {

  constructor(props) {
    super(props);    
    this.onChangeFilter = this.onChangeFilter.bind(this);
    this.selectedValue = null;
}

onChangeFilter(selectedValue) {
   let selectedValueTemp = (selectedValue == null) ? this.props.emptySelect : selectedValue;
    this.selectedValue = selectedValue;
    this.props.callback(selectedValueTemp, this.props.label);
    this.forceUpdate();
}

  render() {
    this.selectedValue = (this.props.defaultValue && this.props.defaultValue.value && this.props.defaultValue.value !== 'select') ? this.props.defaultValue : null;
    return (
      <div>
        <Select
          labelKey="label"
          valueKey="value"
          searchable={true}
          onChange={this.onChangeFilter}
          options={this.props.data} />
    </div>
    );
  }
}

