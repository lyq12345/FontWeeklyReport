import { List } from 'antd';
import { reportContext } from '../../index.jsx';
import { useContext } from 'react';

function Articles() {
  const report = useContext(reportContext);
  return (<div>
          <p>父组件传过来的值{report}</p>
        </div>);
}

export default Articles;
