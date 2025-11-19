import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination, A11y } from "swiper/modules";

export default function Testimonial() {
  const testimonials = [
    {
      id: 1,
      text: "This app completely changed how I manage my daily caffeine intake. I never realized how much coffee I was actually drinking until I started tracking it here!",
      author: "Sarah Johnson",
      role: "Event Manager",
      company: "Tech Conference 2024"
    },
    {
      id: 2,
      text: "I love the simplicity. Adding my drinks takes seconds, and the insights help me make healthier choices without feeling restricted.",
      author: "Michael Chen",
      role: "Marketing Director",
      company: "Music Festival Pro"
    },
    {
      id: 3,
      text: "The analytics are amazing! Seeing my weekly coffee patterns helped me cut back and sleep better. Highly recommended.",
      author: "Emily Rodriguez",
      role: "Founder",
      company: "Startup Summit"
    },
    {
      id: 4,
      text: "As a coffee enthusiast, this app is perfect. It keeps track of my brews, roast preferences, and even my caffeine peaks. Super useful.",
      author: "Ijach Babanla",
      role: "Production Head",
      company: "Worosiworo Ltd"
    },
    {
      id: 5,
      text: "Very intuitive and well-designed. I’ve tried other tracking apps, but this is the only one I actually stuck with.",
      author: "Adenike Adekoya",
      role: "CTO",
      company: "Iyana paja Ltd"
    },
    {
      id: 5,
      text: "The reminder feature is a game-changer! It helped me balance my cups throughout the day instead of overloading my mornings.",
      author: "Baba Baji",
      role: "Production Head",
      company: "Coupon LTD"
    }
  ];

  return (
    <div className="testimonial-container">
      <div className="testimonial-content-wrapper">
        <h1 className="text-gradient">Real People, Real Reviews</h1>
        <i className="fa-solid fa-quote-left"></i>
        
        <div className="testimonial-slider">
          <Swiper
            modules={[Autoplay, Pagination, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ 
              clickable: true,
              dynamicBullets: true 
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            a11y={{
              prevSlideMessage: 'Previous testimonial',
              nextSlideMessage: 'Next testimonial',
            }}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="testimonial-slide">
                  <div className="profile-image-container">
                    <img 
                      className="profile-bg" 
                      src="./profile-bg.png" 
                      alt="Profile" 
                    />
                  </div>
                  <div className="testimonial-text-content">
                    <p className="testimonial-text">"{testimonial.text}"</p>
                    <div className="testimonial-author">
                      <h4>{testimonial.author}</h4>
                      <p>{testimonial.role}</p>
                      <span>{testimonial.company}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}



































// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";

// import { Autoplay, Pagination, Scrollbar, A11y } from "swiper/modules";

// export default function Testimonial() {
//   return (
//     <div className="testimonial-container">
//       <h1 className="text-gradient">Real People, Real Reviews</h1>
//       <i className="fa-solid fa-quote-left"></i>
//     </div>
//   );
// }





//  <div>
//         <div className="testimonial-contianer">
//           <h1 className="text-gradient">
//             Real People, Real real reviews
//           </h1>
//           <i class="fa-solid fa-quote-left"></i>
//           <div className="testimonia">
//             <div className="slider">
              
//             </div>
//             <img className="profile-bg" src="./profile-bg.png" alt="" />
//             <p>
//               "Working with Tix has been really great because ticketing and check-ins have become the easiest parts of our event."
//             </p>
//             <p>
//               "Working with Tix has been really great because ticketing and check-ins have become the easiest parts of our event."
//             </p>
//             <p>
//               "Working with Tix has been really great because ticketing and check-ins have become the easiest parts of our event."
//             </p>
//           </div>
//         </div>
//       </div>