import React, { useState, useEffect } from 'react';
import * as config from  '../../config.json';
import axios from 'axios';


const publicRequest = axios.create({
  baseURL: config.apiServerUrlDevelopment
});

export default publicRequest;
