import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../layout/Layout'
import { FilterProvider } from '../context/filterProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <FilterProvider>
        <Component {...pageProps} />
      </FilterProvider>
    </Layout>
  )
}

export default MyApp
