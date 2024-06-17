import styles from './youtube.module.css';
import Link from 'next/link';

interface YoutubeVideoProps {
  videoId: string;
}

const YoutubeVideo: React.FC<YoutubeVideoProps> = ({ videoId }) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className={styles.video}>
      사용방법
      <br />
      <br />
      <div className={styles.player}>
        <iframe
          width="560"
          height="315"
          src={embedUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        ></iframe>
      </div>
      <Link href="/more-info" className={styles.link}>
        사용방법 더보기
      </Link>
    </div>
  );
};

export default YoutubeVideo;
