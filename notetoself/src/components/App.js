import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import Notes from './Notes';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';

const cookie_key = "NOTES";

class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            text: '',
            notes: [],
        }
    }

    handleSubmit(){
<<<<<<< HEAD
        //const notes = this.state.notes;
=======
>>>>>>> 584f63d30dbe86c034dfa1adc7914a30573d0847
        //destructured syntax
        const { notes, text } = this.state;
        notes.push({ text });
        this.setState({ notes });
        bake_cookie(cookie_key, this.state.notes);
    }

    handleDelete(){
        delete_cookie(cookie_key);
        this.setState({ notes: [] });
    }
    
    componentDidMount() {
        const notes = read_cookie(cookie_key);
        this.setState({ notes });
    }



    render() {
        return(
            <div>
                <h2>Notes</h2>
                <Form inline>
                    <FormControl onChange={(event) => this.setState({text: event.target.value})} />
                    <Button onClick={() => this.handleSubmit()}>Submit</Button>
                </Form>
                {
                    this.state.notes.map((note, index) => {
                        return (
                            <Notes key={index} note={note}/>
                        )
                    })
                }
                <hr/>
                <Button onClick={() => this.handleDelete()}>Clear Notes</Button>
            </div>
        )
    }
}

export default App;