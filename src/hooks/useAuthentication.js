import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';

const useAuthentication = () => {
    return useContext(AuthContext);
};

export default useAuthentication;
