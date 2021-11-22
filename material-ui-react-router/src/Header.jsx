import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  function BasicGrid() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={8}>
          <Grid item xs={2}>
            <Item>ЭНТЕРТАЙНМЭНТ</Item>
          </Grid>
          <Grid item xs={2}>
            <Item>БОЛОВСРОЛ</Item>
          </Grid>
          <Grid item xs={2}>
            <Item>ХУВь ХҮНИЙ ХӨГЖИЛ</Item>
          </Grid>
          <Grid item lg={2}>
            <Item>xs=8</Item>   
          </Grid>
          <Grid item xs={2}>
            <Item>xs=8</Item>
          </Grid>
          <Grid item xs={2}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={2}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item lg={2}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
      </Box>
    );
  }

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="sm" component="div" sx={{ flexGrow: 1 }}>
            Өсвөр үе, залууст ...
          </Typography>
          <BasicGrid/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
