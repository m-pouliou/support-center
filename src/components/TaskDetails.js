import React, { Component }  from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import NoteIcon from '../assets/NoteIcon';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import CallNote from './callNote';
import PhoneNote from './phoneNote';

const styles = theme => ({
    root: {
        width: '90%',
        margin: '28px auto 0 auto',
        padding: '26px 26px 59px 26px',
        overflowX: 'auto',
    },
    row: {
        display: 'flex',
        flexWrap: 'wrap',
        '&:nth-of-type(even)': {
            backgroundColor: '#ffecec',
        },
    },
    customer: {
        flexBasis: '70%',
        textAlign: 'left',
        verticalAlign: 'middle',
        margin: 10,
        height: '60px',
        lineHeight: '60px',
    },
    date: {
        flexBasis: '20%',
        textAlign: 'right',
        verticalAlign: 'middle',
        margin: 10,
        marginLeft: 'auto',
        height: '60px',
        lineHeight: '60px',
    },
    iconColumn: {
        width: '20px',
        height: '20px',
        marginRight: '20px',
    },
    messageColumn: {
        flexBasis: '80%',
    },
    dateColumn: {
        marginLeft: 'auto',
    },
    buttonRow: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'flex-end',
        marginTop: '20px'
    },
    header: {
        textAlign: 'left',
        fontSize: '18px',
        color: '#6f2c2c',
        borderBottom: '1px solid #3a0606',
        marginBottom: '10px'
    },
    bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
    },
});

class TaskDetails extends Component{

    render() {
        const { classes } = this.props;
        const taskArray = this.props.tasks.filter((el) => el.number === this.props.selectedTask);
        const task = taskArray[0];
        let dateTime;
        if (task !== undefined ) {
            dateTime = task.date.split(" ");
        } else {
            dateTime = Date.now();
        }
        return (
            <React.Fragment>
            <Paper className={classes.root}>
                <Typography className={classes.header}>
                    Task information
                </Typography>
                <div style={{display: 'flex', flexWrap: 'no-wrap',}}>
                <Avatar src={task.avatar} className={classes.bigAvatar}/>
                <Typography className={classes.customer} alignLeft variant="h5" gutterBottom>
                    {task.customer}
                </Typography>
                <Typography className={classes.date} gutterBottom>
                    {dateTime[0]}
                </Typography>
                </div>
                <Typography style={{textAlign: 'left'}}>
                    {task.taskBody}
                </Typography>
            </Paper>
            <Paper className={classes.root}>
                <Typography className={classes.header}>
                    Log
                </Typography>
                <List component="div" disablePadding>
                    {task.logs.map( log => (
                        <ListItem className={classes.row} key={log.id}>
                            <div className={classes.iconColumn}>
                                {{
                                    call: <img src={require('../assets/phone.png')} />,
                                    note: <NoteIcon />,
                                }[log.type]}
                            </div>
                            <Typography className={classes.messageColumn}>
                                {log.message}
                            </Typography>
                            <Typography className={classes.dateColumn}>
                                {log.date}
                            </Typography>
                        </ListItem>
                    ))}
                </List>
                <div className={classes.buttonRow}>
                    <Button
                        variant="contained"
                        color="default"
                        style={{marginRight: '30px'}}
                        onClick={this.props.openCallModal}
                    >
                        <img src={require('../assets/phone.png')} />
                        <Typography style={{marginLeft: '10px'}}>
                        ADD CALL
                        </Typography>
                    </Button>
                    <Button variant="contained" color="default" onClick={this.props.openNoteModal}>
                        <NoteIcon />
                        <Typography style={{marginLeft: '10px'}}>
                        ADD NOTE
                        </Typography>
                    </Button>
                    <Modal
                        open={this.props.callModal}
                        onClose={this.props.closeCallModal}
                    >
                        <CallNote/>
                    </Modal>
                    <Modal
                        open={this.props.noteModal}
                        onClose={this.props.closeNoteModal}
                    >
                        <PhoneNote/>
                    </Modal>
                </div>
            </Paper>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        selectedTask: state.selectedTask,
        tasks: state.tasks,
        callModal: state.callModal,
        noteModal: state.noteModal
    }
};

const mapDispatchToProps = dispatch => {
    return {
        openNoteModal: () => dispatch({type: "OPEN_NOTE_MODAL"}),
        closeNoteModal: () => dispatch({type: "CLOSE_NOTE_MODAL"}),
        openCallModal: () => dispatch({type: "OPEN_CALL_MODAL"}),
        closeCallModal: () => dispatch({type: "CLOSE_CALL_MODAL"}),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TaskDetails));