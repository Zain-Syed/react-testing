import React from 'react';
import { Link } from 'react-router-dom';
import stacks from '../data/stacks.json';

class Stacklist extends React.Component {
    render() {
        return (
            <div>
                {
                    stacks.map(stack => {
                        return (
                            <Link to="/stack">
                                <h4 key={stack.id}>{stack.title}</h4>
                            </Link>
                               )
                    })
                }
            </div>
        );
    }
}

export default Stacklist;