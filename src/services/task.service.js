import React from 'react';
import authCaller from './authCaller';
import httpCaller from './httpCaller';





export function getTasks() {
  return httpCaller.get('/tasks')
}







export const taskService = {
  getTasks
};



export default taskService;