import React, { useRef } from 'react';
import '../sytles/global.scss';

import Header from '../components/Header/Header';
import Player from '../components/Player/Player';

import styles from '../sytles/app.module.scss';

function App({ Component, pageProps }) {
  const refWrapper = useRef();
  return (
    <div className={styles.wrapper} ref={refWrapper}>
      <main>
        <Header/>
        <Component {...pageProps} />
      </main>
      <Player refWrapper={refWrapper}/>
    </div>
  )
}

export default App
