export const CardBlue = (props) => {
    const image = props.image;
    return (
        <div className="card bg-blue-dark d-flex flex-column justify-content-center align-items-center rounded-0 border-0">
            <img src={image} alt="Call icon" className='w-72 mb-3' />
            <p className='text-white mb-1 fs-14'>georgia.young@example.com</p>
            <p className='text-white m-0 fs-14'>georgia.young@ple.com</p>
            <p className='text-white my-3 text-capitalize'>get support</p>
            <a href="/" className='btn btn-tertiary fs-14 fw-bold border-1 border-blue-light text-capitalize d-flex align-items-center justify-content-center text-blue-light'>submit request</a>
        </div>
    )
}

export const CardWhite = (props) => {
    const image = props.image;
    return (
        <div className="card d-flex flex-column justify-content-center align-items-center rounded-0 border-0">
            <img src={image} alt="Call icon" className='w-72 mb-3' />
            <p className='text-blue-dark mb-1 fs-14'>georgia.young@example.com</p>
            <p className='text-blue-dark m-0 fs-14'>georgia.young@ple.com</p>
            <p className='text-blue-dark my-3 text-capitalize'>get support</p>
            <a href="/" className='btn btn-tertiary fs-14 fw-bold border-1 border-blue-light text-capitalize d-flex align-items-center justify-content-center text-blue-light'>submit request</a>
        </div>
    )
}