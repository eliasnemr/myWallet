import {
  STATUS,
  BALANCE,
  RPCHOST,
  SEND,
  HELP,
  ADDRESS,
} from '../redux/constants';

// send ${address} ${amount} ${tokenid}
export const send = (data: any) => {
  return new Promise(async (resolve, reject) => {
    const url = `${RPCHOST}${SEND}+address:${data.address}+amount:${data.amount}+tokenid:${data.tokenid}`;
    const response = await fetch(url, {
      method: 'POST',
      body: data,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(result => {
        console.log(result);

        return result.json();
      })
      .then(data => {
        // console.log(data);
        resolve(data);
      })
      .catch(err => {
        console.log(err);
        reject(err);
      });
  });
};

export const callAddress = () => {
  return new Promise(async (resolve, reject) => {
    const url = `${RPCHOST}${ADDRESS}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(result => {
        return result.json();
      })
      .then(data => {
        resolve(data ? data : null);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const callStatus = () => {
  return new Promise(async (resolve, reject) => {
    const url = `${RPCHOST}${STATUS}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(result => {
        // alert(JSON.stringify(result));
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
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(result => {
        return result.json();
      })
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const callHelp = () => {
  return new Promise(async (resolve, reject) => {
    const url = `${RPCHOST}${HELP}`;
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
