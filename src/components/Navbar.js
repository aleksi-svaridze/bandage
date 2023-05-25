import RightArrow from '../icons/right-arrow.svg';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand text-blue-dark text-capitalize" href="/">bandage</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav">
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

                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item">
                            <a className="nav-link text-blue-light text-capitalize" href="/">login</a>
                        </li>
                        <li className="nav-item">
                            <a className="btn border-0 btn-primary bg-blue-light text-white" href="/">become a member <img src={RightArrow} alt="Right arrow" /> </a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Navbar;