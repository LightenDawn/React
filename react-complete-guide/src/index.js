// package中有引入react-dom的library
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

// public/index.html中有div.root, 在div.root中可以設置react.js的內容
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
