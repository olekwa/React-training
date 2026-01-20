import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

export default function OurTeam(){
    const teamSlideImg = [
        {
            id: 1,
            imgSrc: "./image/team-slider1.png",
            aitText:"Team1",
            name: "Maxence Homont",
            jd: "Translator - French"
        },
        {
            id: 2,
            imgSrc: "./image/team-slider2.png",
            aitText:"Team2",
            name: "Tommy L.",
            jd: "Content Writer - English (UK)"
        },
        {
            id: 3,
            imgSrc: "./image/team-slider3.png",
            aitText:"Team3",
            name: "Eduardo Marksimov ",
            jd: "Translator - German/Russian"
        },
        {
            id: 4,
            imgSrc: "./image/team-slider4.png",
            aitText:"Team4",
            name: "Lars Hartog",
            jd: "Content Writer - German"
        },
        {
            id: 5,
            imgSrc: "./image/team-slider5.png",
            aitText:"Team5",
            name: "Szymon Nowakowski",
            jd: "Translator - Polish"
        },
        {
            id: 6,
            imgSrc: "./image/team-slider6.png",
            aitText:"Team6",
            name: "Philippe Morel",
            jd: "Proofreader & translator - French"
        },
        {
            id: 7,
            imgSrc: "./image/team-slider7.png",
            aitText:"Team7",
            name: "Raimund Leu",
            jd: "Content Writer - German"
        }
    ]

    return(
        <>
            <div id="our-team" className="team-section">
                <div className="team-text">
                    <h1>Management Team</h1>
                    <p>
                        Our team is a group of dedicated content professionals with diverse expertise, committed to <br />delivering high-quality results. We work seamlessly together to meet your specific needs, ensuring <br /> every project is handled with care and precision.
                    </p>
                </div>
                <div className="team-img">
                    <div className="img-wrap">
                        <img src="./image/team-img1.png" alt="Team1" />
                    </div>
                
                    <div className="team-name">
                        <h3 >
                            Marco Steiner
                        </h3>
                        <p>General Manager</p>
                    </div>

                    
                    <div className="img-wrap">
                        <img src="./image/team-img2.jpeg" alt="Team2" />
                    </div>

                    <div className="team-name name2">
                        <h3 >
                            Georgiana Nicula
                        </h3>
                        <p>
                            Operations Specialist
                        </p>
                    </div>
                    <div className="img-wrap">
                        <img src="./image/team-img3.jpeg" alt="Team3" /> 
                    </div>
                    <div className="team-name name3">
                        <h3 >
                            Ion Creanga
                        </h3>
                        <p>
                            Head of Strategy
                        </p>
                    </div>
                </div>
                <div className="team-carousel">
                    <div className="team-carousel-card1">
                        <h1>Our content experts</h1>
                        <p>The Allcaps team is composed of over 45 experts, bringing together a diverse range of skills to deliver exceptional content. Our content managers ensure every project runs smoothly, while our editors and proofreaders focus on perfecting each piece for clarity and precision. 
                        <br />
                        <br />
                        With talented writers producing engaging, industry‒specific content and experienced SEO managers optimizing it for top search engine performance, we provide a comprehensive solution for all your content needs. Together, we create a seamless process, from strategy to delivery.</p>
                    </div>

                    <div className="team-slider-card">
                        <div className="team-slider-container">
                            <Swiper
                                modules={[Pagination, Autoplay]}
                                pagination={{ clickable: true }}
                                autoplay={{ delay: 5000 }}
                                breakpoints={{
                                    640: { slidesPerView: 1 },
                                    768: { slidesPerView: 2 },
                                    1024: { slidesPerView: 3 }
                                }}
                            >
                                {teamSlideImg.map((slideImg) => (
                                    <SwiperSlide key={slideImg.id} className="team-slider-img">
                                        <img src={slideImg.imgSrc} alt={slideImg.aitText} />
                                        <div className="team-slider-name">
                                            <h3>{slideImg.name}</h3>
                                            <p>{slideImg.jd}</p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            
                            </Swiper>
                        </div>
                    </div>
                </div>
           </div>
        </>
    )
}