import React from 'react';
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineStar,
  AiFillStar,
} from 'react-icons/ai';

import { Product } from '@/components';

import { client, urlFor } from '@/lib/clinet';


const ProductDeatils = ({ product, products }) => {
  const {
    image,
    name,
    details,
    price,
  } = product;

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={urlFor(image && image[0])} />
          </div>
          {/* <div className="small-images-container">
            {image?.map((item, index) => {
              return (
                <img
                  className={``}
                  key={index}
                  src={urlFor(item)}
                  alt={index}
                />
              );
            })}
          </div> */}
        </div>

        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
          <p>(20)</p>
          <h4>Details: </h4>
          <p>{details}</p>
          <p className="price">${price}</p>
          <div className="quantity">
            <h3>Quantity: </h3>
            <p className="quantity-desc">
              <span className="minus" onClick={() => {}}>
                <AiOutlineMinus />
              </span>
              <span className="num">
                0
              </span>
              <span className="plus" onClick={() => {}}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="buttons">
            <button className="add-to-cart" onClick={() => {}} type="button">
              Add to Cart
            </button>
            <button className="buy-now" onClick={() => {}} type="button">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => {
              return (
                <Product key={item._id} product={item} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }`;

  const products = await client.fetch(query);

  const paths = products.map((product) => {
    return {
      params: {
        slug: product.slug.current,
      },
    };
  });

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = `*[_type == "product"]`;

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);


  return {
    props: {
      products,
      product,
    },
  };
};

export default ProductDeatils;