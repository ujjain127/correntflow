import './Careers.css';

function Careers() {
  const jobOpenings = [
    {
      id: 1,
      title: "Full Stack Developer",
      description: "Build and maintain our web applications using modern frameworks and technologies.",
      requirements: [
        "Experience with React, Angular, and Electron",
        "Strong knowledge of JavaScript, TypeScript, HTML, CSS",
        "Backend development experience (Node.js, Python, or similar)",
        "Database design and management skills",
        "Version control with Git"
      ],
      responsibilities: [
        "Develop responsive web applications",
        "Build cross-platform desktop applications with Electron",
        "Collaborate with design and backend teams",
        "Write clean, maintainable code",
        "Participate in code reviews and testing"
      ]
    },
    {
      id: 2,
      title: "Data Analyst",
      description: "Transform raw data into actionable insights to drive business decisions.",
      requirements: [
        "Strong analytical and statistical skills",
        "Proficiency in SQL, Python, R, or similar",
        "Experience with data visualization tools (Tableau, Power BI)",
        "Knowledge of machine learning concepts",
        "Bachelor's degree in relevant field"
      ],
      responsibilities: [
        "Analyze large datasets to identify trends and patterns",
        "Create comprehensive reports and dashboards",
        "Collaborate with stakeholders to understand data needs",
        "Develop and maintain data pipelines",
        "Present findings to technical and non-technical audiences"
      ]
    },
    {
      id: 3,
      title: "Project Manager",
      description: "Lead cross-functional teams to deliver projects on time and within scope.",
      requirements: [
        "Strong experience with Agile and Scrum methodologies",
        "PMP, CSM, or equivalent certification preferred",
        "Excellent communication and leadership skills",
        "Experience with project management tools (Jira, Asana, etc.)",
        "3+ years of project management experience"
      ],
      responsibilities: [
        "Plan, execute, and deliver complex projects",
        "Facilitate Agile ceremonies and sprint planning",
        "Manage project timelines, budgets, and resources",
        "Coordinate between engineering, design, and business teams",
        "Identify and mitigate project risks"
      ]
    },
    {
      id: 4,
      title: "ML Engineer",
      description: "Design and implement machine learning models and systems at scale.",
      requirements: [
        "Strong background in machine learning and deep learning",
        "Proficiency in Python, TensorFlow, PyTorch, or similar",
        "Experience with cloud platforms (AWS, GCP, Azure)",
        "Knowledge of MLOps and model deployment",
        "Master's degree in Computer Science, ML, or related field"
      ],
      responsibilities: [
        "Develop and deploy machine learning models",
        "Design ML pipelines and infrastructure",
        "Optimize model performance and scalability",
        "Collaborate with data scientists and engineers",
        "Research and implement cutting-edge ML techniques"
      ]
    },
    {
      id: 5,
      title: "Cloud Developer",
      description: "Build and maintain scalable cloud infrastructure and applications.",
      requirements: [
        "Experience with AWS, Azure, or Google Cloud Platform",
        "Proficiency in containerization (Docker, Kubernetes)",
        "Infrastructure as Code (Terraform, CloudFormation)",
        "CI/CD pipeline development",
        "Security best practices for cloud environments"
      ],
      responsibilities: [
        "Design and implement cloud architectures",
        "Automate deployment and scaling processes",
        "Monitor and optimize cloud infrastructure",
        "Ensure security and compliance standards",
        "Collaborate with development teams on cloud solutions"
      ]
    },
    {
      id: 6,
      title: "Designer (Video & Photo)",
      description: "Create compelling visual content across digital and print media.",
      requirements: [
        "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, After Effects, Premiere)",
        "Strong portfolio demonstrating video and photo editing skills",
        "Understanding of brand guidelines and visual consistency",
        "Experience with motion graphics and animation",
        "Knowledge of current design trends and best practices"
      ],
      responsibilities: [
        "Create and edit promotional videos and marketing materials",
        "Design graphics for web, social media, and print",
        "Collaborate with marketing team on creative campaigns",
        "Maintain brand consistency across all visual content",
        "Stay updated with design trends and tools"
      ]
    },
    {
      id: 7,
      title: "Accountant",
      description: "Manage financial records, reporting, and compliance for the organization.",
      requirements: [
        "Bachelor's degree in Accounting, Finance, or related field",
        "CPA certification preferred",
        "Proficiency in accounting software (QuickBooks, SAP, etc.)",
        "Strong knowledge of GAAP and financial regulations",
        "3+ years of accounting experience"
      ],
      responsibilities: [
        "Prepare and maintain financial statements and reports",
        "Manage accounts payable and receivable",
        "Assist with budget planning and financial analysis",
        "Ensure compliance with tax regulations and reporting",
        "Support audit processes and documentation"
      ]
    }
  ];

  return (
    <div className="careers-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h2>CorrentFlow</h2>
          </div>
          <div className="nav-links">
            <a href="/">Home</a>
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <a href="#contact" className="nav-cta">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="careers-hero">
        <div className="container">
          <div className="careers-hero-content">
            <h1>Join Our Team</h1>
            <p className="careers-subtitle">
              Be part of the team that's revolutionizing how enterprises handle data and make decisions.
            </p>
            <p className="careers-tagline">Where Data Finds Its Flow.</p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="why-work-section">
        <div className="container">
          <h2>Why Work at CorrentFlow?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>Innovation First</h3>
              <p>Work on cutting-edge technology that's shaping the future of enterprise automation.</p>
            </div>
            <div className="benefit-card">
              <h3>Flexible Work</h3>
              <p>Remote-first culture with flexible hours and hybrid options for better work-life balance.</p>
            </div>
            <div className="benefit-card">
              <h3>Growth Opportunities</h3>
              <p>Continuous learning, mentorship programs, and clear career advancement paths.</p>
            </div>
            <div className="benefit-card">
              <h3>Competitive Benefits</h3>
              <p>Comprehensive health coverage, equity participation, and generous PTO policies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="job-openings-section">
        <div className="container">
          <h2>Current Openings</h2>
          <div className="jobs-grid">
            {jobOpenings.map((job) => (
              <div key={job.id} className="job-card">
                <div className="job-header">
                  <h3>{job.title}</h3>
                </div>
                <p className="job-description">{job.description}</p>
                
                <div className="job-details">
                  <div className="job-section">
                    <h4>Requirements</h4>
                    <ul>
                      {job.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="job-section">
                    <h4>Responsibilities</h4>
                    <ul>
                      {job.responsibilities.map((resp, index) => (
                        <li key={index}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <button className="apply-button">Apply Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="careers-contact">
        <div className="container">
          <h2>Don't See Your Role?</h2>
          <p>We're always looking for talented individuals to join our team. Send us your resume and let us know how you'd like to contribute to CorrentFlow's mission.</p>
          <a href="mailto:careers@correntflow.com" className="contact-button">Get in Touch</a>
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
                <h4>Company</h4>
                <a href="/">Home</a>
                <a href="/careers">Careers</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 CorrentFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Careers;
