import React, { Component } from 'react';

export default class CCC extends Component {
  render() {
    return (
      <div>
        <div>我是页面CCC</div>
        <div>aaaa = {this.props.match.params.aaaa}</div>
        <div>bbbb = {this.props.match.params.bbbb}</div>
      </div>
    );
  }
}