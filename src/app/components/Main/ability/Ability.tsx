import { useEffect, useState, useRef } from 'react';
import styles from './Ability.module.css';
import Image from 'next/image';

interface AbilityProps {
  src: string;
  alt: string;
  description: string;
}

const Ability = ({ src, alt, description }: AbilityProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.1, // 요소의 10%가 보여질 때 애니메이션을 시작합니다.
      }
    );

    const currentRef = ref.current; // ref.current를 로컬 변수에 할당

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // cleanup 함수에서 로컬 변수를 사용
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.ability} ${isVisible ? styles.animate : ''}`}
    >
      <div className={styles.image}>
        <Image src={src} alt={alt} fill priority />
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};

export default Ability;
