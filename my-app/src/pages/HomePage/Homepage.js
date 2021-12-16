import React from 'react';
import classes from './HomePage.module.css';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import Medeelist from '../../components/list/Medeelist';
import DATA from './DATA';
import { Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@mui/system';

const useStyles = makeStyles({
    root: {
        border: '1px solid #000000',
        height: 'auto !important',
        width: 'auto !important',
        padding: '3px 6px',
        position: 'relative',
        margin: 0,
        backgroundColor: 'white',
    },
    
  });
    function HomePage() {
        const makestyle = useStyles();
        return<>
            <div className={classes.container}>
            
                <Link className={classes.header_word}to='/' style={{ textDecoration: 'none' }}>
                    <Typography varient="h1"  gutterBottom>
                        Онцлох мэдээ
                    </Typography>
                 </Link>
                 <Button variant="outlined" className={makestyle.root}>{'<'}</Button>
                <Button variant="outlined" className={makestyle.root}>{'>'}</Button>
            <section> 
            <Box
                mb={2}
                display="flex"
                flexDirection="column"
                height="600px"
                style={{
                    overflow: "hidden",
                    overflowX: "scroll" // added scroll
                }}
                >
                <Medeelist classname={classes.container} meetups={DATA}/>
             </Box>
            </section>
                <Link className={classes.header_word} to='/' style={{ textDecoration: 'none' }}>
                    <Typography varient="h1"  gutterBottom>
                        Yolo ВИДЕО
                    </Typography>
                </Link>
                <ul className={classes.nav}>
                    <Button className={classes.a}>
                        <p>Хөгжилтэй</p>
                    </Button>
                    <Button className={classes.b}>
                        <p>Хэрэгтэй</p>
                    </Button>
                    <Button className={classes.b}>
                        Сонирхолтой
                    </Button>
                </ul>
            <img src='https://www.yolo.mn/img/chart_image/101120211636506327_1889896090.jpeg' alt='zurag' className={classes.image}/>
            <ul className={classes.p_nav}>
                    <p className={classes.p}>1. WOLFIZM | - ХӨГЖИЛТЭЙ 21 АСУУЛТ | S2 EP1 </p>
                    <p className={classes.p}>2. Төмс хөвгүүн vs Намхан охин  -</p>
                    <p className={classes.p}>3. WOLFIZM | - ХӨГЖИЛТЭЙ 21 АСУУЛТ | S2 EP1 </p>
                    <p className={classes.p}>4. Төмс хөвгүүн vs Намхан охин  -</p>
                    <p className={classes.p}>5. WOLFIZM | - ХӨГЖИЛТЭЙ 21 АСУУЛТ | S2 EP1 </p>
                    <p className={classes.p}>6. Төмс хөвгүүн vs Намхан охин  -</p>
                    <p className={classes.p}>7. WOLFIZM | - ХӨГЖИЛТЭЙ 21 АСУУЛТ | S2 EP1 </p>
                    <p className={classes.p}>8. Төмс хөвгүүн vs Намхан охин  -</p>
                 </ul>


                <Link className={classes.header_word} to='/sub' style={{ textDecoration: 'none' }}>
                    <Typography varient="h1"  gutterBottom>
                        Сонжоо
                    </Typography>
                </Link>
                    <div className={classes.row}>
                    <img src='https://www.yolo.mn/img/quiz_image/140920211631615124_85007490.jpeg' alt="szurag" className={classes.simage}/>
                    <img src='https://www.yolo.mn/img/banner_image/171120201605587429_670907913.jpeg' alt='psycho' className={classes.simage}/>
                    </div>
                    <Link to='/110' style={{ textDecoration: 'none' }}>
                    <p className={classes.sp}>СОНЖОО: Чиний дотор ямар хүн нуугдаж байгаа бол?</p>
                    </Link>
                <Link className={classes.header_word} to='/' style={{ textDecoration: 'none' }}>
                    <Typography varient="h1"  gutterBottom>
                        Хамгийн
                    </Typography>
                </Link>
                <section> 
                <Medeelist classname={classes.container} meetups={DATA}/>
                <Medeelist classname={classes.container} meetups={DATA}/>
                </section>
            </div>
            </>
        };
    

export default HomePage;