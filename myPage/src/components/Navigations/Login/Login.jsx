import React, { Component } from 'react'
import './Login.css';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';


export default class Login extends Component {

    state = {
        isOpen: false,
    }

    handleClickOpen = () => {
        this.setState({ isOpen: true })
    }
    handleClose = () => {
        this.setState({
            isOpen: false
        })

    };
     useStyles = makeStyles(theme => ({
        margin: {
          margin: theme.spacing(1),
        },
      }));

    render() {

        const style = {
            marginRight: '10px',
            height: '100%',
            width: '100%',
        }
        const styles = theme => ({
            root: {
                margin: 0,
                padding: theme.spacing(2),
            },
            closeButton: {
                position: 'absolute',
                right: theme.spacing(1),
                top: theme.spacing(1),
                color: theme.palette.grey[500],
            },
        });
      
        const DialogTitle = withStyles(styles)(props => {
            const { children, classes, onClose, ...other } = props;
            return (
                <MuiDialogTitle disableTypography className={classes.root} {...other}>
                    <Typography variant="h6">{children}</Typography>
                    {onClose ? (
                        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                            <CloseIcon />
                        </IconButton>
                    ) : null}
                </MuiDialogTitle>
            );
        });

        const DialogContent = withStyles(theme => ({
            root: {
                padding: theme.spacing(2),
            },
        }))(MuiDialogContent);

        const DialogActions = withStyles(theme => ({
            root: {
                margin: 0,
                padding: theme.spacing(1),
            },
        }))(MuiDialogActions);

        return (

            < div className="Wrapper" >
                <Button variant="contained" color="secondary" style={style} onClick={this.handleClickOpen} >
                    <span >
                        {/* <img src="https://img.icons8.com/material-outlined/24/000000/user--v1.png" alt="icon" /> */}
                        Login
                    </span>
                </Button>
                <Dialog onClose={this.handleClose} aria-labelledby="customized-dialog-title" open={this.state.isOpen}>
                    <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
                        Modal title
                    </DialogTitle>
                    <FormControl >
                        <InputLabel htmlFor="input-with-icon-adornment">With a start adornment</InputLabel>
                        <Input
                            id="input-with-icon-adornment"
                            startAdornment={
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Save changes
                        </Button>
                    </DialogActions>
                </Dialog>
                <Button onClick={this.props.click} variant="outlined" color="secondary" style={style} >
                    <span >
                        {/* <img src="https://img.icons8.com/material-outlined/24/000000/user--v1.png" alt="icon" /> */}
                        signup
                    </span>
                </Button>
            </div >



        )
    }
}
