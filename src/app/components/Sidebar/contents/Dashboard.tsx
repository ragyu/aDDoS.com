import { useState } from 'react';

import styles from './Dashboard.module.css';
import Traffic from './Traffic';
import Total from './Total';
import Rule from './Rule';
import CurrentRules from './CurrentRules';

export default function Dashboard() {
  const [maxValue, setMaxValue] = useState(0);
  const [minValue, setMinValue] = useState(0);
  const [averageValue, setAverageValue] = useState(0);

  return (
    <div className={styles.dashboard}>
      <div className={styles.sectionWrap}>
        <div className={styles.section1}>
          <Traffic
            setMaxValue={setMaxValue}
            setMinValue={setMinValue}
            setAverageValue={setAverageValue}
          />
        </div>
        <div className={styles.section2}>
          <Total
            maxValue={maxValue}
            minValue={minValue}
            averageValue={averageValue}
          />
        </div>
        <div className={styles.section3}>
          <Rule />
        </div>
        <div className={styles.section4}>
          <CurrentRules />
        </div>
      </div>
    </div>
  );
}
