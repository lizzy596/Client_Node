import React, { useState, useEffect } from 'react';
import * as config from  '../../config.json';
import axios from 'axios';


const basicCaller = axios.create({
  baseURL: config.apiServerUrlDevelopment,
  withCredentials: true,


});

export default basicCaller;
