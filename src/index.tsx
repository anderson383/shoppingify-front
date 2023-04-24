import ReactDOM from 'react-dom/client';
import './styles.scss';
import reportWebVitals from './reportWebVitals';
import {App} from "./app/App";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <div className="wrapper-page">
      <App />
    </div>
);

reportWebVitals();
