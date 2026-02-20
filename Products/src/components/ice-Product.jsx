const IceProduct = ({ dislebal, productname, dis, price, img, img2, review }) => {
  return (
    <div className="col-6 col-md-4 col-xl-4 mb-4">
      <div className="product-card">

        <div className="image-wrapper">

          <img src={img} alt="" className="img1 img-fluid" />
          <img src={img2} alt="" className="img2 img-fluid" />

          {dislebal && (
            <span className="discount-badge">{dislebal}</span>
          )}

        </div>

        <h6 className="product-name">{productname}</h6>

        <h6 className="star d-flex align-items-center gap-1">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <span>{review}</span>
        </h6>

        <p className="price kalnia m-0">
          <del>{dis}</del> {price}
        </p>

      </div>
    </div>
  );
};

export default IceProduct;
