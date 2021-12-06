import {Link} from "react-router-dom";
import classes from './MainNavigation.css';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@material-ui/core/IconButton';
import LoginIcon from '@mui/icons-material/Login';
import CardMedia from '@mui/material/CardMedia';
    
function MainNavigation(){
    return <header className={classes.header}>
        <div className={classes.logo}>
            <CardMedia 
                image="https://www.yolo.mn/stat/app/img/logoOrg.png" style={{width: '110px', height: '50px', }}
                alt="logo-image" 
            />
            Өсвөр үе, залууст ...
        </div>
        <nav>
            <ul>    
                <li>
                    <Link to='/100'>Энтертайнмент</Link>
                </li>
                <li>
                    <Link to='/100'>Боловсрол</Link>
                </li>
                <li>
                    <Link to='/100'>Хувь хүний хөгжил</Link>
                </li>
                <li>
                    <Link to='/100'>Ярилцлага</Link>
                </li>
                <li>
                    <Link to='/100'>Сонин хачин</Link>
                </li>
                <li>
                    <Link to='/100'>Зөвлөгөө</Link>
                </li>
                <li>
                    <Link to='/100'>Комик</Link>
                </li>
            </ul>
            <IconButton>
                <SearchIcon style={{ color: "yellow" }}/>
            </IconButton>
            <IconButton>
                <LoginIcon style={{color: "blue"}}/> 
            </IconButton> 
        </nav>
    </header>
}

export default MainNavigation;