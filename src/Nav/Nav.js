import React, { Component } from 'react';
import '../App/App.css';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';

const github = require('./github.png');
const linkedin = require('./linkedin.png')
const contact = require('./contact.png');

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class Nav extends Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    render() {
        return (
            <div>
                <div className="nav">
                    <a href="https://github.com/sundrata" target="_blank"><input type="image" src={github} className="navIcons" /></a>
                    <a href="https://www.linkedin.com/in/carson-otto-a2957b138/" target="_blank"><input type="image" src={linkedin} className="navIcons2" /></a><br></br>
                    <input type="image" src={contact} className="contact" onClick={this.handleClickOpen} />

                    <Dialog
                        open={this.state.open}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={this.handleClose}
                        aria-labelledby="alert-dialog-slide-title"
                        aria-describedby="alert-dialog-slide-description"
                    >
                            <DialogTitle >
                                <h3>Contact Information</h3>
                            </DialogTitle>
                            <div id="dialoga">
                            <DialogContent>
                                <DialogContentText>
                                    <p className="dialogHead">E-Mail:<span className="dialogContent"> carson.otto15@gmail.com</span></p>
                                </DialogContentText>
                                <DialogContentText>
                                    <p className="dialogHead">Phone Number:<span className="dialogContent"> (952)-290-6113</span></p>
                                </DialogContentText>
                            </DialogContent>
                            </div>
                            <DialogActions>
                                <Button onClick={this.handleClose} color="primary">
                                    Close
                                </Button>
                            </DialogActions>                       
                    </Dialog>
                </div>
            </div>
        );
    }
}

export default Nav;