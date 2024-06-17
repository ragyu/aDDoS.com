import styles from './Member.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';

interface MemberProps {
  src: string;
  alt: string;
  name: string;
  position: string;
  part: string;
  github: string;
  background: string;
}

const Member = ({
  src,
  alt,
  name,
  position,
  part,
  github,
  background,
}: MemberProps) => {
  const dynamicStyle = {
    background: `${background}`,
  };

  return (
    <div className={styles.container} style={dynamicStyle}>
      <Image
        src={src}
        alt={alt}
        className={styles.image}
        width={100}
        height={100}
      />
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.position}>{position}</p>
      <p className={styles.part}>{part}</p>
      <Link href={github} target="blank" className={styles.github}>
        <FaGithub size={35} />
      </Link>
    </div>
  );
};

export default Member;
