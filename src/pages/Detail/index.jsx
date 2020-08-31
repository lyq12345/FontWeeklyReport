import { Button, Layout, Tag } from 'antd';
import styles from './index.less';
import Articles from './components/Articles';
import Tags from './components/Tags';
import Recent from './components/Recent';
import { createContext, useState, useEffect } from 'react';
import { getReportByWeek } from '@/api/apiFunctions';
const { Header, Content, Footer, Sider } = Layout;

//创建上下文
export const reportContext = createContext(null);

function Detail(props) {
  const [reportData, setReportData] = useState([{}]);
  const [filteredData, setFilteredData] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  let reportId = props.match.params.reportId;

  useEffect(() => {
    const fetchData = async () => {
      const result = await getReportByWeek({ weekCode: reportId });
      const datas = result.data.data;
      const categories = datas.map(item => {
        return item.category;
      });
      const norepeatCatgs = Array.from(new Set(categories));
      setReportData(datas);
      setFilteredData(datas);
      setTags(norepeatCatgs);
      setSelectedTags(norepeatCatgs);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = reportData.filter(item => {
      return selectedTags.indexOf(item.category) > -1;
    });
    setFilteredData(filtered);
  }, [selectedTags]);

  return (
    <div>
      <Layout>
        <Header className={styles.homepageHeader}>
          <h1>
            <a className={styles.logoleft}>Joe Weekly 前端小报</a>
            <a className={styles.logoright}>
              <span className="slogan">Joe大前端博客</span>
            </a>
          </h1>
        </Header>
        <Content>
          <Layout className={styles.siteLayoutBackground} style={{ padding: '24px 0' }}>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <reportContext.Provider value={{ filteredData, setFilteredData }}>
                <Articles reportId={reportId} />
              </reportContext.Provider>
            </Content>
            <Sider className={styles.siteLayoutBackground} width={400}>
              <reportContext.Provider value={{ tags, setTags, selectedTags, setSelectedTags }}>
                <Tags />
              </reportContext.Provider>
              <Recent reportId={reportId} />
            </Sider>
          </Layout>
        </Content>
        <Footer className={styles.homepageFooter}>
          <p>
            "Copyright © 2018-2019 By"
            <strong>
              <a>Joe</a>
            </strong>
          </p>
        </Footer>
      </Layout>
    </div>
  );
}

export default Detail;
