import React from 'react'
import Contact from './Contact'

const About = () => {
  return (
    <div className="about-container">
            {/* Header Section */}
            <section className="about-header">
                <h1>About Our Company</h1>
                <p>We are dedicated to providing the best products and services for our customers.</p>
            </section>

            {/* Company Overview Section */}
            <section className="about-section">
                <h2>Company Overview</h2>
                <p>
                    Founded in 2010, we have consistently aimed to deliver high-quality goods and
                    exceptional customer experiences. Our commitment to innovation and integrity has
                    helped us grow into a leader in our industry.
                </p>
            </section>

            {/* Mission Section */}
            <section className="about-section">
                <h2>Our Mission</h2>
                <p>
                    Our mission is to improve lives by providing top-quality products that meet the
                    needs of our customers. We strive to bring value through continuous innovation
                    and exceptional service.
                </p>
            </section>

            {/* Vision Section */}
            <section className="about-section">
                <h2>Our Vision</h2>
                <p>
                    We envision a world where our products make life easier and more enjoyable for
                    everyone. Our goal is to be a global leader in delivering customer-centric
                    solutions that meet the demands of tomorrow.
                </p>
            </section>

            {/* History Section */}
            <section className="about-section">
                <h2>Our History</h2>
                <p>
                    From our humble beginnings as a small startup, we have grown into a company
                    serving thousands of customers worldwide. Our journey has been one of constant
                    innovation, always striving to meet the changing needs of the market.
                </p>
                <ul>
                    <li><strong>2010:</strong> Founded as a small e-commerce startup.</li>
                    <li><strong>2012:</strong> Expanded to international markets.</li>
                    <li><strong>2015:</strong> Launched our first mobile app.</li>
                    <li><strong>2020:</strong> Reached 1 million customers globally.</li>
                </ul>
            </section>

            {/* Team Section */}
            {/* <section className="about-section">
                <h2>Meet Our Team</h2>
                <p>
                    Our dedicated team is composed of industry professionals with a passion for
                    delivering excellence.
                </p>
                <div className="team">
                    <div className="team-member">
                        <img src="https://via.placeholder.com/150" alt="Team Member" />
                        <h3>John Doe</h3>
                        <p>CEO & Founder</p>
                    </div>
                    <div className="team-member">
                        <img src="https://via.placeholder.com/150" alt="Team Member" />
                        <h3>Jane Smith</h3>
                        <p>Chief Marketing Officer</p>
                    </div>
                    <div className="team-member">
                        <img src="https://via.placeholder.com/150" alt="Team Member" />
                        <h3>Mark Johnson</h3>
                        <p>Chief Technology Officer</p>
                    </div>
                </div>
            </section> */}

            {/* Contact Section */}
            {/* <section className="about-section">
                <h2>Contact Us</h2>
                <p>
                    Have any questions or feedback? Feel free to reach out to us at <strong>contact@company.com</strong> or
                    call us at <strong>(123) 456-7890</strong>.
                </p>
            </section> */}
            <Contact/>
        </div>
    
  )
}

export default About