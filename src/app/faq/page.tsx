import styles from './faq.module.css';
import Image from 'next/image';
import FaqImage from '../../../public/assets/faq.png';
import Accordion from '../components/Accordion/Accordion';

export default function faq() {
  return (
    <div className={styles.faqWrap}>
      <div className={styles.imageLayout}>
        <Image src={FaqImage} width={500} height={250} alt="FaqImage" />
      </div>

      <div className={styles.qna}>
        <Accordion
          question="DDoS 공격이란 무엇인가요?"
          answer="DDoS 공격은 다수의 시스템이 특정 대상의 서버,
               서비스, 네트워크에 과도한 요청을 보내
               서비스를 마비시키는 공격입니다."
        />
        <Accordion
          question="DDoS 공격을 어떻게 탐지할 수 있나요?"
          answer="비정상적인 트래픽 증가, 응답 시간의 지연,
              서비스 접근 실패 등의 징후가 DDOS 공격을 암시할 수
              있습니다."
        />
        <Accordion
          question="DDoS 공격 탐지 및 분석을 위한 도구는 무엇이 있나요?"
          answer="네트워크 모니터링 및 보안 분석 도구가 있습니다.
               이러한 도구는 트래픽을 모니터링하고,
               비정상적인 활동을 식별하며,
               실시간으로 경고를 제공할 수 있습니다."
        />
        <Accordion
          question="DDoS 공격의 일반적인 유형에는 어떤 것들이 있나요?"
          answer="Volumetric Attacks (대량 트래픽 공격),
               Protocol Attacks (프로토콜 공격),
               Application Layer Attacks (응용 계층 공격) 등이 있습니다."
        />
      </div>
    </div>
  );
}
