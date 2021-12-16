import {Link} from "react-router-dom";
import classes from './MainNavigation.module.css';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@material-ui/core/IconButton';
import LoginIcon from '@mui/icons-material/Login';

  
function MainNavigation(){
    return <header className={classes.header}>
        <div className={classes.logo}>
            <Link to='/'>
             <img src="https://www.yolo.mn/img/61aedf5397b76.png" alt="logo" className={classes.logoimg}/>  
            </Link>
            <div className={classes.logoword}>Өсвөр үе, залууст ...</div>
        </div>
        <nav>
            <ul>    
                <li>
                    <Link to='/sub' style={{ textDecoration: 'none' }}>Энтертайнмент</Link>
                </li>
                <li> 
                    <Link to='/sub' style={{ textDecoration: 'none' }}>Боловсрол</Link>
                </li>
                <li>
                    <Link to='/sub' style={{ textDecoration: 'none' }}>Хувь хүний хөгжил</Link>
                </li>
                <li>
                    <Link to='/sub' style={{ textDecoration: 'none' }}>Ярилцлага</Link>
                </li>
                <li>
                    <Link to='/sub' style={{ textDecoration: 'none' }}>Сонин хачин</Link>
                </li>
                <li>
                    <Link to='/sub' style={{ textDecoration: 'none' }}>Зөвлөгөө</Link>
                </li>
                <li>
                    <Link to='/sub' style={{ textDecoration: 'none' }}>Комик</Link>
                </li>
                <IconButton>
                    <SearchIcon style={{ color: "yellow"}}/>
                </IconButton>
                <IconButton>
                    <LoginIcon style={{color: "blue"}}/> 
                </IconButton>
            </ul>
        </nav>  
    </header>
}

export default MainNavigation;