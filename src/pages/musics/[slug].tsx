import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths } from 'next';
import ptBR from "date-fns/locale/pt-BR";
import { format, parseISO } from "date-fns";
import { convertDurationToTimeString } from "../../utils/convertDurationToTimeString";
import { api } from '../../services/api';

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

type MusicProps = {
    music: Music;
};

export default function MusicDescription({ music } : MusicProps) {
    const router = useRouter()
    return (
        <div>
            <h1>{router.query.slug}</h1>
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { slug } = context.params;

    const { data } = await api.get(`/musics/${slug}`);

    const music = {
        id: data.id,
        title: data.title,
        album: data.album,
        thumbnail: data.thumbnail,
        descriptions: data.description,
        publishedAt: format(parseISO(data.published_at), "d MMM yy", {
          locale: ptBR,
        }),
        duration: Number(data.file.duration),
        durationAsString: convertDurationToTimeString(
          Number(data.file.duration)
        ),
        url: data.file.url,
    };

    return {
        props: { music },
        revalidate: 60 * 60 * 24 //24h
    }
}