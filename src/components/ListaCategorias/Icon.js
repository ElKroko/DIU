import React, {Component} from 'react';
import Brightness1Icon from '@material-ui/icons/Brightness1';
//import { render } from '@testing-library/react';
//import red from "@material-ui/core/colors/red";
//import green from "@material-ui/core/colors/green";
import PropTypes from 'prop-types';

export class Icon extends Component{
    static propTypes = {
        color: PropTypes.string
    };
    render(){
        return (
            <div>
                <Brightness1Icon style={{ color: this.props.color }} >
                </Brightness1Icon>
            </div>
        );
    }
}

export default Icon;