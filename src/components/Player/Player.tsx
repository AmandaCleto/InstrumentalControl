import React, { useState, useRef } from 'react';
import styles from './styles.module.scss';

export default function Player(refWrapper) {
  const [ativo, setAtivo] = useState(false);
  const [maximizePlayer, setMaximizePlayer] = useState(false);
  const [toggleMaxMin, setToggleMaxMin] = useState(false)
  const refPlayerContainer = useRef<HTMLDivElement>(null);

  const closePlayerDesktop = () => {
    refWrapper.refWrapper.current.style.padding = 0;
    document.body.style.overflowX = 'hidden';
    refPlayerContainer.current.style.transitionDelay = '35ms';
    setAtivo(true);
  }

  const openPlayerDesktop = () => {
    refWrapper.refWrapper.current.style.paddingLeft = '22.4rem';
    document.body.style.overflowX = 'auto';
    refPlayerContainer.current.style.transitionDelay = '0ms';
    setAtivo(false);
  }

  const minimizePlayerMobile = () => {
    if (toggleMaxMin) return;
    setMaximizePlayer(true)
    setToggleMaxMin(true)
  }
  const maximizePlayerMobile = () => {
    if (!toggleMaxMin) return;
    setMaximizePlayer(false)
    setToggleMaxMin(false)
  }

  return (
    <div className={`${styles.playerContainer}  ${ativo ? styles.varHidePlayerDesk : ''} ${maximizePlayer ? styles.varMaximizePlayer : ''}`} ref={refPlayerContainer}>
      <button className={`${styles.button} ${styles.buttonOpenPlayerDesktop}`} onClick={openPlayerDesktop}>
        <img src="/arrow-right-icon.svg" alt="icone de voltar"/>
      </button>

      <div className={styles.sliderMobileOnly}>
          <div className={styles.emptySlider}></div>
      </div>

      <header>
        <div className={styles.playlist}>
          <button className={styles.button}>
            <img src="/playlist-icon.svg" alt="icon of headset"/>
          </button>
          <p>the best album..</p>
        </div>
        <div>
          <button className={`${styles.button} ${styles.buttonClosePlayerDesktop}`} onClick={closePlayerDesktop}>
            <img src="/arrow-left-icon.svg" alt="icone de voltar"/>
          </button>
          <button className={`${styles.button} ${styles.buttonExpandPlayerMob}`} onClick={toggleMaxMin ? maximizePlayerMobile : minimizePlayerMobile}>
            <img src="/arrow-up-icon.svg" alt="icone de expandir"/>
          </button>
        </div>
      </header>

      <main className={styles.albumCover}>
        <div className={styles.emptyPlayer}>
          <p>Selecione uma música para ouvir</p>
        </div>
        <div className={styles.musicName}>
          <p>Time for Space <br className={styles.br}/><span>Emanciapator</span> </p>
        </div>
      </main>

      <footer className={styles.playerController}>
        <div className={styles.progress}>
          <span>00:00</span>
          <div className={styles.slider}>
            <div className={styles.emptySlider}></div>
          </div>
          <span>00:00</span>
        </div>

        <div className={styles.controler}>
          <button type="button" className={styles.buttonController}><img src="/shuffle-icon.svg" alt="icone de embaralhar"/></button>
          <button type="button" className={styles.buttonController}><img src="/move-back-icon.svg" alt="icone de tocar anterior"/></button>
          <button type="button" className={styles.buttonController}><img src="/play-icon.svg" alt="icone de tocar"/></button>
          <button type="button" className={styles.buttonController}><img src="/move-front-icon.svg" alt="icone de tocar a próxima"/></button>
          <button type="button" className={styles.buttonController}><img src="/repeat-icon.svg" alt="icone de repetir"/></button>
        </div>
      </footer>
    </div>
  )
}
