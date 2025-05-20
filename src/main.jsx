import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// Import from components folder since your reducer is there
import { StateProvider } from './components/StateProvider.jsx';
import reducer, { initialState } from './components/reducer';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </StrictMode>
);

//pull information frm the data layer 
export const useStateValue =() =>useContext(StateContext);