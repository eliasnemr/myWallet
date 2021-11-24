import {STATUS} from '../redux/constants';
import {BALANCE} from '../redux/constants';
import {RPCHOST} from '../redux/constants';

export const callStatus = () => {
  return new Promise(async (resolve, reject) => {
    const url = `${RPCHOST}${STATUS}`;
    const response = await fetch(url, {
      method: 'GET',
      mode: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(result => {
        //alert(JSON.stringify(result));
        return result.json();
      })
      .then(data => {
        //alert(`${JSON.stringify(data)}`);
        resolve(data ? data : null);
      })
      .catch(err => {
        reject(err);
        //alert(`${err}`);
      });
  });
};

export const callBalance = () => {
  return new Promise(async (resolve, reject) => {
    const url = `${RPCHOST}${BALANCE}`;
    const response = await fetch(url, {
      method: 'GET',
      mode: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(result => {
        return result.json();
      })
      .then(data => {
        resolve(data ? data : []);

        //alert(`${JSO N.stringify(data)}`);
      })
      .catch(err => {
        reject(err);
        // alert(`${err}`);
      });
  });
};
