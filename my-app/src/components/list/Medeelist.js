import Medeeitem from './Medeeitem';
import styles from './Medee.Module.css'
function Medeelist(props){
	return (
			<ul className={styles.ul}>
				{props.meetups.map((meetup) => (
					<Medeeitem
						key={meetup.id}
						id={meetup.id}
						image={meetup.image}
						title={meetup.title}
						category={meetup.category}
						description={meetup.description}
						liked={meetup.liked}
						watched={meetup.watched}
						when={meetup.when}
						hearth={meetup.hearth}
						vemoji={meetup.vemoji} />
				))}
			</ul>
		
		)
		
}

export default Medeelist;