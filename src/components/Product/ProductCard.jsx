import React from "react";
import { motion } from "framer-motion";
import "../../styles/product-card.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";
import { toast } from "react-toastify";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
      })
    );
    toast.success("you just have 1 drink to your cart");
  };
  return (
    <Col lg="3" md="4">
      <div className="product_item">
        <div className="product_img">
          <motion.img whileHover={{ scale: 1.2 }} src={item.imgUrl} alt="" />
        </div>
        <div className="p-3 product_information">
          <h3 className="product_name">
            <Link to={`/Shop/${item.id}`}> {item.productName} </Link>
          </h3>
          <span> {item.category} </span>
        </div>
        <div className="product_card-bottom d-flex align-items-center justify-content-between p-2">
          <span className="price">{item.price} </span>
          <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}>
            <i className="ri-add-line"></i>
          </motion.span>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
