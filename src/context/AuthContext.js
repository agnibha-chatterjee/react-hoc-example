import React from 'react';
export const AuthContext = React.createContext();

const initialState = {
  isAuthenticated: false
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        error: null
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        error: 'An error occured.'
      };
    default:
      return { ...state };
  }
};

export default ({ children }) => {
  const [state, dispatch] = React.useReducer(authReducer, initialState);
  return (
    <div>
      <AuthContext.Provider value={{ state, dispatch }}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};
