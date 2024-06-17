'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './sign-up.module.css';
import Button from '../components/Button/Button';
import { useRouter } from 'next/navigation';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [passwordInvalid, setPasswordInvalid] = useState(false);

  const router = useRouter();

  useEffect(() => {
    // 비밀번호와 비밀번호 확인이 동일한지 검사
    if (password !== confirmPassword && confirmPassword) {
      setPasswordMismatch(true);
    } else {
      setPasswordMismatch(false);
    }

    if (password) {
      const isValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
      setPasswordInvalid(!isValid);
    } else {
      setPasswordInvalid(false);
    }
  }, [password, confirmPassword]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (passwordMismatch) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    } else if (passwordInvalid) {
      alert(
        '비밀번호는 최소 8자 이상이어야 하며, 숫자와 영문자를 포함해야 합니다.'
      );
      return;
    }

    try {
      const response = await axios.post('http://43.201.89.72:8000/signup/', {
        email,
        password,
        name,
      });

      if (response.status === 201) {
        alert('회원가입이 완료되었습니다.');
        router.push('/sign-in');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // AxiosError 타입인 경우에만 response에 접근
        if (error.response) {
          alert(error.response.data.error);
        } else {
          alert('회원가입 중 오류가 발생했습니다.');
        }
      } else {
        alert('회원가입 중 오류가 발생했습니다.');
      }
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>회원가입</h1>
        <div className={styles.inputGroupWrap}>
          {/* 이메일 입력 필드 */}
          <div className={styles.inputGroup}>
            <label htmlFor="email">이메일</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="exemple@email.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* 비밀번호 입력 필드 */}
          <div className={styles.inputGroup}>
            <div className={styles.verify}>
              <label htmlFor="password">비밀번호</label>
              {passwordInvalid && (
                <p className={styles.invalid}>
                  비밀번호는 최소 8자 이상이어야 하며, 숫자와 영문자를 포함해야
                  합니다.
                </p>
              )}
            </div>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="비밀번호 입력"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* 비밀번호 확인 필드 */}
          <div className={styles.inputGroup}>
            <div className={styles.verify}>
              <label htmlFor="confirmPassword">비밀번호 확인</label>
              {passwordMismatch && (
                <p className={styles.mismatch}>비밀번호가 일치하지 않습니다.</p>
              )}
            </div>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="비밀번호 재입력"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {/* 이름 입력 필드 */}
          <div className={styles.inputGroup}>
            <label htmlFor="name">이름</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="이름을 입력해주세요"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <Button type="submit" text="가입하기" />
      </form>
    </div>
  );
}
