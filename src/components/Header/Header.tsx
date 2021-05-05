import React, {useState} from 'react';
import styles from './styles.module.scss';
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

export default function Header() {
    const currentData = format(new Date(), 'EEEEEE, d, MMMM', {
        locale: ptBR,
    });

    return (
        <header className={styles.header}>
          <img
            src="/logo.png"
            alt="logo"
            className={styles.logoDesktop}
          />
          <img
            src="/logo-mobile.png"
            alt="logo"
            className={styles.logoMobile}
          />
          <span>{currentData}</span>
        </header>
    )
}