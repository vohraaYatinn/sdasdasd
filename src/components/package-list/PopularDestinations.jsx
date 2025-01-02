import React from 'react'
import './PopularDestinations.css'

const PopularDestinations = () => {
    return (
        <>
            <br /><br />
            <div className='popular-destinations-title'>
                <div><h2>Popular Destinations</h2></div>
                <button>View All Destinations</button>
            </div>
            <br />
            <div className='popular-destinations-container'>
                <div className='starts-from'>
                    <div className="starts-from-heading">STARTS FROM</div>
                    {/* all the starts from cards are here  */}
                    <div className='starts-from-card'>
                        <div className='starts-from-content'>
                            <div className='starts-from-image'><img src="https://picsum.photos/500/600?random=1" alt="" /></div>
                            <div className='starts-from-text'>
                                <p>Honeymoon</p>
                                <p className='starts-from-description'>Maldives | Seychelles | Andaman | Mauritius | New Zealand | Bali</p>
                            </div>
                        </div>
                        <div className='starts-from-price'>
                            ₹11,028/-
                        </div>
                    </div>
                    <div className='starts-from-card'>
                        <div className='starts-from-content'>
                            <div className='starts-from-image'><img src="https://picsum.photos/500/600?random=1" alt="" /></div>
                            <div className='starts-from-text'>
                                <p>Honeymoon</p>
                                <p className='starts-from-description'>Maldives | Seychelles | Andaman | Mauritius |  New Zealand | Bali</p>
                            </div>
                        </div>
                        <div className='starts-from-price'>
                            ₹11,028/-
                        </div>
                    </div>
                    <div className='starts-from-card'>
                        <div className='starts-from-content'>
                            <div className='starts-from-image'><img src="https://picsum.photos/500/600?random=1" alt="" /></div>
                            <div className='starts-from-text'>
                                <p>Honeymoon</p>
                                <p className='starts-from-description'>Maldives | Seychelles | Andaman | Mauritius | New Zealand | Bali</p>
                            </div>
                        </div>
                        <div className='starts-from-price'>
                            ₹11,028/-
                        </div>
                    </div>
                    <div className='starts-from-card'>
                        <div className='starts-from-content'>
                            <div className='starts-from-image'><img src="https://picsum.photos/500/600?random=1" alt="" /></div>
                            <div className='starts-from-text'>
                                <p>Honeymoon</p>
                                <p className='starts-from-description'>Maldives | Seychelles | Andaman | Mauritius | New Zealand | Bali</p>
                            </div>
                        </div>
                        <div className='starts-from-price'>
                            ₹11,028/-
                        </div>
                    </div>
                    <div className='starts-from-card'>
                        <div className='starts-from-content'>
                            <div className='starts-from-image'><img src="https://picsum.photos/500/600?random=1" alt="" /></div>
                            <div className='starts-from-text'>
                                <p>Honeymoon</p>
                                <p className='starts-from-description'>Maldives | Seychelles | Andaman | Mauritius | New Zealand | Bali</p>
                            </div>
                        </div>
                        <div className='starts-from-price'>
                            ₹11,028/-
                        </div>
                    </div>
                    <div className='starts-from-card'>
                        <div className='starts-from-content'>
                            <div className='starts-from-image'><img src="https://picsum.photos/500/600?random=1" alt="" /></div>
                            <div className='starts-from-text'>
                                <p>Honeymoon</p>
                                <p className='starts-from-description'>Maldives | Seychelles | Andaman | Mauritius | New Zealand | Bali</p>
                            </div>
                        </div>
                        <div className='starts-from-price'>
                            ₹11,028/-
                        </div>
                    </div>
                    {/* all the starts from cards are here  */}

                </div>
                <div className='popular-destinations-images'>
                    <div className='grp-1'>
                        <div className='grp-1-img-1'>
                            <div className='image-text'>
                                <p className='image-text-1'>Dubai</p>
                                <p className='image-text-2'>Starting @<strong>₹19,427</strong></p>
                            </div>
                            <img src="https://picsum.photos/500/600?random=1" alt="" />
                        </div>
                        <div className='grp-1-img-2'>
                            <div className='image-text'>
                                <p className='image-text-1'>Dubai</p>
                                <p className='image-text-2'>Starting @<strong>₹19,427</strong></p>
                            </div>
                            <img src="https://picsum.photos/500/600?random=2" alt="" />
                        </div>
                    </div>
                    <div className='grp-2'>
                        <div className='grp-2-img-1'>
                            <div className='image-text'>
                                <p className='image-text-1'>Dubai</p>
                                <p className='image-text-2'>Starting @<strong>₹19,427</strong></p>
                            </div>
                            <img src="https://picsum.photos/500/600?random=3" alt="" />
                        </div>
                        <div className='grp-2-img-2'>
                            <div className='image-text'>
                                <p className='image-text-1'>Dubai</p>
                                <p className='image-text-2'>Starting @<strong>₹19,427</strong></p>
                            </div>
                            <img src="https://picsum.photos/500/600?random=4" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopularDestinations