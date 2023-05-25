import RightArrow from '../icons/right-arrow.svg';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg py-20">
            <div className="container">

                <a className="navbar-brand text-blue-dark text-capitalize m-0" href="/">bandage</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">

                    <ul className="navbar-nav column-gap-2 me-auto ms-115">
                        <li className="nav-item">
                            <a className="nav-link text-gray text-capitalize" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-gray text-capitalize" href="/">product</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-gray text-capitalize" href="/">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-gray text-capitalize" href="/">contact</a>
                        </li>
                    </ul>

                    <ul className="navbar-nav column-gap-4 align-items-lg-center">
                        <li className="nav-item">
                            <a className="nav-link text-blue-light text-capitalize" href="/">login</a>
                        </li>
                        <li className="nav-item">
                            <a className="text-decoration-none d-flex align-items-center justify-content-center column-gap-3 border-0 btn-primary bg-blue-light text-white" href="/">Become a member <img src={RightArrow} alt="Right arrow" /> </a>
                        </li>
                    </ul>

                </div>

            </div>
        </nav>
    )
}

export default Navbar;