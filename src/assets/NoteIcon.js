import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { withStyles } from '@material-ui/core/styles';


const styles = () => ({
    icon: {
        width: '18px',
        height: '18px'
    }
});

const NoteIcon = (props) => {
    const {classes } = props;
    return (
        <SvgIcon className={classes.icon} viewBox="0 0 18 18">
            <svg
                width="18px"
                height="18px"
                viewBox="0 0 18 18"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g id="Notes-app" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Cases" transform="translate(-1013.000000, -871.000000)">
                        <g id="ic_speaker_notes_24px-copy" transform="translate(1012.000000, 870.000000)">
                            <polygon id="Shape" points="0 0 20 0 20 20 0 20"></polygon>
                            <path d="M16.6666667,1.66666667 L3.33333333,1.66666667 C2.41666667,1.66666667 1.675,2.41666667 1.675,3.33333333 L1.66666667,18.3333333 L5,15 L16.6666667,15 C17.5833333,15 18.3333333,14.25 18.3333333,13.3333333 L18.3333333,3.33333333 C18.3333333,2.41666667 17.5833333,1.66666667 16.6666667,1.66666667 Z M6.66666667,11.6666667 L5,11.6666667 L5,10 L6.66666667,10 L6.66666667,11.6666667 Z M6.66666667,9.16666667 L5,9.16666667 L5,7.5 L6.66666667,7.5 L6.66666667,9.16666667 Z M6.66666667,6.66666667 L5,6.66666667 L5,5 L6.66666667,5 L6.66666667,6.66666667 Z M12.5,11.6666667 L8.33333333,11.6666667 L8.33333333,10 L12.5,10 L12.5,11.6666667 Z M15,9.16666667 L8.33333333,9.16666667 L8.33333333,7.5 L15,7.5 L15,9.16666667 Z M15,6.66666667 L8.33333333,6.66666667 L8.33333333,5 L15,5 L15,6.66666667 Z" id="Shape" fill="#292D45" fill-rule="nonzero"></path>
                        </g>
                    </g>
                </g>
            </svg>
        </SvgIcon>
    );
};

export default withStyles(styles)(NoteIcon);