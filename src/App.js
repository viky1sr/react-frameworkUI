import React, {Component} from 'react';
import './App.css';



//Componet dari framework Material UI
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import TextFiled from '@material-ui/core/TextField';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: ''
        }
    }
    handleName = (event) => {
        let name = event.target.name;
        this.setState({
            [name]: ''
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
    }


    render() {
        return (
            <div classNama="App">
                <form onSubmit={this.handleSubmit}>
                    <Box component="span" display="block">
                        <TextFiled
                            type="text"
                            id="standard-with-placeholder"
                            label="Nama Lengkap"
                            placeholder="Masukan nama"
                            margin="normal"
                            name="name"
                            onChange={this.handleName}
                         />
                    </Box>
                    <Box component="span" display="block">
                        <Button variant="contained" color="primary" type="submit">
                            Change your Nama
                        </Button>
                    </Box>
                </form>
                <h1 value={this.state.name}> Hallo:  </h1>
            </div>
        );
    }
}