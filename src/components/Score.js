import React, { Component } from 'react';

class Score extends Component {
    getClassName() {
        if (this.props.score >= 80) {
            return `high`
        }
        else if (this.props.score < 80 && this.props.score >= 50) {
            return `med`
        }
        else return `low`
    }
    render() {
        return <div className={this.getClassName()}>{this.props.score}</div>

    }
}

export default Score