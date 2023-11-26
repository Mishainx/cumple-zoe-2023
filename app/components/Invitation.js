import FlipCard from './FlipCard';
import styles from './invitation.module.css'; // Asegúrate de tener el archivo de estilos Invitation.module.css

export default function Invitation() {
  return (
    <div className={styles.invitationContainer}>
        <FlipCard/>
    </div>
  );
}
