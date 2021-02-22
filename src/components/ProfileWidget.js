import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styles from '../styles/profileWidget.module.scss'

const ProfileWidget = () => {
	const { username } = useSelector((state) => state.user)

	return (
		<div className={styles.container}>
			<Link to='/profile' className={styles.link}>
				<p>{username}</p>
			</Link>
		</div>
	)
}

export default ProfileWidget
