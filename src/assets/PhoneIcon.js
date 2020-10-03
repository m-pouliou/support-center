import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { withStyles } from '@material-ui/core/styles';


const styles = () => ({
    icon: {
        width: '19px',
        height: '19px'
    }
});

const PhoneIcon = (props) => {
    const {classes } = props;
    return (
        <SvgIcon className={classes.icon} viewBox="0 0 18 18">
            <svg
                width="19px"
                height="19px"
                viewBox="0 0 19 19"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g id="Notes-app" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Cases" transform="translate(-838.000000, -871.000000)">
                        <polygon id="Shape" points="838 871 857 871 857 890 838 890"></polygon>
                    </g>
                </g>
            </svg>
        </SvgIcon>
    );
};

export default withStyles(styles)(PhoneIcon);