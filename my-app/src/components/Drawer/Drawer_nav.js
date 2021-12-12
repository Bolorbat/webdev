import React from "react";
import {Drawer, List, ListItem, ListItemIcon} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';
import { Link } from "react-router-dom";

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const useStyles = makeStyles((theme)=>({
    drawerPaper: {width: 'inherit'}
    }))


function Drawer_nav(){
    const classes = useStyles();
    return(
    <div style={{display:'flex'}}>
    <Drawer
        style={{width:"220px"}}
        varient="permanent"
        anchor="right"
        aria-label="open drawer"
            edge="start"
        classess={{paper: classes.Drawer}}
    >
    <List>
        <Link to="https://www.facebook.com/YOLOmn/timeline" target="_blank">
        <ListItem button>
            <ListItemIcon>
            <FacebookOutlinedIcon/>
            </ListItemIcon>
        </ListItem>
        </Link>
        <Link to="https://www.instagram.com/yolomongolia/" target="_blank">
        <ListItem button>
            <ListItemIcon>
           <InstagramIcon/>
            </ListItemIcon>
        </ListItem>
        </Link>
        <Link to="https://www.youtube.com/channel/UCvh5ssGrpnHFjuXv8ytYIkA" target="_blank">
        <ListItem button>
            <ListItemIcon>
           <YouTubeIcon/>
            </ListItemIcon>
        </ListItem>
        </Link>
    </List>
    </Drawer>
    </div>
    )
};

export default Drawer_nav;