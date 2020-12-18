import React, { Component } from "react";
import styled from "styled-components";

class SelectBar extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
      dropDownValue: [],
    };
  }

  componentDidMount() {
    fetch("/data.json")
      .then((response) => response.json())
      .then((res) => {
        this.setState({ dropDownValue: res.result });
      });
  }

  handleButton = (e) => {
    const { showMenu } = this.state;
    e.preventDefault();
    this.setState({ showMenu: !showMenu });
  };

  render() {
    // console.log("set>>>>", this.state.dropDownValue);
    const { dropDownValue } = this.state;
    return (
      <BtnWrap>
        <Open onClick={this.handleButton}>open</Open>
        {this.state.showMenu ? (
          <Menu>
            {dropDownValue.map((el) => {
              return <button>{el.summary}</button>;
            })}
          </Menu>
        ) : null}
      </BtnWrap>
    );
  }
}

const BtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  margin: 0 200px;
`;

const Open = styled.button`
  width: 350px;
  padding: 10px 0;
  margin: 5px 0;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 3px;

  background-color: white;
  outline: none;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  padding: 15px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 3px;

  button {
    padding: 10px 0;
    margin: 5px 0;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 3px;
    background-color: rgba(0, 0, 0, 0.01);
  }
`;

export default SelectBar;
