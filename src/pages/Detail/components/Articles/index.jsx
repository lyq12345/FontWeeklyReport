import { List } from 'antd';
import { ReportContext } from '../../index.jsx';
import { useContext } from 'react';

function Articles() {
  let { reportData, setReportData } = useContext(ReportContext);
  //console.log(reportData);
  return <div></div>;
}

export default Articles;
