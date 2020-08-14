import { Card, List } from 'antd';
import { useEffect, useState } from 'react';
import { getWeekCodes } from '@/api/apiFunctions';
import styles from './index.less';
const { Meta } = Card;
const cardList = [
  {
    id: 1,
    title: '1期',
    link: 'http://www.baidu.com',
  },
  {
    id: 2,
    title: '2期',
    link: 'http://www.baidu.com',
  },
  {
    id: 3,
    title: '3期',
    link: 'http://www.baidu.com',
  },
  {
    id: 4,
    title: '4期',
    link: 'http://www.baidu.com',
  },
  {
    id: 5,
    title: '5期',
    link: 'http://www.baidu.com',
  },
  {
    id: 6,
    title: '6期',
    link: 'http://www.baidu.com',
  },
  {
    id: 7,
    title: '7期',
    link: 'http://www.baidu.com',
  },
];

function CardWall() {
  const [weekCodes, setWeekCodes] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getWeekCodes();
      setWeekCodes(result.data.data);
    };

    fetchData();
  }, []);
  return (
    <div className={styles.cardlistContainer}>
      <List
        size="large"
        grid={{
          gutter: 16,
          column: 4,
        }}
        dataSource={weekCodes}
        renderItem={item => (
          <List.Item>
            <Card
              onClick={() => {
                window.open(`/detail/${item}`, '_blank');
              }}
              style={{ textAlign: 'center' }}
              hoverable
              cover={
                <img
                  alt="example"
                  src={require('@/assets/card.png')}
                  style={{ display: 'inline-block', width: 250, height: 230 }}
                />
              }
              size="small"
            >
              <Meta title={`前端小报第${item}期`} />
            </Card>
          </List.Item>
        )}
      ></List>
    </div>
  );
}

export default CardWall;
