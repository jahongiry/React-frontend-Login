import axios from 'axios';
import { createContext } from 'react';

const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
  const loginApiCall = async (payload) => {
    await axios
      .post('https://rails-backend-jy.herokuapp.com/login', payload)
      .then((res) => {
        localStorage.setItem('token', JSON.stringify(res.data.token));
      });
  };

  return (
    <AuthContext.Provider value={{ loginApiCall }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
