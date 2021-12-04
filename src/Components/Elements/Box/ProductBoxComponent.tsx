import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillBagFill } from 'react-icons/bs';
import { product } from '@Element/Box/MainItemListBox';
import { addProductToCart } from '@API';
import _Alert_ from '@_Alert_';

export default function ProductBoxComponent({ item }: { item: product }) {
    const productToCart = async (uuid: string) => {
        const response = await addProductToCart({ productUuid: uuid });
        if (response.status) {
            _Alert_.default({ text: response.payload.message });
        } else {
            _Alert_.default({ text: response.message });
        }
    };

    return (
        <div className="col-xl-3 col-xs-6 col-md-4 col-lg-3 col-sm-6 col-6">
            <div className="product-wrap mb-25">
                <div className="product-img">
                    <Link to={`/product/${item.uuid}`}>
                        <img className="default-img" src={item.url} alt={item.name} />
                        <img className="hover-img" src={item.url} alt={item.name} />
                    </Link>
                    {/* <span className="pink">-10%</span> */}
                    <div className="product-action">
                        <div className="pro-same-action pro-cart" onClick={() => productToCart(item.uuid)}>
                            <Link to="#">
                                <BsFillBagFill /> 장바구니 담기
                            </Link>
                        </div>
                        {/*<div className="pro-same-action pro-wishlist">*/}
                        {/*    <Link to="/wishlist">*/}
                        {/*        <BsFillHeartFill />*/}
                        {/*    </Link>*/}
                        {/*</div>*/}
                        {/* <div className="pro-same-action pro-quickview">
                                                    <a
                                                        title="Quick View"
                                                        href="#"
                                                        data-toggle="modal"
                                                        data-target="#exampleModal"
                                                    >
                                                        <i className="pe-7s-look"></i>
                                                    </a>
                                                </div> */}
                    </div>
                </div>
                <div className="product-content text-center">
                    <h3>
                        <Link to={`/product/${item.uuid}`}>{item.name}</Link>
                        <p className="review-count">리뷰 : {item.review}</p>
                    </h3>
                    <div className="product-option">
                        <span>{item.color}</span>
                    </div>
                    <div className="product-price">
                        <p className="old">{item.originalPrice}원</p>
                        <p>{item.price}원</p>
                    </div>
                    <div className="product-icon">
                        <span>
                            <img
                                src="http://www.jogunshop.com/shopimages/jogunshop/prod_icons/37?1626422274"
                                alt="img"
                            />
                        </span>
                        <span>
                            <img
                                src="http://www.jogunshop.com/shopimages/jogunshop/prod_icons/47?1626422241"
                                alt="img"
                            />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
