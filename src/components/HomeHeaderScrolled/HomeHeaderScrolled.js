import styles from './HomeHeaderScrolled.module.css';

const HomeHeaderScrolled = () => {
	return (
		<div className={styles.header} style={{ position: 'fixed' }}>
			<h1 className={styles.textInHeader}>Movie List</h1>
		</div>
	);
};

export default HomeHeaderScrolled;
