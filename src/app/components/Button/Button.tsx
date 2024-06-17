import styles from './Button.module.css';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  text: string;
  onClick?: () => void;
}

export default function Button({ type, text, onClick }: ButtonProps) {
  return (
    <div>
      <button type={type} className={styles.submitButton} onClick={onClick}>
        {text}
      </button>
    </div>
  );
}
