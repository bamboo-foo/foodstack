import { Component } from "react";
import React from "react";
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";

// class FoodSearchForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: "" };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ value: event.target.value });
//   }

//   handleSubmit(event) {
//     alert("A name was submitted: " + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             value={this.state.value}
//             onChange={this.handleChange}
//           />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

const DropdownPage = () => {
  return (
    <MDBDropdown>
      <MDBDropdownToggle caret color="primary">
        MDBDropdown
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
        <MDBDropdownItem>Vegetarian</MDBDropdownItem>
        <MDBDropdownItem>Vegan</MDBDropdownItem>
        <MDBDropdownItem>Ketogenic</MDBDropdownItem>
        <MDBDropdownItem>Gluten Free</MDBDropdownItem>
        <MDBDropdownItem>Pescatarian</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
  );
};

// export default { FoodSearchForm, DropdownPage };
// export default { FoodSearchForm, DropdownPage };
export default DropdownPage;
