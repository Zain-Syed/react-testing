import React from 'react';
import { Button } from 'react-bootstrap';

class Experiment extends React.Component {

    buttonClick() {
        alert("Button was clicked!");
    }

    render(){
        return(
            <div>
                <Button onClick={this.buttonClick}>Click this button</Button>
            </div>
              )
    }
}

export default Experiment;