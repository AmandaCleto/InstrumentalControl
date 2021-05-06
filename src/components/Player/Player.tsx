import React, {useState} from 'react';
import styles from './styles.module.scss';

export default function Header() {
    return (
      <div className={styles.playerContainer}>
        <div className={styles.sliderMobileOnly}>
            <div className={styles.emptySlider}></div>
        </div>

        <header>
          <div>
            <button className={styles.button}>
              <img src="/arrow-left-icon.svg" alt="icone de voltar" className={styles.arrowLeft}/>
            </button>
          </div>
          <div className={styles.playlist}>
            <p>the best album..</p>
            <button className={styles.button}>
              <img src="/playlist-icon.svg" alt="icon of headset"/>
            </button>
          </div>
        </header>

        <div className={styles.albumCover}>
          <div className={styles.emptyPlayer}>
            <p>Selecione uma música para ouvir</p>
          </div>
          <div className={styles.musicName}>
            <p>Time for Space <br className={styles.br}/><span>Emanciapator</span> </p>
          </div>
        </div>

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