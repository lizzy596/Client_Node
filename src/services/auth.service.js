import React from 'react';
import { BehaviorSubject } from 'rxjs';
import publicRequest from './publicRequest';
import { redirect } from 'react-router-native';


const userSubject = new BehaviorSubject(null);
let refreshTokenTimeout;


export function register({name, email}) {
  return publicRequest.post('/auth/login', { name, email })
}

export function login({name, email}) {
  return publicRequest.post('/auth/login', { name, email })
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