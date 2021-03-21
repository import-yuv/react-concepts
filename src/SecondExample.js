import React from "react";
export default class GrandParent extends React.Component {
  // rendering the parent and child component
  render() {
    return (
      <ParentComp>
        <MyButton />

        <hr></hr>
        <MyButton />
      </ParentComp>
    );
  }
}
// The parent component
class ParentComp extends React.Component {
  render() {
    let newProp = "red";
    return (
      <div>
        {React.Children.map(this.props.children, (child) => {
          return React.cloneElement(child, { newProp }, null);
        })}
      </div>
    );
  }
}
// The child component
class MyButton extends React.Component {
  render() {
    return <button style={{ color: this.props.newProp }}>Hello World!</button>;
  }
}

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
