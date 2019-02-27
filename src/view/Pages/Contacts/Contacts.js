import React, { Component } from "react";

import globalClasses from "../../../index.css";
import classes from "./Contacts.css";

class Contacts extends Component {
  state = {
    inputFields: [
      {
        type: "text",
        inputName: "name",
        value: "",
        placeholder: "Name*",
        valid: false,
        blured: false,
        errorMsg: "",
        validationRules: {
          required: true
        }
      },
      // {
      //   type: "text",
      //   inputName: "secondName",
      //   value: "",
      //   placeholder: "Second Name",
      //   valid: false,
      //   required: true,
      //   blured: false,
      //   errorMsg: "",
      //   validationRules: {
      //     required: true
      //   }
      // },
      {
        type: "email",
        inputName: "email",
        value: "",
        placeholder: "Email*",
        valid: false,
        required: true,
        blured: false,
        errorMsg: "",
        validationRules: {
          required: true,
          isEmail: true
        }
      },
      {
        type: "tel",
        inputName: "phone",
        value: "",
        placeholder: "Phone",
        valid: false,
        blured: false,
        errorMsg: "",
        validationRules: {
          isNumeric: true,
          isPhoneNumber: true
        }
      },
      {
        type: "text",
        inputName: "website",
        value: "",
        placeholder: "Website",
        valid: true,
        blured: false,
        errorMsg: ""
      },
      // {
      //   type: "text",
      //   inputName: "company",
      //   value: "",
      //   placeholder: "Company",
      //   valid: true,
      //   blured: false,
      //   errorMsg: ""
      // }
    ],
    message: ""
  };

  checkValidity = (value, validationRules) => {
    let isValid = true;
    let errorMsg = "";

    if (!validationRules) {
      return { isValid, errorMsg };
    }

    if (validationRules.required) {
      isValid = value.trim() !== "" && isValid;
      if (!isValid) {
        errorMsg = errorMsg ? errorMsg : "This field is required";
      }
    }

    if (validationRules.isEmail) {
      // }
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
      if (!isValid) {
        errorMsg = errorMsg ? errorMsg : "Email must be valid";
      }
    }

    if (validationRules.isPhoneNumber) {
      if (value) {
        const pattern = /^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$/im;
        isValid = pattern.test(value) && isValid;
        isValid =
          (value.length === 10 || value.length === 12 || value.length === 13) &&
          isValid &&
          pattern.test(value);
        if (!isValid) {
          errorMsg = errorMsg ? errorMsg : "Phone number must be valid";
        }
      }
    }

    return { isValid, errorMsg };
  };

  updatedInput = (inputName, changedValues) => {
    const updatedInputFields = this.state.inputFields.map(input => {
      if (inputName === input.placeholder) {
        return {
          ...input,
          ...changedValues
        };
      } else {
        return {
          ...input
        };
      }
    });
    return updatedInputFields;
  };

  onChangeHandler = e => {
    const updatedInputFields = this.updatedInput(
      e.target.attributes.placeholder.value,
      {
        value: e.target.value
      }
    );
    this.setState({
      ...this.state,
      inputFields: updatedInputFields
    });
  };

  onFocusHandler = e => {
    const updatedInputFields = this.updatedInput(
      e.target.attributes.placeholder.value,
      {
        blured: false,
        errorMsg: ""
      }
    );
    this.setState({
      ...this.state,
      inputFields: updatedInputFields
    });
  };

  onBlurHandler = e => {
    const updatedInputFields = this.state.inputFields.map(input => {
      if (e.target.attributes.placeholder.value === input.placeholder) {
        const { isValid, errorMsg } = this.checkValidity(
          e.target.value,
          input.validationRules
        );
        return {
          ...input,
          valid: isValid,
          errorMsg: errorMsg,
          blured: true
        };
      } else {
        return {
          ...input
        };
      }
    });
    this.setState({
      ...this.state,
      inputFields: updatedInputFields
    });
  };

  onTextAreaChangeHandler = e => {
    this.setState({
      message: e.target.value
    });
  };

  onSubmitHandler = e => {
    const allFieldsAreValid = this.state.inputFields.reduce(
      (accumulator, inputField) => accumulator && inputField.valid,
      true
    );

    if (allFieldsAreValid) {
      const formData = this.state.inputFields.reduce(
        (accumulator, inputField) => {
          accumulator[inputField.inputName] = inputField.value;
          return accumulator;
        },
        {}
      );
      formData.msg = this.state.message;
      const jsonFormData = JSON.stringify(formData);
      fetch("https://taraskoinc.firebaseio.com/mssg.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: jsonFormData
      }).then(response =>
        response.json().then(body => {
          return null;
        })
      );
    }
  };

  render() {
    const jsxInputFields = this.state.inputFields.map(inputField => {
      return (
        <div
          className={`${classes.InputWrapper} ${globalClasses["col-55"]}`}
          key={inputField.placeholder}
        >
          <input
            type={inputField.type}
            value={inputField.value}
            placeholder={inputField.placeholder}
            id={inputField.placeholder}
            className={`${classes.Input} ${
              !inputField.valid && inputField.blured ? classes.InputDanger : ""
            }`}
            onChange={this.onChangeHandler}
            onFocus={this.onFocusHandler}
            onBlur={this.onBlurHandler}
          />
          {!inputField.valid && inputField.blured ? (
            <label
              className={classes.ErrorLabel}
              htmlFor={inputField.placeholder}
            >
              {inputField.errorMsg}
            </label>
          ) : null}
        </div>
      );
    });

    return (
      <div className={`${classes.ContactsWrapper} page`}>
        <h1 className={classes.Header}>Like what you seeing?</h1>
        <h4 className={classes.SubHeader}>
          Contact me, or just call 0966797052
        </h4>
        <form
          onSubmit={this.onSubmitHandler}
          action=""
          className={classes.Form}
        >
          {jsxInputFields}
          <textarea
            onChange={this.onTextAreaChangeHandler}
            value={this.state.message}
            className={`${classes.TextArea} ${globalClasses["col-12"]}`}
            cols="40"
            rows="10"
          />
        </form>
        <div>
          <div className={classes.ButtonWrapper}>
            <button
              onClick={this.onSubmitHandler}
              className={classes.SendMessageButton}
            >
              Send message
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Contacts;
