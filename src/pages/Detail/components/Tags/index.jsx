import React, { useState, useContext, useEffect } from 'react';
import { List, Tag, Button } from 'antd';
import { reportContext } from '../../index.jsx';
import styles from './index.less';

const { CheckableTag } = Tag;

export default function Tags() {
  const { tags, setTags, selectedTags, setSelectedTags } = useContext(reportContext);
  // const [selectedTags, setSelectedTags] = useState([]);
  const [tagsData, setTagsData] = useState([]);

  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
    console.log('You are interested in: ', nextSelectedTags);
    setSelectedTags(nextSelectedTags);
    // setTags(nextSelectedTags);
  };

  // useEffect(() => {
  //   setSelectedTags(tags);
  //   setTagsData(tags);
  // }, [tags]);

  // useEffect(() => {}, []);

  return (
    <div className={styles.tagsContainer}>
      <h3>标签集合</h3>
      {/* <List
        grid={{ gutter: 5, column: 4 }}
        dataSource={tags}
        renderItem={item => (
          <List.Item>
            <CheckableTag
              checked={selectedTags.indexOf(item) > -1}
              onChange={checked => handleChange(item, checked)}
            >
              {item}
            </CheckableTag>
          </List.Item>
        )}
      ></List> */}
      {tags.map((tag, index) => (
        <CheckableTag
          color="#5f9ea0"
          className={styles.checkTags}
          key={index}
          checked={selectedTags.indexOf(tag) > -1}
          onChange={checked => handleChange(tag, checked)}
        >
          {tag}
        </CheckableTag>
      ))}
    </div>
  );
}
