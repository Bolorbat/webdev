import Medeeitem from './Medeeitem';
import styles from './Medee.Module.css'
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
function Medeelist(props){
	return (
		<ul className={styles.ul}>
		  <Container className={styles.container}>
			<Grid  container spacing={2}>
			{props.meetups.map((meetup) => (
				<Grid className={styles.card} contaner item xs={5} sm={4} md={3} >
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
				  
				</Grid>
			  ))}
			</Grid>
		  </Container>
		</ul>
	  )};
			

export default Medeelist;