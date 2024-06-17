import React from 'react';
import { BehaviorSubject } from 'rxjs';
import publicRequest from './basicCaller';



const userSubject = new BehaviorSubject(null);
let refreshTokenTimeout;


export function register({ name, email, password }) {
  return publicRequest.post('/auth/register', { name, email, password })
}

export function login({ email, password }) {
  return publicRequest.post('/auth/login', { email, password })
}

export function logout({ name, email }) {
  return publicRequest.post('/auth/login', { name, email })
}

// import React from 'react';
// import { BehaviorSubject } from 'rxjs';

// const DEFAULT_STATE = 0

// const subject = new BehaviorSubject(DEFAULT_STATE);

// export const clockStateStore = {
//   useStore,
//   observable: subject.asObservable(),
//   set: state => subject.next(state),
//   get value() {
//     return subject.value;
//   }
// };

// function useStore() {
//   const [data, setData] = React.useState(clockStateStore.value);
//   React.useEffect(() => {
//     const subscription = clockStateStore.observable.subscribe(p => {
//       setData(p);
//     });
//     return () => subscription.unsubscribe();
//   }, []);
//   return data;
// }

// export default clockStateStore;




export const authService = {
  register,
  logout,
  login,
  user: userSubject.asObservable(),
  get userValue() {
    return userSubject.value;
  }
};



export default authService;