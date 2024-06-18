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

function Signin({
  onLogin = (user: User) => {
    console.log('Logged in user:', user);
  },
}: {
  onLogin?: (user: User) => void;
}) {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태 추가

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/users');
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      const users = await response.json();
      console.log('Fetched users:', users); // 디버깅을 위한 로그

      const user = users.find(
        (user: { email: string; password: string }) =>
          user.email === email && user.password === password
      );

      if (user) {
        console.log('User found:', user); // 디버깅을 위한 로그
        onLogin(user);
        alert('로그인에 성공했습니다.');
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('UserEmail', user.email);
        localStorage.setItem('UserName', user.name); // 로컬스토리지에 사용자 정보 저장

        setTimeout(() => {
          router.push('/mypage');
        }, 1000); // 1초 후 페이지 이동
      } else {
        alert('이메일 또는 비밀번호가 잘못되었습니다.');
      }
    } catch (error) {
      console.error('Fetch error:', error); // 디버깅을 위한 로그
      setError('네트워크 오류가 발생했습니다.');
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>로그인</h1>
        {/* 이메일 입력 필드 */}
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

        {/* 비밀번호 입력 필드 */}
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
        {/* 이메일 기억 체크박스 */}
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

        {/* 로그인 상태에 따라 버튼 텍스트 변경 */}
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

export default Signin;
