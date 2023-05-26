import downArrow from '../../icons/arrow-down.svg';

const Offer = () => {
    return (
        <div className="container text-center">
            <img src={downArrow} alt="" />
            <p className="text-uppercase mt-4">we <span className="text-capitalize">Can't</span> wait to meet you</p>
            <h1 className='fw-bold fs-58 text-capitalize mb-3'>Let's Talk</h1>
            <a href="/" className='btn btn-secondary bg-blue-light text-white border-0 d-inline-flex align-items-center justify-content-center'>Try it free now</a>
        </div>
    )
}

export default Offer;