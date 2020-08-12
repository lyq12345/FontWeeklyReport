/*
 * @Author: your name
 * @Date: 2020-08-11 16:05:17
 * @LastEditTime: 2020-08-12 13:17:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-extension-homepage/src/api/publicInterface.js
 */
import axios from 'axios';
import { base } from './ApiURL';
import { notification } from 'antd';

export const getData = (apiUrl, configObj) => {
  let { method = 'POST', params = {}, data = {}, timeout = 5000 } = configObj;

  return new Promise(function(resolve, reject) {
    axios({
      baseURL: base,
      url: apiUrl,
      method: method,
      params: params,
      data: data,
      timeout: timeout,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
        token: window.sessionStorage.getItem('token') || '',
      },
    })
      .then(response => {
        if (response) {
          if (response.data && response.data.code) {
            resolve(response);
          } else {
            notification.error({
              message: '操作失败',
              description: '返回的数据格式有误',
            });
            resolve(response);
          }
        } else {
          notification.error({
            message: '操作失败',
            description: '服务器错误',
          });
          resolve(response);
        }
      })
      .catch(error => {
        notification.error({
          message: '操作失败',
          description: '网络异常，请稍后重试',
        });
        reject(error);
      });
  });
};
