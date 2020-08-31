import React, { useState, useEffect } from 'react';
import { List } from 'antd';
import styles from './index.less';
import { getWeekCodes } from '@/api/apiFunctions';

export default function Recent(props) {
  const [weekCodes, setWeekCodes] = useState([]);
  const reportId = props.reportId;
  useEffect(() => {
    const fetchData = async () => {
      const result = await getWeekCodes();
      const weeks = result.data.data.map(item => {
        return item.weekCode;
      });
      const recents = weeks.filter(item => {
        return item < reportId;
      });
      setWeekCodes(recents.length > 10 ? recents.slice(0, 9) : recents);
    };

    fetchData();
  }, []);
  return (
    <div className={styles.recentContainer}>
      <h3>往期小报</h3>
      <ol>
        {weekCodes.map(item => (
          <li key={item}>
            <a target="_blank" href={`/detail/${item}`}>
              <h4>前端小报第{item}期</h4>
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}
