import { Card, List } from 'antd';
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
  return (
    <div className="listContainer">
      <List
        size="large"
        grid={{
          gutter: 16,
          column: 4,
        }}
        dataSource={cardList}
        renderItem={item => (
          <List.Item>
            <Card
              onClick={() => {
                window.open(`/detail/${item.id}`, '_blank');
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
              <Meta title={item.title} />
            </Card>
          </List.Item>
        )}
      ></List>
    </div>
  );
}

export default CardWall;
