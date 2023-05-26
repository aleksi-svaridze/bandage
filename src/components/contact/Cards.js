import {CardBlue, CardWhite} from './Card';

const Cards = () => {
    return (
        <div className="container py-80 justify-content-center d-flex">
            <div className="row gy-3 gy-md-0">
                <div className="col-12 col-md-4 p-0 mx-auto">
                    <div className='d-flex justify-content-center'>
                        <CardWhite />
                    </div>
                </div>
                <div className="col-12 col-md-4 p-0 mx-auto">
                    <div className='d-flex justify-content-center'>
                        <CardBlue />
                    </div>
                </div>
                <div className="col-12 col-md-4 p-0 mx-auto">
                    <div className='d-flex justify-content-center'>
                        <CardWhite />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards;