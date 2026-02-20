

const FeatureCard = ({ price,title,img }) => {
    return (
        <div className="Feature-Product pt-4">
            <div className="">
                <div className="d-flex align-items-center">
                    <div className="me-3">
                        <img src={img} alt="" width="78" className="" />
                    </div>
                    <div >
                        <div className="d-flex align-items-center ">
                            <h6 className="star flex align-center">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <span>No reviews</span>
                            </h6>

                        </div>
                        <h5 className="mb-1 fs-6" style={{ color: "#868686" }}>{title}</h5>

                        <h5 className=" kalnia  fs-6 mb-0">{price}</h5>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default FeatureCard;