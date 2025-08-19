import './App.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h2>CorrentFlow</h2>
          </div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <Link to="/docs">Docs</Link>
            <a href="#about">About</a>
            <Link to="/careers">Careers</Link>
            <a href="#contact" className="nav-cta">Join Waitlist</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Automate Data, 
              <span className="gradient-text"> Accelerate Decisions</span>
            </h1>
            <p className="hero-subtitle">
              A next-gen platform for workflow automation, ML insights, and data orchestration.
            </p>
            <p className="hero-tagline">Where Data Finds Its Flow.</p>
            <button className="cta-button">Join the Waitlist</button>
          </div>
        </div>
      </section>

      {/* Leadership Message Section - JP Morgan Style */}
      <section className="leadership-section">
        <div className="container">
          <div className="leadership-content">
            <div className="leadership-text">
              <h2>A Message from Our Leadership</h2>
              <p className="leadership-quote">
                "We're not just building another automation tool. We're creating the foundation for intelligent operations that will transform how enterprises handle data and make decisions."
              </p>
              <p className="leadership-signature">— CorrentFlow Leadership Team</p>
              <a href="#vision" className="text-link">Read our vision →</a>
            </div>
            <div className="leadership-visual">
              <div className="stat-card">
                <div className="stat-number">10x</div>
                <div className="stat-label">Faster Processing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why CorrentFlow Section */}
      <section className="why-section">
        <div className="container">
          <h2>Why CorrentFlow?</h2>
          <p className="section-subtitle">Built for enterprise success with the reliability, speed, and integration capabilities modern businesses demand.</p>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>Reliable, scalable, enterprise-friendly</h3>
              <p>Built with enterprise-grade security, compliance, and scalability from day one to handle your most critical workflows.</p>
              <a href="#learn-more" className="card-link">Learn more →</a>
            </div>
            <div className="benefit-card">
              <h3>Faster than traditional RPA tools</h3>
              <p>Modern architecture and intelligent automation deliver results faster than legacy robotic process automation solutions.</p>
              <a href="#performance" className="card-link">See performance →</a>
            </div>
            <div className="benefit-card">
              <h3>Easy to integrate</h3>
              <p>Seamless integration with your existing tech stack through pre-built connectors and flexible APIs.</p>
              <a href="#integrations" className="card-link">View integrations →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section id="features" className="features-section">
        <div className="container">
          <h2>Features</h2>
          <p className="section-subtitle">Powerful tools designed to streamline your data workflows and accelerate business intelligence.</p>
          <div className="features-grid">
            <div className="feature-card">
              <h3>CorrentFlow Studio</h3>
              <p>Drag & drop workflow builder that makes complex data pipelines simple to create and manage.</p>
            </div>
            <div className="feature-card">
              <h3>CorrentFlow Core</h3>
              <p>ML + insights engine that transforms raw data into actionable business intelligence automatically.</p>
            </div>
            <div className="feature-card">
              <h3>CorrentFlow Sync</h3>
              <p>Cross-platform integrations that connect your entire technology ecosystem seamlessly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories Section - Carousel */}
      <section className="impact-section">
        <div className="container">
          <div className="impact-header">
            <h2>See Impact in Action</h2>
            <p>Access stories about our platform's impact and insights from our research, development, and leadership teams.</p>
          </div>
          <div className="impact-carousel">
            <div className="carousel-container">
              <div className="carousel-track" style={{transform: `translateX(-${currentSlide * 100}%)`}}>
                <div className="impact-slide">
                  <div className="slide-image">
                    <div className="placeholder-image finance-bg">
                      <span className="image-label">Financial Services</span>
                    </div>
                  </div>
                  <div className="slide-content">
                    <h3>Fortune 500 Finance Transformation</h3>
                    <p>How a leading financial institution reduced reporting time by 90% using CorrentFlow Flow.</p>
                    <div className="impact-stats">
                      <div className="stat-item">
                        <span className="stat-number">90%</span>
                        <span className="stat-label">Faster Reporting</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-number">$2.5M</span>
                        <span className="stat-label">Annual Savings</span>
                      </div>
                    </div>
                    <a href="#case-study-1" className="story-link">Read the full story →</a>
                  </div>
                </div>
                <div className="impact-slide">
                  <div className="slide-image">
                    <div className="placeholder-image healthcare-bg">
                      <span className="image-label">Healthcare</span>
                    </div>
                  </div>
                  <div className="slide-content">
                    <h3>Healthcare Data Pipeline Revolution</h3>
                    <p>Real-time patient data processing enabling faster, more accurate medical decisions.</p>
                    <div className="impact-stats">
                      <div className="stat-item">
                        <span className="stat-number">50%</span>
                        <span className="stat-label">Faster Processing</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-number">99.9%</span>
                        <span className="stat-label">Accuracy Rate</span>
                      </div>
                    </div>
                    <a href="#case-study-2" className="story-link">Explore the implementation →</a>
                  </div>
                </div>
                <div className="impact-slide">
                  <div className="slide-image">
                    <div className="placeholder-image manufacturing-bg">
                      <span className="image-label">Manufacturing</span>
                    </div>
                  </div>
                  <div className="slide-content">
                    <h3>Smart Manufacturing Excellence</h3>
                    <p>IoT-driven predictive maintenance and quality control optimization across global operations.</p>
                    <div className="impact-stats">
                      <div className="stat-item">
                        <span className="stat-number">35%</span>
                        <span className="stat-label">Cost Reduction</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-number">24/7</span>
                        <span className="stat-label">Monitoring</span>
                      </div>
                    </div>
                    <a href="#case-study-3" className="story-link">View the results →</a>
                  </div>
                </div>
              </div>
              <div className="carousel-controls">
                <button className="carousel-btn prev-btn" onClick={prevSlide}>‹</button>
                <div className="carousel-dots">
                  {[0, 1, 2].map((index) => (
                    <span 
                      key={index}
                      className={`dot ${currentSlide === index ? 'active' : ''}`}
                      onClick={() => goToSlide(index)}
                    ></span>
                  ))}
                </div>
                <button className="carousel-btn next-btn" onClick={nextSlide}>›</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="news-section">
        <div className="container">
          <div className="news-header">
            <h2>In the News</h2>
            <a href="#all-news" className="view-all-link">View All →</a>
          </div>
          <div className="news-grid">
            <div className="news-item">
              <h3>CorrentFlow Launches Strategic Partnership with Leading Cloud Providers</h3>
              <p>New integrations with AWS, Azure, and Google Cloud make enterprise deployment easier than ever.</p>
              <a href="#news-1" className="news-link">Learn more →</a>
            </div>
            <div className="news-item">
              <h3>CorrentFlow Commits $5M to AI Research Initiative</h3>
              <p>Supporting next-generation machine learning research for enterprise automation.</p>
              <a href="#news-2" className="news-link">Read the announcement →</a>
            </div>
            <div className="news-item">
              <h3>Industry Recognition: Best Enterprise AI Platform 2025</h3>
              <p>CorrentFlow receives prestigious award for innovation in intelligent automation.</p>
              <a href="#news-3" className="news-link">See the recognition →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section">
        <div className="container">
          <div className="vision-content">
            <h2>Our Vision</h2>
            <p className="vision-text">
              "We're building not just another automation tool, but a new framework for intelligent operations."
            </p>
            <button className="cta-button-secondary">Learn More</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <h3>CorrentFlow</h3>
              <p>Where Data Finds Its Flow</p>
            </div>
            <div className="footer-links">
              <div className="footer-section">
                <h4>Product</h4>
                <a href="#features">Features</a>
                <a href="#use-cases">Use Cases</a>
                <a href="#pricing">Pricing</a>
              </div>
              <div className="footer-section">
                <h4>Company</h4>
                <a href="#about">About</a>
                <a href="#careers">Careers</a>
                <a href="#contact">Contact</a>
              </div>
              <div className="footer-section">
                <h4>Resources</h4>
                <a href="#docs">Documentation</a>
                <a href="#blog">Blog</a>
                <a href="#support">Support</a>
              </div>
            </div>
            <div className="footer-cta">
              <h4>Stay Updated</h4>
              <div className="newsletter-signup">
                <input type="email" placeholder="Enter your email" />
                <button className="cta-button-small">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 CorrentFlow. All rights reserved.</p>
            <div className="social-links">
              <a href="#linkedin">LinkedIn</a>
              <a href="#twitter">Twitter</a>
              <a href="#github">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
