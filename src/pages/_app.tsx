import '../sytles/global.scss';

import Header from '../components/Header/Header';
import Player from '../components/Player/Player';

import styles from '../sytles/app.module.scss';

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}>
      <main>
        <Header/>
        <Component {...pageProps} />
      </main>
      <Player/>
    </div>
  )
}

export default MyApp
