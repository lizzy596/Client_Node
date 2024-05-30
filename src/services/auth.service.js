import React from 'react';
import { BehaviorSubject } from 'rxjs';
import publicRequest from './publicRequest';



const userSubject = new BehaviorSubject(null);
let refreshTokenTimeout;


export function register({name, email, password}) {
  return publicRequest.post('/auth/register', { name, email, password })
}

export function login({email, password}) {
  return publicRequest.post('/auth/login', { email, password })
}

export function logout({name, email}) {
  return publicRequest.post('/auth/login', { name, email })
}






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