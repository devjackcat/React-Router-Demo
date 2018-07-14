import React, { Component } from 'react';

import {Prompt} from 'react-router-dom'

export default class BBB extends Component {
  render() {
    return (
      <div>
      <Prompt message="别走嘛！"/>
      <div>我是页面BBB</div>
      </div>
    );
  }
}