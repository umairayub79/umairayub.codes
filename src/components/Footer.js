import React, { Component } from "react";

const date = new Date();
export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <p>Umair Ayub &copy; {date.getFullYear()}</p>
      </footer>
    );
  }
}
