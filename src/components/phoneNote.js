import React, { Component }  from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import NoteIcon from '../assets/NoteIcon';
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

class PhoneNote extends Component{

    render() {
        const {classes} = this.props;
        return (
            <Paper className={classes.paper}>
                <Typography className={classes.header}>
                    Add a message
                </Typography>
                <TextField
                    style={{width:'100%'}}
                    label="Add Message"
                    multiline
                    rows="10"
                    value={this.props.noteMessage}
                    onChange={(e) => this.props.updateNoteMessage(e.target.value)}
                    margin="normal"
                    variant="outlined"
                />
                <div className={classes.buttonRow}>
                    <Button
                        variant="contained"
                        color="default"
                        onClick={() => this.props.onSaveNote(this.props.selectedTask, this.props.noteMessage)}
                    >
                        <NoteIcon />
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
        noteMessage: state.noteMessage,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSaveNote: (id, msg) => dispatch({type: "ADD_NOTE", id: id, noteMessage: msg}),
        updateNoteMessage: (msg) => dispatch({type: "UPDATE_NOTE_MESSAGE", noteMessage: msg}),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PhoneNote));