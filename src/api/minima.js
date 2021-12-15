import {STATUS} from '../redux/constants';
import {BALANCE} from '../redux/constants';
import {RPCHOST} from '../redux/constants';
import {HELP} from '../redux/constants';

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
        alert(JSON.stringify(result));
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

export const callStatus2 = () => {
    const url = `${RPCHOST}${STATUS}`;
    return fetch(url, {
      method: 'GET',
      mode: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(result => result.json())
}

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
        alert(JSON.stringify(result));

        return result.json();
      })
      .then(data => {
        resolve(data ? data : []);

        //alert(`${JSON.stringify(data)}`);
      })
      .catch(err => {
        reject(err);
        // alert(`${err}`);
      });
  });
};

export const callBalance2 = () => {
    const url = `${RPCHOST}${BALANCE}`;
      return fetch(url, {
        method: 'GET',
        mode: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(result => result.json())
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


export const dummy = () => {
    const url = `http://dummy.restapiexample.com/api/v1/employees`;
      return fetch(url, {
        method: 'GET',
        mode: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(result => result.json())
};




export const dummyS = () => {
    const url = `https://reqres.in/api/users?page=2`;
      return fetch(url, {
        method: 'GET',
        mode: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(result => result.json())
};

// allows you to call a promise recursively
// with a max number of attempts (attemptsLeft)
// will retry until the promise succeeds
// or until max attempts is reached, in which case it will fail
export const retryPromise = (myProm, attemptsLeft) => {
    const newAttemptsLeft = attemptsLeft - 1
    return new Promise((resolve, reject) => {
        console.log(`attempt ${attemptsLeft} to call ${myProm.name}`)
        myProm()
            .then((successData) => {
                console.log(`attempt ${attemptsLeft} success`)
                resolve(successData)
            }, (failureData) => {
                console.log(`attempt ${attemptsLeft} failure`)
                if (newAttemptsLeft < 1) {
                    reject(failureData)
                } else {
                    return retryPromise(myProm, newAttemptsLeft).then(resolve, reject)
                }
            })
    })
}



