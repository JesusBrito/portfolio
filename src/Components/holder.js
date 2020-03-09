import Holder from 'react-holder'
import React, { Component } from 'react';

export default class HolderImg extends Component {
    render() {
        return (
            <div>
                <Holder
                    // width and height can be a number or a string
                    width="100%"
                    height="200px"

                    // default: false
                    updateOnResize={true}

                    // All holder-js options are supported here.
                    // https://github.com/imsky/holder

                    // Other props will be passed on to the generated <img /> tag
                    className={'my-custom-class'}
                />
            </div>
        )
    }
}