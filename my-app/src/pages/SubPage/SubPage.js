import { Link } from "react-router-dom";
import Medeelist from '../../components/list/Medeelist';
import DATA from '../HomePage/DATA';
import styles from './SubPage.Module.css'
import Button from '@mui/material/Button';
function SubPage(){
    return(
        <div className={styles.Container}>
        <><div className={styles.header}>
            <Link to="/">
                <img src="https://www.yolo.mn/stat/app/img/cata.png" alt="yolo_image" style={{ height: "30px" }} />
            </Link>
            <Link to="/sub">
                <h2 className={styles.img}>#Энтертайнмент</h2>
            </Link>
            <Button className={styles.submenu}>Оддын тухай</Button>
            <Button className={styles.submenu}>Дуу хөгжим</Button>
            <Button className={styles.submenu}>Кино урлаг</Button>
        </div><section>
                <Medeelist meetups={DATA} />
                <Medeelist meetups={DATA} />
                <Medeelist meetups={DATA} />
            </section></>
            </div>
    )
}

export default SubPage;