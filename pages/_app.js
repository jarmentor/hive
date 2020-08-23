import Head from 'next/head'
import '../styles/globals.css'

const description =
    'Jonathan Armentor is a passionate designer and developer with a deep interest in creating visually engaging digital experiences.'
const title = 'Jonathan Armentor: Designer'
function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta charSet='utf-8' />
                <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
                <title>{title}</title>

                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1, shrink-to-fit=no'
                />
                <meta name='description' content={description} />

                <link
                    rel='apple-touch-icon'
                    sizes='57x57'
                    href='/apple-icon-57x57.png'
                />
                <link
                    rel='apple-touch-icon'
                    sizes='60x60'
                    href='/apple-icon-60x60.png'
                />
                <link
                    rel='apple-touch-icon'
                    sizes='72x72'
                    href='/apple-icon-72x72.png'
                />
                <link
                    rel='apple-touch-icon'
                    sizes='76x76'
                    href='/apple-icon-76x76.png'
                />
                <link
                    rel='apple-touch-icon'
                    sizes='114x114'
                    href='/apple-icon-114x114.png'
                />
                <link
                    rel='apple-touch-icon'
                    sizes='120x120'
                    href='/apple-icon-120x120.png'
                />
                <link
                    rel='apple-touch-icon'
                    sizes='144x144'
                    href='/apple-icon-144x144.png'
                />
                <link
                    rel='apple-touch-icon'
                    sizes='152x152'
                    href='/apple-icon-152x152.png'
                />
                <link
                    rel='apple-touch-icon'
                    sizes='180x180'
                    href='/apple-icon-180x180.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='192x192'
                    href='/android-icon-192x192.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='32x32'
                    href='/favicon-32x32.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='96x96'
                    href='/favicon-96x96.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='16x16'
                    href='/favicon-16x16.png'
                />
                <link rel='manifest' href='/manifest.json' />
                <meta name='twitter:card' content='summary' />
                <meta
                    name='twitter:url'
                    content='https://jonathanarmentor.com'
                />
                <meta name='twitter:title' content={title} />
                <meta name='twitter:description' content={description} />
                <meta
                    name='twitter:image'
                    content='https://jonathanarmentor.com/android-icon-192x192.png'
                />
                <meta name='twitter:creator' content='@Jayarmentor' />
                <meta property='og:type' content='website' />
                <meta property='og:title' content={title} />
                <meta property='og:description' content={description} />
                <meta property='og:site_name' content={title} />
                <meta
                    property='og:url'
                    content='https://jonathanarmentor.com'
                />
                <meta
                    property='og:image'
                    content='https://jonathanarmentor.com/apple-touch-icon.png'
                />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
