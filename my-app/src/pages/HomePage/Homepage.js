import React from 'react';
import classes from './HomePage.module.css';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import Medeelist from '../../components/list/Medeelist';
import DATA from './DATA';


    function HomePage() {
        return<>
            <div className={classes.container}>
            <Link className={classes.header_word} to='/' style={{ textDecoration: 'none' }}>
                Онцлох мэдээ
            </Link>
            <Button variant="outlined" className={classes.arrow}>{'<'}</Button>
            <Button variant="outlined" className={classes.arrow}>{'>'}</Button>
            <section> 
                <Medeelist classname={classes.container} meetups={DATA}/>
            </section>
                <Link className={classes.header_word} to='/' style={{ textDecoration: 'none' }}>
                    Yolo ВИДЕО
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
                    Сонжоо
                </Link>
                    <div className={classes.row}>
                    <img src='https://www.yolo.mn/img/quiz_image/140920211631615124_85007490.jpeg' alt="szurag" className={classes.simage}/>
                    <img src='https://www.yolo.mn/img/banner_image/171120201605587429_670907913.jpeg' alt='psycho' style={{width:"555px"}}/>
                    </div>
                    <Link to='/110' style={{ textDecoration: 'none' }}>
                    <p className={classes.sp}>СОНЖОО: Чиний дотор ямар хүн нуугдаж байгаа бол?</p>
                    </Link>
                <Link className={classes.header_word} to='/' style={{ textDecoration: 'none' }}>
                Хамгийн
                </Link>
                <section> 
                <Medeelist classname={classes.container} meetups={DATA}/>
                <Medeelist classname={classes.container} meetups={DATA}/>
                </section>
            </div>
            </>
        };
    

export default HomePage;