import React, { Component } from 'react';
import Letter from './Letter'

class Letters extends Component {

    getClassName(l) {
        return this.props.letterStatus[l] ? `guessed` : `available`
    }
    render() {

        return (<div>
            <div>Available Letters</div>
            <div>
                {Object
                    .keys(this.props.letterStatus)
                    .map(l => <Letter
                        selectLetter={this.props.selectLetter}
                        key={l}
                        letter={l}
                        className={this.getClassName(l)}
                    />)}
            </div>
        </div>)
    }
}

export default Letters