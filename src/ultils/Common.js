// import _ from 'lodash';
// import moment from 'moment';
// import { store } from '../Setup';
// import { getDataInObject } from './Tools';

// export const timeToNow = time => {
//   return moment(time).fromNow();
// };
// export const formatDate = time => {
//     return `${moment(time).format('DD MMM YYYY')} `;
//   };

//   export const formatTime = time => {
//     return `${moment(time).format('h:mm A')} `;
//   };

//   export const formatDateTime = time => {
//     return `${moment(time).format('h:mm A, MMM DD')} `;
//   };

//   export const formatMoney = (number, n, x) => {
//     const re = `\\d(?=(\\d{${x || 3}})+${n > 0 ? '\\.' : '$'})`;
//     return Number(number)
//       .toFixed(Math.max(0, ~~n))
//       .replace(new RegExp(re, 'g'), '$&,');
//   };
