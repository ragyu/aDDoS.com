'use client';
import { useEffect, useState } from 'react';
import styles from './Myinfo.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface User {
  id: string;
  email: string;
  name: string;
}

export default function Myinfo() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState('');
  const [image, setImage] = useState('/assets/user.png'); // Move this useState up

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      fetchUserInfo(user.email);
    } else {
      router.push('/sign-in');
    }
  }, [router]);

  const fetchUserInfo = async (email: string) => {
    try {
      const response = await fetch(
        `http://localhost:3001/users?email=${email}`
      );
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      const users = await response.json();
      if (users.length > 0) {
        setUser(users[0]);
      } else {
        setError('사용자 정보를 불러오는데 실패했습니다.');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setError('네트워크 오류가 발생했습니다.');
    }
  };

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        const result = e.target?.result as string;
        setImage(result);
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.profileSection}>
        <div className={styles.avatarContainer}>
          <Image
            src={image}
            alt="프로필사진"
            className={styles.avatar}
            width={80}
            height={80}
          />
        </div>
        <label htmlFor="imageInput" className={styles.changeImageButton}>
          이미지 변경
          <input
            id="imageInput"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />
        </label>
      </div>

      <table className={styles.infoSection}>
        <tr>
          <td className={styles.label}>이메일</td>
          <td className={styles.data}>{user.email}</td>
        </tr>
        <tr>
          <td className={styles.label}>이름</td>
          <td className={styles.data}>{user.name}</td>
        </tr>
        <tr>
          <td className={styles.label}>직책</td>
          <td className={styles.data}>관리자</td>
        </tr>
        <tr>
          <td className={styles.label}>서버</td>
          <td className={styles.data}>aDDoS.com</td>
        </tr>
      </table>
    </div>
  );
}
