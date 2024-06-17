import React, { useEffect, useState } from 'react';
import {useQuery} from '@tanstack/react-query';
import taskService from '../../services/task.service';
import Cookies from 'js-cookie'

import'./TaskPage.css';


const TaskPage = () => {
  const [task, setTask] = useState('')

  const getAllTasks = async () => {
    const response = await taskService.getTasks();
    console.log('response', response.data)
    setTask(response?.data[0]?.note)    
  }

  useEffect(() => {
    getAllTasks()
  }, [])




   


return (
      <div className="container">
         <h2>Task Page</h2>
        <p>{task}</p>
       


     </div>
  );
};

export default TaskPage;