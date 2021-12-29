import Head from 'next/head'
import { getProductsInCollection } from '../lib/shopify'
import ProductsList from '../components/ProductsList'

export default function Home({ products }) {
  console.log(products)
  return (
    <div className="text-3xl">
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