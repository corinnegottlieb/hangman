import React, { Component } from 'react';
import Letter from './Letter'

class Solution extends Component {
    render() {
        let letters = this.props.solution.word.split("")

        return (
            <div>
                <div>
                    {letters.map((l, index) =>
                        <Letter key={index} letter={
                            this.props.letterStatus[l] ?
                                l : '_ '
                        } />
                    )}
                </div>
                <em>{this.props.solution.hint}</em>
            </div>
        )
    }
}

export default Solution