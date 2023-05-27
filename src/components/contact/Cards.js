import {CardBlue, CardWhite} from './Card';

import Call from '../../icons/call-icon.svg';
import Map from '../../icons/map-icon.svg';
import Envelope from '../../icons/envelope-icon.svg';

const Cards = () => {
    return (
        <div className="container py-80 justify-content-center d-flex">
            <div className="row gy-3 gy-md-0">
                <div className="col-12 col-md-4 p-0 mx-auto">
                    <div className='d-flex justify-content-center'>
                        <CardWhite image={Call} />
                    </div>
                </div>
                <div className="col-12 col-md-4 p-0 mx-auto">
                    <div className='d-flex justify-content-center'>
                        <CardBlue image={Map} />
                    </div>
                </div>
                <div className="col-12 col-md-4 p-0 mx-auto">
                    <div className='d-flex justify-content-center'>
                        <CardWhite image={Envelope} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards;