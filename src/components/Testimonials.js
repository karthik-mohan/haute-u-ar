// Testimonials.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
//import './Testimonials.css'; // Create your own CSS file for styling
import './Testimonial.css';

const img_src = process.env.PUBLIC_URL + '/testimonial'
const testimonialsData = [
    {
        content: "It's exiting to devlope a virtual try on app and contribute to fashion industry and Reducing returns also means reducing the carbon footprint associated with logistics and packaging, aligning with our commitment to sustainability.",
        name: 'Sulo',
        title: 'CTO',
        company: 'Haute-U AR',
    },
    {
        content: "The interactive and engaging nature of virtual try-on enhances the shopping experience, increasing customer satisfaction, and fostering loyalty. Customers can experiment with different styles, leading to confident purchase decisions and a deeper connection with our brand.",
        name: 'Kabir',
        title: 'CMO',
        company: 'Haute-U AR',
    },
    {
        content: "I am exicited on this concept and trying their MVP for the it provides a seemless experience how I look in differnt tress without stepping out.",
        name: 'Dr Asif',
        title: 'CEO',
        company: 'Abili Tech',
    },
    {
        content: "It's freeing to be able to catch up on customized news and not be distracted by a social media element on the same site.",
        name: 'Shirley Fultz',
        title: 'Designer',
        company: 'ABC Design Studio',
    },
    // Add more testimonials here
];

const Testimonials = () => {
    return (
        <div id="testimonials" className="testimonials-container" style={{alignContent: "center"}}>
            <h1 style={{textAlign: "center"}}> Testimonials </h1>
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                
                interval={6000} // Adjust the interval as needed
            >
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className="testimonial-box" style={{textAlign: "center", alignContent: "center"}}>
                        <p className="testimonial-content">"{testimonial.content}"</p>
                        <div className="testimonial-info">
                             
                            <img src={`${img_src}/${testimonial.name.toLowerCase()}.png`} alt={testimonial.name} />
                            <div className="person-details">
                                <h3>{testimonial.name}</h3>
                                <p>{testimonial.title} at {testimonial.company}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Testimonials;
