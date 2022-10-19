import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../layout/Layout'
import { FilterProvider } from '../context/filterProvider'
import { ProductProvider } from '../context/productsProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <ProductProvider>
        <FilterProvider>
          <Component {...pageProps} />
        </FilterProvider>
      </ProductProvider>
    </Layout>
  )
}

export default MyApp
