import { GetStaticProps } from 'next';
import { api } from '../services/api';
import ptBR from 'date-fns/locale/pt-BR';
import { format, parseISO } from 'date-fns';
import { convertDurationToTimeString } from '../utils/convertDurationToTimeString';

type Music = {
  id: string,
  title: string,
  publishedAt: string,
  thumbnail: string,
  url: string,
  type: string,
  duration: number
}
type HomeProps = {
  musics: Array<Music>,
}

export default function Home(props: HomeProps) {
  return (
    <div>
      <h1>xausads</h1>
      <h2>{JSON.stringify(props.musics)}</h2>
    </div>
  )
}

//next executes this function before Home
export const getStaticProps: GetStaticProps = async () => {
    const { data } = await api.get('musics', {
      params: {
        _limit: 12,
        _sort:'published_at',
        _order: 'desc'
      }
    })

    const musics = data.map(music => {
      return {
        id: music.id,
        title: music.title,
        thumbnail: music.thumbnail,
        publishedAt: format(parseISO(music.published_at), 'd MMM yy', { locale: ptBR }),
        duration: Number(music.file.duration),
        durationAsString: convertDurationToTimeString(Number(music.file.duration)),
        url: music.file.url,
      }
    })

    return {
      props: {
        musics,
      },
      revalidate: 60 * 60 * 8, //in 8h - 8h hours, a new version of HTML will be made
    }
}