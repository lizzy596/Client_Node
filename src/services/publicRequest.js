import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from './config.json';

const publicRequest = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default publicRequest;
