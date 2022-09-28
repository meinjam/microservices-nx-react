// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import { printName } from '@microservices/common';

import { Route, Routes, Link } from 'react-router-dom';

export function App() {
  return (
    <>
      <div>
        <h1>Hello fron Admin Panel</h1>
        <p>{printName('Injamamul Haque')}</p>
      </div>
    </>
  );
}

export default App;
