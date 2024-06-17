import React from 'react';
import publicRequest from './basicCaller';





export function getTasks() {
  return publicRequest.get('/tasks')
}







export const taskService = {
  getTasks
};



export default taskService;