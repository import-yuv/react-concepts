import React, { Component } from "react";
/***
 *  SYNTAX FOR React.CloneElement
 *
 *  React.CloneElement(element,props,[...children]);
 *  element: the element which you want to clone
 *  props:  value you want to pass as props
 *  children : optional or the childern of the cloned object
 *
 *
 */

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div>
          <h2>Parent</h2>
          <Hello>
            <button value="Button A">A</button>
            <button value="Button B">B</button>
            <button value="Button C">C</button>
          </Hello>
        </div>
      </>
    );
  }
}

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedButton: "None",
    };
  }
  selectedButton = (selectedButton) => {
    this.setState({ selectedButton });
  };
  newfunction = (child) =>
    React.cloneElement(child, {
      onClick: this.selectedButton.bind(this, child.props.value),
    });
  render() {
    let items = React.Children.map(this.props.children, this.newfunction);

    return (
      <>
        <h2>Children</h2>
        <h2>You Select:{this.state.selectedButton}</h2>
        {items}
      </>
    );
  }
}
export default Parent;
