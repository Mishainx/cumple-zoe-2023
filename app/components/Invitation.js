import styles from './invitation.module.css'; // Asegúrate de tener el archivo de estilos Invitation.module.css
import Image from 'next/image';

export default function Invitation() {
  return (
    <div className={styles.invitationContainer}>
      <div className={styles.nameContainer}>
      <Image
        src="/text/zoe-text.png"
        width={150}
        height={25}
        layout="responsive"
      >
      </Image>
      <Image
        src="/text/text-6.png"
        width={100}
        height={25}
        layout="responsive"
      >
      </Image>
      </div>

      <Image
        src="/text/text-1.png"
        width={250}
        height={250}
        layout="responsive"
      >
      </Image>
    </div>
  );
}