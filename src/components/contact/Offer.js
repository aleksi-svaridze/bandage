import downArrow from '../../icons/arrow-down.svg';

const Offer = () => {
    return (
        <div className="container text-center">
            <img src={downArrow} alt="" />
            <p className="text-uppercase mt-4">we <span className="text-capitalize">Can't</span> wait to meet you</p>
            <h1 className='fw-bold fs-58 text-capitalize'>Let's Talk</h1>
        </div>
    )
}

export default Offer;