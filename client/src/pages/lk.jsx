import React, {useState, useEffect} from "react";
import {Button}from 'react-bootstrap'
import axios from "axios";

const Lk = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setIsAuthenticated(false);
        return;
      }

      try {
        const response = await axios.get('http://localhost:3000/api/user/auth', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setIsAuthenticated(true);
        setUser(response.data.user); // Предполагается, что ответ содержит информацию о пользователе
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        setIsAuthenticated(false);
        setUser(null);
        window.location.reload();
      };
    return(
        <>
        <Button variant="success" onClick={handleLogout}>Выйти</Button>
        </>
    )
}

export default Lk;