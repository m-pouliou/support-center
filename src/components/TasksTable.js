import React, { Component }  from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import classnames from 'classnames';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

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
    header: {
        textAlign: 'left',
        fontSize: '18px',
        color: '#6f2c2c',
        borderBottom: '1px solid #3a0606',
    },
    taskColumn: {
        flexBasis: '15%',
    },
    noteColumn: {
        flexBasis: '50%',
    },
    customerColumn: {
        flexBasis: '15%',
    },
    dateColumn: {
        flexBasis: '15%',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
});

class TasksTable extends Component{

    render() {
        const { classes } = this.props;

        return (
            <Paper className={classes.root}>
                <Typography className={classes.header}>
                    Tasks
                </Typography>
                <List >
                    <ListItem style={{display: 'flex', flexWrap: 'wrap'}}>
                        <Typography className={classes.taskColumn}>
                            Task number
                        </Typography>
                        <Typography className={classes.noteColumn}>
                            Note
                        </Typography>
                        <Typography className={classes.customerColumn}>
                            Customer
                        </Typography>
                        <Typography className={classes.dateColumn}>
                            Date
                        </Typography>
                    </ListItem>
                </List>
                <List component="div" disablePadding>
                    {this.props.tasks.map( task => (
                        <ListItem className={classes.row} key={task.number}>
                            <Typography className={classes.taskColumn}>
                                {task.number}
                            </Typography>
                            <Typography className={classes.noteColumn}>
                                {task.summary}
                            </Typography>
                            <Typography className={classes.customerColumn}>
                                {task.customer}
                            </Typography>
                            <Typography className={classes.dateColumn}>
                                {task.date }
                            </Typography>
                            <IconButton
                                className={classnames(classes.expand, {
                                    [classes.expandOpen]: task.expanded,
                                })}
                                onClick={() => this.props.onTaskDetails(task.number)}
                                aria-expanded={task.expanded}
                                aria-label="Show more"
                            >
                                <ExpandMoreIcon/>
                            </IconButton>
                            <Collapse style={{flexBasis: '100%'}} in={task.expanded} unmountOnExit>
                                <Typography style={{ whiteSpace: 'normal'}}>{task.taskBody}</Typography>
                                <div style={{display: 'flex'}}>
                                    <Button
                                        style={{ marginLeft: 'auto'}}
                                        color="primary"
                                        onClick={() => this.props.onViewTask(task.number)}
                                    >VIEW TASK</Button>
                                </div>
                            </Collapse>
                        </ListItem>
                    ))}
                </List>
            </Paper>
        );
    }
}

const mapStateToProps = state => {
  return {
      tasks: state.tasks
  }
};

const mapDispatchToProps = dispatch => {
    return {
        onTaskDetails: (id) => dispatch({type: "TASK_DETAILS", id: id}),
        onViewTask: (id) => dispatch({type: "VIEW_TASK", id: id})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TasksTable));