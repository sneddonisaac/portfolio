import Head from 'next/head'

export default function Meta({ title }) {
    return (
        <Head>
            <title>{title ? `${title} | ISJ` : 'ISJ'}</title>
        </Head>
    )
}
