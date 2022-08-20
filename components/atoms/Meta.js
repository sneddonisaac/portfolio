import Head from 'next/head'

export default function Meta({ title, desc }) {
    return (
        <Head>
            <title>{title ? `${title} | ISJ` : 'ISJ'}</title>
            <meta name="description" content={desc} />
        </Head>
    )
}
