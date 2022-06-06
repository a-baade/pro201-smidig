import React, { useEffect, useState } from 'react'

export function CarouselCard(){
    return(
        <div className={"carousel-card"}>
            <div className={"card-header"}></div>
            <img src="https://dummyimage.com/300.png/09f/fff" alt="placeholder" className={"pfp-placeholder"}/>
            <p className={"carousel-card-text"}>Thank you for your generous gift to us! We are thrilled to have your support.
            <br/> <br/>You truly make the difference for us, and we are extremely grateful.</p>
            <div className={"cc-btn-wrap"}>
                <button className={"cc-btn"}>info</button>
                <button className={"cc-btn"}>cancel</button>
            </div>
        </div>
    );
}

const Carousel = (props) => {
    const {children, show} = props

    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length)

    useEffect(() => {
        setLength(children.length)
    }, [children])

    const next = () => {
        if (currentIndex < (length - show)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                {
                    currentIndex > 0 &&
                    <button onClick={prev} className="left-arrow">
                        &lt;
                    </button>
                }
                <div className="carousel-content-wrapper">
                    <div
                        className={`carousel-content show-${show}`}
                        style={{ transform: `translateX(-${currentIndex * (100 / show)}%)` }}
                    >
                        {children}
                    </div>
                </div>

                {
                    currentIndex < (length - show) &&
                    <button onClick={next} className="right-arrow">
                        &gt;
                    </button>
                }
            </div>
        </div>
    )
}

export default Carousel