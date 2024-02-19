// Testimonials.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
//import './Testimonials.css'; // Create your own CSS file for styling
import './Testimonial.css';

const testimonialsData = [
    {
        content: "It's freeing to be able to catch up on customized news and not be distracted by a social media element on the same site.",
        name: 'Shirley Fultz',
        title: 'Designer',
        company: 'ABC Design Studio',
    },
    {
        content: "It's freeing to be able to catch up on customized news and not be distracted by a social media element on the same site.",
        name: 'Shirley Fultz',
        title: 'Designer',
        company: 'ABC Design Studio',
    },
    {
        content: "It's freeing to be able to catch up on customized news and not be distracted by a social media element on the same site.",
        name: 'Shirley Fultz',
        title: 'Designer',
        company: 'ABC Design Studio',
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
                            <img src={`/images/${testimonial.name.toLowerCase()}.png`} alt={testimonial.name} />
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
