


export default function Slider(){
    const sliderImg = [
        {
            id: 1,
            imgScr: "./image/sliderimg1.jpeg" ,
            altText: "SlideImg"
        },
        {
            id: 2,
            imgScr: "./image/sliderimg2.jpeg" ,
            altText: "SlideImg"
        },
        {
            id: 3,
            imgScr: "./image/sliderimg3.jpeg" ,
            altText: "SlideImg"
        },
        {
            id: 4,
            imgScr: "./image/sliderimg4.jpeg" ,
            altText: "SlideImg"
        }
    ] 
    
    return(
        <>
            <div className="slider-wrapper">
                <div className="slider-container">
                    {sliderImg.map((image) => (
                    <div key={image.id} className="slideimg">
                            <img src={image.imgScr} 
                            alt={image.altText} />
                        </div>
                    ))} 

                    {sliderImg.map((image) => (
                        <div key={`dup-${image.id}`} className="slideimg">
                            <img src={image.imgScr} alt={image.altText} />
                        </div>
                    ))}  
                </div>
            </div>
            <hr />
        </>
    )
}