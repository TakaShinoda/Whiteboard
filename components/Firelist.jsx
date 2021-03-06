import React, { Component } from "react";
import firebase from "firebase";
import "firebase/storage";

class Firelist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.getFireData();
  }

  getFireData() {
    let db = firebase.database();
    let ref = db.ref("sample/");
    let self = this;
    ref
      .orderByKey()
      .limitToLast(10)
      .on("value", (snapshot) => {
        self.setState({
          data: snapshot.val()
        });
      });
  }

  getTableData() {
    let result = [];
    if (this.state.data == null || this.state.data.length == 0) {
      return [
        <tr key="0">
          <th>NO DATA</th>
        </tr>
      ];
    }
    for (let i in this.state.data) {
      result.push(
        <tr key={i}>
          <th>{this.state.data[i].ID}</th>
          <td>{this.state.data[i].message}</td>
          <th>{this.state.data[i].date}</th>
        </tr>
      );
    }
    return result;
  }

  render() {
    if (this.state.data.length == 0) {
      this.getFireData();
    }
    return (
      <table>
        <tbody>{this.getTableData()}</tbody>
      </table>
    );
  }
}

export default Firelist;
