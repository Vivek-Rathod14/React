import 'bootstrap/dist/css/bootstrap.min.css';
function ProductHeader() {
    return (
        <>
            <section className="pt-5 " >
                <div className="container text-center">
                    <h1 className="fw-bold p-40  text-black py-2 kalnia ">
                        Products
                    </h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item">
                                <a href="#" className="text-decoration-none text-dark">
                                    Home
                                </a>
                            </li>
                            <li
                                className="breadcrumb-item active text-dark"
                                aria-current="page"
                            >
                                Products
                            </li>
                        </ol>
                    </nav>
                </div>
            </section>
        </>
    );
}

export default ProductHeader;
