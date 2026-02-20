import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Product.css';
import IceProduct from './ice-Product';
import FeatureCard from './Feature-card';

import img1 from "/Images/1.jpg";
import img12 from "/Images/1.2.jpg";
import img2 from "/Images/2.jpg";
import img3 from "/Images/3.jpg";
import img33 from "/Images/3.3.jpg";
import img4 from "/Images/4.jpg";
import img44 from "/Images/4.4.jpg";
import img5 from "/Images/5.jpg";
import img6 from "/Images/6.jpg";
import img66 from "/Images/6.6.jpg";
import img7 from "/Images/7.jpg";
import img77 from "/Images/7.7.jpg";
import img8 from "/Images/8.jpg";
import img88 from "/Images/8.8.jpg";
import img9 from "/Images/9.jpg";
import img99 from "/Images/9.9.jpg";

import pd1 from "/Images/pd1.avif";
import pd2 from "/Images/pd2.avif";
import pd3 from "/Images/pd3.webp";

function Product() {

    const FilterContent = () => (
        <>
            <h5 className="filter-title kalnia">Collections</h5>

            <div className="form-check p-0">
                <input type="checkbox" className="custom-checkbox" />
                <label className="form-check-label px-2">Canned Ice Cream (8)</label>
            </div>

            <div className="form-check p-0">
                <input type="checkbox" className="custom-checkbox" />
                <label className="form-check-label px-2">Frozen Yogurt (6)</label>
            </div>

            <div className="form-check p-0">
                <input type="checkbox" className="custom-checkbox" />
                <label className="form-check-label px-2">Ice Cream Cakes (21)</label>
            </div>

            <hr />

            <h5 className="filter-title kalnia">Availability</h5>

            <div className="form-check p-0">
                <input type="checkbox" className="custom-checkbox" />
                <label className="form-check-label px-2">In stock (23)</label>
            </div>

            <div className="form-check p-0">
                <input type="checkbox" className="custom-checkbox" />
                <label className="form-check-label px-2">Out of stock (1)</label>
            </div>

            <hr />

            <h5 className="filter-title kalnia">Price</h5>

            <input type="range" min="0" max="100" className="thumb thumb-left" />
            <h6 className="fs-6">
                Price : <span className="text-danger">$0.00 — $15.00</span>
            </h6>

            <hr />

            <h5 className="filter-title kalnia">Color</h5>
            <div className="d-flex flex-column">
                <span className="form-check-label color">Black (1)</span>
                <span className="form-check-label color">Black (1)</span>
                <span className="form-check-label color">Black (1)</span>
            </div>

            <hr />

            <h5 className="filter-title kalnia">Size</h5>

            <div className="form-check p-0">
                <input type="checkbox" className="custom-checkbox" />
                <label className="form-check-label px-2">S (3)</label>
            </div>

            <div className="form-check p-0">
                <input type="checkbox" className="custom-checkbox" />
                <label className="form-check-label px-2">M (3)</label>
            </div>

            <div className="form-check p-0">
                <input type="checkbox" className="custom-checkbox" />
                <label className="form-check-label px-2">L (3)</label>
            </div>

            <hr />

            <h5 className="filter-title kalnia">Feature Product</h5>

            <FeatureCard price={"$15.00"} title={"Darkest Chocolate"} img={pd1} />
            <FeatureCard price={"$10.00"} title={"Double Dough"} img={pd2} />
            <FeatureCard price={"$12.00"} title={"Cold Brew With Coconut Cream"} img={pd3} />
        </>
    );

    return (
        <section className="products-page py-5">

            <div className="container-fluid">

                <button
                    className="btn btn-outline-dark d-lg-none mb-3"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#mobileFilter"
                >
                    ☰ Filter
                </button>

                <div className="row">

                    <div className="col-lg-3 d-none d-lg-block sidebar">
                        <FilterContent />
                    </div>

                    <div className="col-12 col-lg-9">

                        <div className="row">

                            <IceProduct dislebal="-20%" productname="Banana Cream Pudding" dis="$15.00" price="$12.00" img={img1} img2={img12} review="No reviews" />
                            <IceProduct productname="Blackout Chocolate Cake" price="$12.00" img={img2} img2={img2} review="1 review" />
                            <IceProduct dislebal="-16%" productname="Brambleberry Crisp" dis="$12.00" price="$10.00" img={img3} img2={img33} review="No reviews" />
                            <IceProduct productname="Brown Sugar Cinnamon" price="$15.00" img={img4} img2={img44} review="No reviews" />
                            <IceProduct dislebal="-20%" productname="Burnt Orange Dreamsicle" dis="$15.00" price="$12.00" img={img5} img2={img5} review="No reviews" />
                            <IceProduct productname="Chocolate Mud" price="$15.00" img={img6} img2={img66} review="No reviews" />
                            <IceProduct productname="Cold Brew With Coconut Cream" price="$12.00" img={img7} img2={img77} review="No reviews" />
                            <IceProduct productname="Cookies In Cream" price="$12.00" img={img8} img2={img88} review="No reviews" />
                            <IceProduct productname="Cream Puff" price="$11.00" img={img9} img2={img99} review="No reviews" />

                        </div>

                    </div>
                </div>
            </div>

            <div className="offcanvas offcanvas-start" id="mobileFilter">
                <div className="offcanvas-header">
                    <h5 className="kalnia">Filters</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
                </div>
                <div className="offcanvas-body">
                    <FilterContent />
                </div>
            </div>

        </section>
    );
}

export default Product;
