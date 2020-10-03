import React, { Component }  from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    paper: {
        width: '50%',
        height: '50%',
        margin: '25vh auto',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        outline: 'none',
    },
    header: {
        textAlign: 'left',
        fontSize: '18px',
        color: '#4a4a4a',
        borderBottom: '1px solid #979797',
    },
    buttonRow: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'flex-end',
        marginTop: '20px',
    }
});

class CallNote extends Component{

    render() {
        const {classes} = this.props;
        return (
            <Paper className={classes.paper}>
                <Typography className={classes.header}>
                    Add a call note and a call duration
                </Typography>
                <TextField
                    style={{width:'100%'}}
                    label="Add Call Note"
                    multiline
                    rows="10"
                    value={this.props.callMessage}
                    onChange={(e) => this.props.updateCallMessage(e.target.value)}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    variant="outlined"
                    label="Duration"
                    value={this.props.callDuration}
                    onChange={(e) => this.props.updateCallDuration(e.target.value)}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">min</InputAdornment>,
                    }}
                />
                <div className={classes.buttonRow}>
                    <Button
                        variant="contained"
                        color="default"
                        onClick={() => this.props.onSaveCall(this.props.selectedTask, this.props.callMessage, this.props.callDuration)}
                    >
                        <img src={require('../assets/phone.png')} />
                        <Typography style={{marginLeft: '10px'}}>
                            Save
                        </Typography>
                    </Button>
                </div>
            </Paper>
        );
    }
}

const mapStateToProps = state => {
    return {
        selectedTask: state.selectedTask,
        callMessage: state.callMessage,
        callDuration: state.callDuration
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSaveCall: (id, msg, min) => dispatch({type: "ADD_CALL", id: id, callMessage: msg, callDuration: min}),
        updateCallMessage: (msg) => dispatch({type: "UPDATE_CALL_MESSAGE", callMessage: msg}),
        updateCallDuration: (min) => dispatch({type: "UPDATE_CALL_DURATION", callDuration: min}),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CallNote));