import React from 'react';
import'./HomePage.css';
import { useUserAuth } from '../../services/auth.service';


const HomePage = () => {

    const user = useUserAuth();
 
return (
      <div className="container">
         {user && <h2>{`Welcome back ${user?.name}`}</h2>}

     </div>
  );
};

export default HomePage;