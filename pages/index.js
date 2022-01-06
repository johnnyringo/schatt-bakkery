import Head from 'next/head'
import { getProductsInCollection } from '../lib/shopify'
import ProductsList from '../components/ProductsList'
import Hero from '../components/Hero'

export default function Home({ products }) {
 
  return (
    <div className="">
      <Head>
        <title>Schats Bakkery</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=ISO-8859-1" />
        <meta name="description" content="Test bakery" />
        <meta property="og:title" content="Test Bakery" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://schatt-bakkery-magksdbfp-johnnyringo.vercel.app/" />
        <meta property="og:image" content="https://www.buildnextshop.com/share.png" />
        <meta property="og:description"
          content="Test Bakery" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Schats Bakkery" />
      </Head>
      <Hero />
      <ProductsList products={products} />
    </div>
  )
}

export async  function getStaticProps() {
  const products = await getProductsInCollection()

  return {
    props: { products },
  }
}