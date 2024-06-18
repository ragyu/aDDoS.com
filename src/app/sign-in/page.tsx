'use client';
import { useState } from 'react';
import styles from './sign-in.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface User {
  id: string;
  email: string;
  password: string;
  name: string;
}

// onLogin 프로퍼티의 타입 정의
type SigninProps = {
  onLogin?: (user: User) => void;
};

export default function Signin({ onLogin }: SigninProps) {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/users');
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      const users = await response.json();
      console.log('Fetched users:', users);

      const user = users.find(
        (user: { email: string; password: string }) =>
          user.email === email && user.password === password
      );

      if (user) {
        console.log('User found:', user);
        if (onLogin) {
          onLogin(user); // onLogin 함수가 정의되어 있을 경우 호출
        }
        alert('로그인에 성공했습니다.');
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('UserEmail', user.email);
        localStorage.setItem('UserName', user.name);

        setTimeout(() => {
          router.push('/mypage');
        }, 1000);
      } else {
        alert('이메일 또는 비밀번호가 잘못되었습니다.');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setError('네트워크 오류가 발생했습니다.');
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>로그인</h1>
        <input
          className={styles.input}
          type="email"
          id="email"
          name="email"
          placeholder="이메일"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={styles.input}
          type="password"
          id="password"
          name="password"
          placeholder="비밀번호"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className={styles.remember}>
          <label htmlFor="remember">
            <input type="checkbox" id="remember" name="remember" />
            이메일 기억하기
          </label>
        </div>
        <button type="submit" className={styles.submitButton}>
          로그인
        </button>
        {error && <p className={styles.error}>{error}</p>}
        {isLoggedIn ? (
          <Link href="/my-page" className={styles.sign}>
            마이페이지
          </Link>
        ) : (
          <div className={styles.signupLink}>
            아이디가 없으신가요?{' '}
            <Link href="/sign-up" className={styles.sign}>
              회원가입
            </Link>
          </div>
        )}
      </form>
    </div>
  );
}
