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
        let val = event.target.value;
        this.setState({
            [name]: val
        });
    }


    render() {
        return (
            <div classNama="">
                <form onSubmit={this.handleSubmit}>
                    <Box component="span" display="block">
                        <TextFiled
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
                        <h1> Hallo: {this.state.name}  </h1>
                    </Box>
                </form>
            </div>
        );
    }
}