/* eslint-disable @next/next/inline-script-id */
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import { ThemeProvider } from 'next-themes'
import { DefaultSeo } from 'next-seo'
import { SEO } from '../seo.config'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider attribute="class">
            {/* Google tag (gtag.js) */}
            <Script
                strategy="lazyOnload"
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
            />
            <Script strategy="lazyOnload">
                {`
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                        page_path: window.location.pathname,
                      });
                `}
            </Script>
            {/* theme selector local storage settings */}
            <Script>
                {`
                if (
                localStorage.getItem('color-theme') === 'dark' ||
                (!('color-theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
                ) {
                    document.documentElement.classList.add('dark');
                } else {
                    document.documentElement.classList.remove('dark');
                }
            `}
            </Script>
            {/* default seo settings */}
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp
