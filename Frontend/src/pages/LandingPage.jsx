import Hero from "../components/Hero/Hero";
import '../styles/LandingPage.css';

const LandingPage = () => {
  return (
    < div className="landing-container">
      
       <div> <Hero /></div>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial">
            <p>The best tool for interview preparation! I felt confident and prepared.</p>
            <span>- John Doe</span>
          </div>
          <div className="testimonial">
            <p>The voice feedback helped me improve my speaking skills immensely.</p>
            <span>- Jane Smith</span>
          </div>
          <div className="testimonial">
            <p>A must-have for anyone preparing for technical and HR interviews.</p>
            <span>- Alex Johnson</span>
          </div>
        </div>
      </section>
    </div> 

  );
};

export default LandingPage;

// import '../styles/LandingPage.css';

// const LandingPage = () => {
//   return (
//     <div className="landing-container">
//       {/* Hero Section */}
//       <section className="hero">
//         <div className="hero-content">
//           <h1 className="headline">Ace Your Next Interview with AI!</h1>
//           <p className="tagline">
//             Real-time evaluation, voice feedback, and personalized scoring to help you succeed.
//           </p>
//           <div className="cta-buttons">
//             <button className="btn signup-btn">Sign Up</button>
//             <button className="btn get-started-btn">Get Started</button>
//           </div>
//         </div>
//         <div className="hero-graphic">
//           <img src="/path-to-graphic.svg" alt="AI Interview" />
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="testimonials">
//         <h2>What Our Users Say</h2>
//         <div className="testimonials-grid">
//           <div className="testimonial">
//             <p>The best tool for interview preparation! I felt confident and prepared.</p>
//             <span>- John Doe</span>
//           </div>
//           <div className="testimonial">
//             <p>The voice feedback helped me improve my speaking skills immensely.</p>
//             <span>- Jane Smith</span>
//           </div>
//           <div className="testimonial">
//             <p>A must-have for anyone preparing for technical and HR interviews.</p>
//             <span>- Alex Johnson</span>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default LandingPage;