import styles from './team.module.css';
import Member from '../components/Member/Member';

export default function team() {
  return (
    <div className={styles.teamWrap}>
      <div className={styles.team}>
        <div className={styles.member}>
          <Member
            src="/assets/이두리.jpg"
            alt="이두리 이미지"
            name="이두리"
            position="팀장"
            part="백엔드"
            github="https://github.com/DoolyDoori"
            background="#6182d6"
          />
        </div>
        <div className={styles.member}>
          <Member
            src="/assets/송경선.jpg"
            alt="송경선 이미지"
            name="송경선"
            position="팀원"
            part="백엔드"
            github="https://github.com/songkungsun"
            background="#3057b9"
          />
        </div>
        <div className={styles.member}>
          <Member
            src="/assets/박주형.jpg"
            alt="박주형 이미지"
            name="박주형"
            position="팀원"
            part="백엔드, DDoS 탐지 API 개발"
            github="https://github.com/pppppark"
            background="#005490"
          />
        </div>
        <div className={styles.member}>
          <Member
            src="/assets/김동철.jpg"
            alt="김동철 이미지"
            name="김동철"
            position="팀원"
            part="DDoS 탐지 API 개발"
            github="https://github.com/kdc3246"
            background="#40b0ff"
          />
        </div>
        <div className={styles.member}>
          <Member
            src="/assets/이라규.jpg"
            alt="이라규 이미지"
            name="이라규"
            position="팀원"
            part="프론트엔드"
            github="https://github.com/ragyu"
            background="#2a93fb"
          />
        </div>
        <div className={styles.member}>
          <Member
            src="/assets/이건우.jpg"
            alt="이건우 이미지"
            name="이건우"
            position="팀원"
            part="프론트엔드"
            github="https://github.com/lgw7537"
            background="#0070c0"
          />
        </div>
      </div>
    </div>
  );
}
