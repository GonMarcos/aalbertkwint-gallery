import image01 from '../images/Artwork_007.jpg'
import image02 from '../images/Artwork_008.jpg'
import image03 from '../images/Artwork_009.jpg'
import image04 from '../images/Artwork_010.jpg'
import image05 from '../images/Artwork_011.jpg'
import image06 from '../images/Artwork_012.jpg'
import image07 from '../images/Artwork_013.jpg'


export default function GalleryFull() {
    return (
        <div className='Gallery-section'>
            <div>
                <h2>All my work</h2>
            </div>
            <div className="gallery-full">
                <img src={image01} alt="" />
                <img src={image02} alt="" />
                <img src={image03} alt="" />
                <img src={image04} alt="" />
                <img src={image05} alt="" />
                <img src={image06} alt="" />
                <img src={image07} alt="" />
            </div>
        </div>
    )
}