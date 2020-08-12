/*
 * @Author: your name
 * @Date: 2020-08-11 16:56:25
 * @LastEditTime: 2020-08-12 13:18:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-extension-homepage/src/api/apiFunctions.js
 */
import { getData } from './publicInterface.js';

export const getReportByWeek = data => {
  return getData('/getByWeek', {
    data: data,
  });
};
