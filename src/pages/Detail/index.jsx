import { Button, Layout } from 'antd';
import styles from './index.less';
import Articles from './components/Articles';
import { createContext, useState, useContext } from 'react';
import { getReportByWeek } from '@/api/apiFunctions';
const { Header, Content, Footer, Sider } = Layout;

//创建上下文
export const ReportContext = createContext();

function Detail(props) {
  const [reportData, setReportData] = useState(null);
  let reportId = props.match.params.reportId;
  let data = {};
  const param = {
    weekCode: reportId,
  };
  getReportByWeek(param).then(response => {
    // TODO:改成response.data
    data = response;
  });
  setReportData(data);
  console.log(1);
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
              <ReportContext.Provider value={{ reportData, setReportData }}>
                <Articles />
              </ReportContext.Provider>
            </Content>
            <Sider className={styles.siteLayoutBackground} width={300}>
              Sider
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
