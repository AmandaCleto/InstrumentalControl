import React, {useState} from 'react';
import styles from './styles.module.scss';

export default function Header() {
    return (
      <div className={styles.playerContainer}>
        <header>
            <img src="/headset-icon.svg" alt="icon of headset"/>
            <p>Snk - Sasageyo</p>
        </header>

        <div className={styles.emptyPlayer}>
          <p>Selecione uma música para ouvir</p>
        </div>

        <footer className={styles.playerControler}>
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