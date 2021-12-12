import styles from './Medee.Module.css';
import {Link} from 'react-router-dom';
import Card from '@material-ui/core/Card';

function Medeeitem(props){
	return (
		<div className={styles.container}>
		<Card className={styles.card}>
		<li>
			<div>
				<Link to='/news'>
					<img className={styles.img}src={props.image} alt={props.title}/>
				</Link>
			</div>
			<div>
				<Link to='/news' style={{ textDecoration: 'none' }}>
					<h4 className={styles.title}>{props.title}</h4>
				</Link>
				<Link to='/sub' style={{ textDecoration: 'none' }}>
						<p className={styles.category}>{props.category}</p>
				</Link>
				<Link to='/news' style={{ textDecoration: 'none' }}>
					<p className={styles.para}>{props.description}</p>
				</Link>
				<div className={styles.row}>
					<div className={styles.emoji}>
					<img src={props.hearth} alt='zurh2'/>
					</div>
					<p className={styles.liked}>{props.liked}</p>
					<img className={styles.emoji} src={props.vemoji} alt='emoji'/>
					<p className={styles.liked}>{props.watched}</p>
					<p className={styles.when}>{props.when}</p>
				</div>
			</div>
			</li>
		</Card>
		</div>
		)
}

export default Medeeitem;