import styles from './card.module.css'; // Asegúrate de tener el archivo de estilos Invitation.module.css
import Image from 'next/image';

export default function Card() {
  return (
    <div>
      <Image
        src="/text/text-1.png"
        width={500}
        height={500}
      >

      </Image>
    </div>
  );
}
