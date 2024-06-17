import styles from './contact.module.css';
import Button from '../components/Button/Button';

export default function contact() {
  const TEXTAREA_COLS = 45;
  const TEXTAREA_ROWS = 10;

  return (
    <div className={styles.contactWrap}>
      <h2 className={styles.title}>문의하기</h2>

      <div className={styles.form}>
        <form action="#">
          {/* <div className={styles.formGroup}>
            <span>상태 <b className={styles.red}>*</b></span>
            <select>
                <option selected>카테고리 선택</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
            </select>
        </div> */}
          <div className={styles.formGroup}>
            <span>
              이름 <b className={styles.red}>*</b>
            </span>
            <input className={styles.inputField} type="text" />
          </div>
          <div className={styles.formGroup}>
            <span>
              연락처 <b className={styles.red}>*</b>
            </span>
            <input className={styles.inputField} type="text" />
          </div>
          <div className={styles.formGroup}>
            <span>
              이메일 <b className={styles.red}>*</b>
            </span>
            <input className={styles.inputField} type="text" />
          </div>
          <div className={styles.formGroup}>
            <span>
              제목 <b className={styles.red}>*</b>
            </span>
            <input className={styles.inputField} type="text" />
          </div>
          <div className={styles.formGroup}>
            <span>
              문의내용 <b className={styles.red}>*</b>
            </span>
            <textarea
              className={styles.textareaField}
              cols={TEXTAREA_COLS}
              rows={TEXTAREA_ROWS}
            ></textarea>
          </div>
          <div className={styles.formGroup}>
            <span>
              옵션 <b className={styles.red}>*</b>
            </span>
            <span>
              <input type="checkbox" />
              익명
            </span>
            <span>
              <input type="checkbox" />
              사용자
            </span>
          </div>
        </form>
      </div>
      <div className={styles.agreeWrap}>
        <div className={styles.firstAgree}>
          <input type="checkbox" />
          <p className={styles.agree}>개인정보 수집 및 활용 동의</p>
        </div>
        <div className={styles.listWrap}>
          <p>
            1. 개인정보의 수집 및 이용 목적 문의 확인 및 답변을 위한 연락통지,
            처리결과 통보 등을 목적으로 개인정보를 처리합니다.
          </p>
          <p>2. 처리하는 개인정보 항목</p>
          <p>• 필수항목 : 이름, 연락처, 이메일, 제목, 문의내용</p>
          <p>3. 개인정보의 처리 및 보유 기간</p>
          <p>
            ①법령에 따른 개인정보 보유.이용기간 또는 정보주체로부터 개인정보를
            수집 시에 동의 받은 개인정보 보유, 이용기간 내에서 개인정보를 처리,
            보유 합니다.
          </p>
          <p>②개인정보의 보유 기간은 3년 입니다.</p>
        </div>
        <div className={styles.secondAgree}>
          <input type="checkbox" />
          <p className={styles.agree}>위 개인정보 수집 및 활용에 동의합니다.</p>
        </div>
      </div>
      <div className={styles.buttonWrap}>
        <Button type="submit" text="등록" />
      </div>
    </div>
  );
}
