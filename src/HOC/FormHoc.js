import React, { Component } from "react";
import {validateEmail, validateWebsiteName} from 'utils/validateHelpers'


export default (ComposedComponent) => class FormHoc extends Component {

  state = {
    values: {},
    submitted: false,
    errors: {},
    validationRules: {}
  };

  onStateDataCatch = (fieldsProps) => {

    let values, validationRules;

    fieldsProps.forEach(fieldProp => {
      values = {...values, [fieldProp.name]: ''};
      validationRules = {...validationRules,
        [fieldProp.name]: {...fieldProp.validationRules}}
    });

    this.setState({values, errors: values, validationRules});

  };

  onChange = (name, value) => {
    const {validationRules} = this.state;
    if (this.state.errors[name]) {
      this.validate({[name]: value}, validationRules);
    }
    this.setState({values: {...this.state.values, [name]:value}})
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.onSubmit(this.props.handleSubmit)();
  };

  onSubmit = (handleSubmit) => () => {
    const {values, validationRules} = this.state;
    if (this.validate(values, validationRules)){
      handleSubmit(values);
      this.setState({submitted: true})
    }
  };

  validate(values, settings) {
    let errors = {};

    for (let valueName in values) {
      if (values.hasOwnProperty(valueName)) {

        const value = values[valueName];
        const validationRules = settings[valueName];

        for (let ruleName in validationRules) {
          if (validationRules.hasOwnProperty(ruleName)) {

            if (ruleName === 'isEmail' && value) {
              if (!validateEmail(value)) {
                errors[valueName] = validationRules[ruleName] || 'Looks like an invalid email address';
                break;
              } else {
                errors[valueName] = ''
              }
            }
            else if(ruleName === 'isUrl' && value) {
              if (!validateWebsiteName(value)) {
                errors[valueName] = validationRules[ruleName] || 'Looks like an invalid url address';
                break;
              } else {
                errors[valueName] = ''
              }
            }
            else if(ruleName === 'ranged' && value) {
              let from = validationRules[ruleName].from;
              let to = validationRules[ruleName].to;
              let valLength = value.trim().length;
              if (from > valLength || to < valLength) {
                errors[valueName] = 'Field should contain min. ' + from + ', max. ' + to + ' characters';
                break;
              } else {
                errors[valueName] = ''
              }
            }
            else if(ruleName === 'required') {
              if (!value) {
                errors[valueName] = validationRules[ruleName] || 'Please fill this field';
                break;
              } else {
                errors[valueName] = ''
              }
            }
          }
        }
      }
    }

    this.setState({errors: {...this.state.errors, ...errors}});
    const valid = Object.keys(errors).every(key => errors[key] === '');
    return valid
  }

  render() {
    return <ComposedComponent {...this.props}
                              throwHocStateData = {this.onStateDataCatch}
                              values = {this.state.values}
                              submitted = {this.state.submitted}
                              errors = {this.state.errors}
                              onChange = {this.onChange}
                              onFormSubmit = {this.onFormSubmit}
                              onSubmit = {this.onSubmit}
                              validate = {this.validate}
    />
  }
};