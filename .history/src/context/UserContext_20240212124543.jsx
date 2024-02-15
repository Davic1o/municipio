import { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  navigate = useNavigate();

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
