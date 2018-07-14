import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

import './index.css'

const checkURL = (match,Location) => {
  console.log(match)
  console.log(Location)
}

const Nav = () => (
  <div>
    <NavLink exact to='/' className='large red' activeClassName='blue'>AAA</NavLink>
    <br/>
    <NavLink to='/b' className='large' activeClassName='blue'>BBB</NavLink>
    <br/>
    {/* <NavLink isActive={checkURL} to='/c/#hello=world' className='large' activeClassName='blue'>CCC</NavLink> */}
    <NavLink isActive={checkURL} to='/c/hello/world' className='large' activeClassName='blue'>CCC</NavLink>
    <br/>
    <NavLink to='/d' className='large' activeClassName='blue'>to BBB</NavLink>
    <br/>
    <NavLink to='/404' className='large' activeClassName='blue'>404</NavLink>
  </div>
)

export default Nav