import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TasksTable from './components/TasksTable';
import TaskDetails from './components/TaskDetails';
import { connect } from 'react-redux';

const drawerWidth = 150;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        color: '#fff',
        background: '#501010',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    headerlistItem: {
        paddingLeft: '18px',
        color: '#fff'
    },
    listItem: {
        color: '#fff',
        fontSize: '12px',
        textAlign: 'left',
        '&:focus': {
            borderLeft: '5px solid #4E96F7',
            backgroundColor: '#414C63',
            color: '#E1E8EF',
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        height: '100vh',
        overflow: 'auto',
        backgroundColor: '#f9e9e9',
    },
    h5: {
        marginBottom: theme.spacing.unit * 2,
    },
});

class Dashboard extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <CssBaseline />

                <Drawer
                    variant="permanent"
                    classes={{
                        paper: classNames(classes.drawerPaper),
                    }}
                >
                    <List>
                        <ListSubheader className={ classes.headerlistItem } inset>Support Center</ListSubheader>
                        <ListItem className={ classes.listItem } button onClick={this.props.onList}>
                            Task Index
                        </ListItem>
                        <ListItem className={ classes.listItem } button onClick={this.props.onViewLastClickedTask}>
                            Task detail
                        </ListItem>
                    </List>
                </Drawer>
                <main className={classes.content}>
                    <AppBar position="static" style={{ background: '#6f1212' }}>
                        <Toolbar>
                        </Toolbar>
                    </AppBar>
                    {{
                        list: <TasksTable />,
                        viewTask: <TaskDetails />,
                    }[this.props.view]}
                </main>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        view: state.view
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onViewLastClickedTask: () => dispatch({type: "LAST_CLICKED_TASK"}),
        onList: () => dispatch({type: "LIST"})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Dashboard));