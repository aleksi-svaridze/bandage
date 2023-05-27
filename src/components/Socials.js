import FacebookBlue from '../icons/facebook-lightblue.svg';
import InstagramBlue from '../icons/instagram-lightblue.svg';
import TwitterBlue from '../icons/twitter-lightblue.svg';

const Socials = () => {
    return (
        <div className='socials pt-80'>
            <div className='container d-flex justify-content-between align-items-center my-55'>
                <p className='text-capitalize fs-5 m-0'>bandage</p>
                <div className='d-flex column-gap-3 align-items-center me-70'>
                    <a href="/">
                        <img src={FacebookBlue} className='w-24' alt="" />
                    </a>

                    <a href="/">
                        <img src={InstagramBlue} className='w-24' alt="" />
                    </a>

                    <a href="/">
                        <img src={TwitterBlue} className='w-24' alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Socials;