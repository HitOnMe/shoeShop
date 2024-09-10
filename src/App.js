import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import List from '../src/sue-shop/ProductList'


export default class App extends Component {
    render() {
        return new List.renderProduct();
    }
   
}