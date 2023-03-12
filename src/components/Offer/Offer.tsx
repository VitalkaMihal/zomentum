import './styles.scss';
import {ReactComponent as Img1} from '../../assets/icons/img1.svg'
import {ReactComponent as Img2} from '../../assets/icons/img2.svg'
import {ReactComponent as Img3} from '../../assets/icons/img3.svg'

export const Offer = () => {
    return (
        <div className='offer'>
            <div className="offer__container container">
                <h2 className="offer__title">List. Sell. Grow</h2>
                <div className="offer__container-inner">
                    <div className="offer__card offer__card--img1">
                        <Img1 width={100} />
                        <h5 className="offer__card-text">
                            Be a part of the only  All-In-One <br /> platform for IT services 
                        </h5>
                    </div>
                    <div className="offer__card offer__card--img2">
                        <Img2 width={100} />
                        <h5 className="offer__card-text">
                            Come closer to finding your next <br /> customer
                        </h5>
                    </div>
                    <div className="offer__card offer__card--img3">
                        <Img3 width={100} />
                        <h5 className="offer__card-text">
                            Grow your business with a <br /> single click
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
