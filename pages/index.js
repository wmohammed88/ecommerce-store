import React from 'react'
import product from '../first ecommerce website/schemas/product';
import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';
import banner from '../first ecommerce website/schemas/banner';

const Home = ({products, bannerData}) => {
  return (
   <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
    <div className='products-heading'>
      <h2>Best selling products</h2>
      <p>Best headphones on the market</p>
    </div>
    <div className='products-container'>
      {products?.map((product) => <Product key={product._id} product={product}/>)}
    </div>

    <FooterBanner footerBanner={bannerData && bannerData[0]}/>
    </div> 
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {products, bannerData}
  }
}

export default Home;
