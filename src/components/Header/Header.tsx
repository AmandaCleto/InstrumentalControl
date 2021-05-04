import React, {useState} from 'react';
import styles from './styles.module.scss';
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

export default function Header() {
    const currentData = format(new Date(), 'EEEEEE, d, MMMM', {
        locale: ptBR,
    });

    let [state, setState] = useState({currentSrc: ''})

    const onLoad = (event) => {
      setState({
        currentSrc: event
      });
    }

    return (
        <header className={styles.header}>
           <img
            src="/logo-mobile.png"
            alt="logo"
            srcSet="/logo-mobile.png 158w, /logo.png 500w"
            sizes="50vw"
        />
        </header>
    )
}