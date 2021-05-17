import { GetStaticProps } from "next";
import { api } from "../services/api";
import Image from "next/image";
import ptBR from "date-fns/locale/pt-BR";
import { format, parseISO } from "date-fns";
import { convertDurationToTimeString } from "../utils/convertDurationToTimeString";
import Link from "next/link";

import styles from "./home.module.scss";

type Music = {
  id: string;
  title: string;
  album: string;
  publishedAt: string;
  thumbnail: string;
  url: string;
  type: string;
  durationAsString: number;
};
type HomeProps = {
  latestSongs: Array<Music>;
  allSongs: Array<Music>;
};

export default function Home({ latestSongs, allSongs }: HomeProps) {
  return (
    <div className={styles.homepage}>
      <section className={styles.latestSongsSection}>
        <h2>Últimas Adicionadas</h2>

        <div className={styles.latestSongs}>
          {latestSongs.map((song) => {
            return (
              <div key={song.id} className={styles.latestSongsBox}>
                <div>
                  <Image
                    width={210}
                    height={130}
                    src={song.thumbnail}
                    alt={song.title}
                    objectFit="cover"
                    className={styles.thumbnail}
                  />
                  <Link href={`musics/${song.id}`}>
                    <a>{song.title}</a>
                  </Link>
                </div>
                <div>
                  <small>{song.publishedAt}</small>
                  <button>
                    <img src="/play-icon.svg" alt="" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className={styles.allSongs}>
        <h2>Todas as músicas</h2>

        <div>
          <table cellSpacing={0} cellPadding={0}>
            <thead>
              <tr>
                <th></th>
                <td>Nome</td>
                <td className={styles.dNoneMob}>Albúm</td>
                <td className={styles.dNoneMob}>Data</td>
                <td className={styles.dNoneMob}>Duração</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {allSongs.map((song) => {
                return (
                  <tr key={song.id}>
                    <td style={{minWidth: '60px'}}>
                      <Image
                        width={210}
                        height={130}
                        src={song.thumbnail}
                        alt={song.title}
                        objectFit="cover"
                        className={styles.thumbnail}
                      />
                    </td>
                    <td>
                      <Link href={`musics/${song.id}`}>
                        <a>{song.title}</a>
                      </Link>
                      <p className={styles.dNoneDesk}>{song.album}</p>
                    </td>
                    <td className={styles.dNoneMob}>{song.album}</td>
                    <td className={styles.dNoneMob}>{song.publishedAt}</td>
                    <td className={styles.dNoneMob}>{song.durationAsString}</td>
                    <td>
                      <button>
                        <img src="/play-icon.svg" alt="" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

//next executes this function before Home
export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get("musics", {
    params: {
      _limit: 12,
      _sort: "published_at",
      _order: "desc",
    },
  });

  const musics = data.map((music) => {
    return {
      id: music.id,
      title: music.title,
      album: music.album,
      thumbnail: music.thumbnail,
      publishedAt: format(parseISO(music.published_at), "d MMM yy", {
        locale: ptBR,
      }),
      duration: Number(music.file.duration),
      durationAsString: convertDurationToTimeString(
        Number(music.file.duration)
      ),
      url: music.file.url,
    };
  });

  const latestSongs = musics.slice(0, 2);
  const allSongs = musics.slice(2, musics.lenght);

  return {
    props: {
      latestSongs,
      allSongs,
    },
    revalidate: 60 * 60 * 8, //in 8h - 8h hours, a new version of HTML will be made
  };
};
