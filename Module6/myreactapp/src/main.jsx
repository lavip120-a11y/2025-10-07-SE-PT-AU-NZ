import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ErrorBoundary } from "react-error-boundary";
import ErrorMessage from './ErrorMessage.jsx';

createRoot(document.getElementById('root')).render( //injecting in the root element which is in the main.jsx
  <StrictMode>
    <ErrorBoundary FallbackComponent={ErrorMessage}>
    <App />
    </ErrorBoundary>
  </StrictMode>,
);

// uses the root element in the index.html file to render the App component
// App component is the main component which has all the other components inside it
// StrictMode is a wrapper component that helps to identify potential problems in an application