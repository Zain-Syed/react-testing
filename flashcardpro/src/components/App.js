import React from 'react';
import Stacklist from './Stacklist';

class App extends React.Component {
    render() {
        return (
            <div>
                <h2>FlashCard Pro</h2>
                <hr/>
                <Stacklist />
            </div>
        );
    }
}

export default App;