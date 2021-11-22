import React from 'react'
import {makeStyles} from "@material-ui/core/styles"

import { BrowserRouter as Router} from 'react-router-dom';

import { Drawer,List, ListItem, ListItemIcon} from '@material-ui/core';

import Facebook from "@material-ui/icons/Facebook";

import Header from './Header';

const useStyles = makeStyles((theme)=>({
  drawpaper: {width: 'inherit'}
}
))
function App() {
  const classes = useStyles();
  return (
    <Router>
     <Header/>
      <div style={{display: 'flex'}}>
        <Drawer 
        style={{width: '100px'}}
        variant="persistent"
        anchor="right"
        open={true}
        classes={{paper: classes.drawpaper}}
        > 
        <List>
          <ListItem button to="https://www.facebook.com/YOLOmn/timeline">
            <ListItemIcon>
              <Facebook />
            </ListItemIcon>
          </ListItem>
        </List>
        
        </Drawer>
      </div>
    </Router>
    
  );
}

export default App;
