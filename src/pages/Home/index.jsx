import { Layout, PageHeader, Button } from 'antd';
//import style from './style.less';
import style from './index.less';
import CardWall from './components/CardWall';

const { Header, Content, Footer } = Layout;
function Home() {
  return (
    <div>
      <Layout className="homepage-layout">
        <Header className={style.homepageHeader}>
          <h1>
            <a className={style.logoleft}>Joe Weekly 前端小报</a>
            <a className={style.logoright}>
              <span className="slogan">Joe大前端博客</span>
            </a>
          </h1>
        </Header>
        <Content>
          <CardWall />
        </Content>
        <Footer className={style.homepageFooter}>
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

export default Home;
