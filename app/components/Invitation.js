import styles from './invitation.module.css'; // Asegúrate de tener el archivo de estilos Invitation.module.css
import Image from 'next/image';

export default function Invitation() {
  return (
    <div className={styles.invitationContainer}>

      <Image
        src="/text/text-unique.png"
        width={250}
        height={250}
        layout="responsive"
      >
      </Image>
    </div>
  );
}