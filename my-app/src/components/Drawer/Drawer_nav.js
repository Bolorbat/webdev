import React from "react";
import {Drawer, List} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';
import { BrowserRouter as Router}  from "react-router-dom";
import { Link } from "react-router-dom";

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const useStyles = makeStyles((theme)=>({
    drawerPaper: {width: 'inherit', flexDirection: 'column'}
    }))

function Drawer_nav(){
    const classes = useStyles();
    return(
        <Router>
    <div style={{display:'flex', flexDirection: 'column'}}>
    <Drawer
        varient="temporary"
        anchor="right"  
        open={false}
        classess={{paper: classes.Drawer}}
    >
    <List>
            <Link target='_blank' onClick={() => window.open('https://www.facebook.com/YOLOmn/timeline')}>
                <FacebookOutlinedIcon fontSize="large" />
            </Link>
            <Link target='_blank'onClick={() => window.open('https://www.instagram.com/yolomongolia/')}>
                <InstagramIcon fontSize="large" />
            </Link>
            <Link target='_blank' onClick={() => window.open('https://www.youtube.com/channel/UCvh5ssGrpnHFjuXv8ytYIkA')}>
                <YouTubeIcon fontSize="large" />
            </Link>
        </List>
    </Drawer>
    </div>
    </Router>
    )
};

export default Drawer_nav;