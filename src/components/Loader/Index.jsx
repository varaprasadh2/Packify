import Mylogo from '../../../src/assets/app_logo.png';
import parcel from '../../../src/assets/svg/parcel-box-package-icon.svg'
import './index.css'

export default function Loader() {
    return(
        <div className='loader'>
            <div className="loader-inner">
                <div className='wrap'>
                        <img className='image truck-img' src={Mylogo} alt="" />
                        <img className='image box-img' src={parcel} alt="" />
                        <img className='image box-img box-img2' src={parcel} alt="" />
                        <img className='image box-img box-img3' src={parcel} alt="" />
                        <img className='image box-img box-img4' src={parcel} alt="" />
                        <img className='image box-img box-img5' src={parcel} alt="" />
                        <img className='image box-img box-img6' src={parcel} alt="" />
                        <img className='image box-img box-img7' src={parcel} alt="" />
                        <img className='image box-img box-img8' src={parcel} alt="" />
                        <img className='image box-img box-img9' src={parcel} alt="" />
                    </div>
            </div>
        </div>
    )
}