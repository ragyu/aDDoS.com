'use client';

import { useState } from 'react';
import styles from './Accordion.module.css';
import { MdArrowForwardIos } from 'react-icons/md';

interface AccordionProps {
  question: string;
  answer: string;
}

export default function Accordion({ question, answer }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button className={styles.question} onClick={() => setIsOpen(!isOpen)}>
        <span className={`${styles.arrow} ${isOpen ? styles.open : ''}`}>
          <MdArrowForwardIos />
        </span>
        {question}
      </button>
      <div className={`${styles.answer} ${isOpen ? styles.open : ''}`}>
        {answer}
      </div>
    </div>
  );
}
