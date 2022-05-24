//var React = require('react');
//var ReactDOM = require('react-dom');
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Comp from './Comp.jsx';
import Test from './Test';
import Func_props from './Func_props';
import Lifecycle from './Lifecycle';

const getdata=()=>{alert("Welcome")}
ReactDOM.render(
    <>
        <h1>Hello EveryOne! Good Morning</h1> 
        <h1>Welcome</h1>
        <Comp name='Juice'></Comp>
        <Test name='React'></Test>
        <Func_props data={getdata}></Func_props>
        <Lifecycle></Lifecycle>
    </>,
    document.getElementById('root'));