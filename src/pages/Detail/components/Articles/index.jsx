import { List, Avatar } from 'antd';
import { CoffeeOutlined, createFromIconfontCN } from '@ant-design/icons';
import { reportContext } from '../../index.jsx';
import { useContext } from 'react';
import styles from './index.less';

const data = [
  {
    title: '在 React Hooks 中如何请求数据？ - 自然醒技术笔记 - SegmentFault 思否',
    description:
      '通过这个教程，我想告诉你在 React 中如何使用 state 和 effect 这两种 hooks 去请求数据。我们将使用众所周知的 Hacker News API 来获取一些热门文章。你将定义属于你自己的数据请求的 Hooks ，并且可以在你所有的应用中复用，也可以发布到 npm 。',
    category: 'javascript',
    link: 'http://www.baidu.com',
    referrer: '爹爹爹',
  },
  {
    title: '第二个标题',
    description:
      '通过这个教程，我想告诉你在 React 中如何使用 state 和 effect 这两种 hooks 去请求数据。我们将使用众所周知的 Hacker News API 来获取一些热门文章。你将定义属于你自己的数据请求的 Hooks ，并且可以在你所有的应用中复用，也可以发布到 npm 。',
    category: 'javascript',
    link: 'http://www.baidu.com',
    referrer: '嘛嘛嘛',
  },
];
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2004521_ivwofu7ysyj.js',
});
function Articles(props) {
  const { reportData, setReportData } = useContext(reportContext);
  console.log(reportData);
  return (
    <div className={styles.detailArticles}>
      <div>
        <h2>Joe前端小报第{props.reportId}期</h2>
      </div>

      <List
        itemLayout="horizontal"
        dataSource={reportData}
        renderItem={item => (
          <List.Item style={{ width: '80%' }}>
            <List.Item.Meta
              title={
                <div>
                  <a style={{ fontSize: '20px' }} href={item.link} target="_blank">
                    {item.title}
                  </a>
                  <span className={styles.inlineTag}>{item.category}</span>
                  <div className={styles.titleUser}>
                    <IconFont
                      style={{ alignItems: 'center', display: 'inline-flex', fontSize: '20px' }}
                      type="iconyonghu"
                    />
                    <p>{item.referrer}</p>
                  </div>
                </div>
              }
              description={
                <blockquote className={styles.descriptionQuote}>{item.description}</blockquote>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
}

export default Articles;
