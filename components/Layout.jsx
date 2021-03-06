import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import style from '../static/Style';

class Layout extends Component {
    render() {
        return (
            <div>
                {style}
                <Header header={this.props.header} title={this.props.title} />
                {this.props.children}
                <Footer footer="Copyright (C) 2019 Sakamoto Laboratory." />
            </div>
        );
    }
}

export default Layout;