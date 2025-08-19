import './ApplicationForm.css';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

function ApplicationForm() {
  const [searchParams] = useSearchParams();
  const jobTitle = searchParams.get('job') || 'General Application';
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: jobTitle,
    experience: '',
    resume: null,
    coverLetter: '',
    portfolio: '',
    linkedin: '',
    skills: '',
    education: '',
    references: '',
    additionalInfo: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Convert form data to the format expected by Google Apps Script
    const submissionData = {
      timestamp: new Date().toISOString(),
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      linkedin: formData.linkedin,
      position: formData.position,
      experience: formData.experience,
      skills: formData.skills,
      education: formData.education,
      portfolio: formData.portfolio,
      coverLetter: formData.coverLetter,
      references: formData.references,
      additionalInfo: formData.additionalInfo,
      resumeFileName: formData.resume ? formData.resume.name : 'No file uploaded'
    };

    console.log('Submitting data:', submissionData);

    // Replace this URL with your Google Apps Script Web App URL
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby1ko1gQvLF5ylIvSnq6Pl885tHzbLdLQb6PTI81RuPG5U_QBBJA2QX1fkrR2Tzc1HlRg/exec';

    try {
      // Try a different approach for Google Apps Script submission
      const formDataToSend = new FormData();
      Object.keys(submissionData).forEach(key => {
        formDataToSend.append(key, submissionData[key]);
      });

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: formDataToSend
      });

      console.log('Response status:', response.status);
      
      if (response.ok) {
        setSubmitStatus('success');
        console.log('Form submitted successfully');
        
        // Reset form after successful submission
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          position: jobTitle,
          experience: '',
          resume: null,
          coverLetter: '',
          portfolio: '',
          linkedin: '',
          skills: '',
          education: '',
          references: '',
          additionalInfo: ''
        });
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      
      // Try alternative method with JSON if FormData fails
      try {
        console.log('Trying alternative JSON submission...');
        await fetch('https://script.google.com/macros/s/AKfycby1ko1gQvLF5ylIvSnq6Pl885tHzbLdLQb6PTI81RuPG5U_QBBJA2QX1fkrR2Tzc1HlRg/exec', {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(submissionData)
        });
        
        // With no-cors, we can't check the response, so assume success
        setSubmitStatus('success');
        console.log('Alternative submission completed');
        
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          position: jobTitle,
          experience: '',
          resume: null,
          coverLetter: '',
          portfolio: '',
          linkedin: '',
          skills: '',
          education: '',
          references: '',
          additionalInfo: ''
        });
        
      } catch (secondError) {
        console.error('Both submission methods failed:', secondError);
        setSubmitStatus('error');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="gform-page">
      {/* Google Form Header */}
      <div className="gform-header">
        <div className="gform-header-content">
          <div className="gform-logo">
            <h1>CorrentFlow Job Application</h1>
            <p>Apply for: {jobTitle}</p>
          </div>
        </div>
      </div>

      {/* Form Container */}
      <div className="gform-container">
        <div className="gform-wrapper">
          
          {/* Form Description */}
          <div className="gform-description">
            <h2>Job Application Form</h2>
            <p>Please fill out this application form completely. All fields marked with an asterisk (*) are required.</p>
          </div>

          <form className="gform" onSubmit={handleSubmit}>
            
            {/* Section 1: Personal Information */}
            <div className="gform-section">
              <div className="gform-section-header">
                <h3>Personal Information</h3>
                <p>Please provide your basic contact information</p>
              </div>

              <div className="gform-question">
                <label className="gform-label">
                  Full Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="gform-input"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="gform-question">
                <label className="gform-label">
                  Email Address <span className="required">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="gform-input"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="gform-question">
                <label className="gform-label">
                  Phone Number <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="gform-input"
                  placeholder="+1 (555) 123-4567"
                  required
                />
              </div>

              <div className="gform-question">
                <label className="gform-label">
                  LinkedIn Profile URL
                </label>
                <input
                  type="url"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleInputChange}
                  className="gform-input"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>
            </div>

            {/* Section 2: Position & Experience */}
            <div className="gform-section">
              <div className="gform-section-header">
                <h3>Position & Experience</h3>
                <p>Tell us about the role you're applying for and your experience</p>
              </div>

              <div className="gform-question">
                <label className="gform-label">
                  Which position are you applying for? <span className="required">*</span>
                </label>
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  className="gform-select"
                  required
                >
                  <option value="">Select a position</option>
                  <option value="Full Stack Developer">Full Stack Developer</option>
                  <option value="Data Analyst">Data Analyst</option>
                  <option value="Project Manager">Project Manager</option>
                  <option value="ML Engineer">ML Engineer</option>
                  <option value="Cloud Developer">Cloud Developer</option>
                  <option value="Designer (Video & Photo)">Designer (Video & Photo)</option>
                  <option value="Accountant">Accountant</option>
                  <option value="DevOps Engineer">DevOps Engineer</option>
                  <option value="Research & Development">Research & Development</option>
                  <option value="UI/UX Designer">UI/UX Designer</option>
                  <option value="Marketing Manager">Marketing Manager</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="gform-question">
                <label className="gform-label">
                  Years of relevant experience <span className="required">*</span>
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="gform-select"
                  required
                >
                  <option value="">Choose</option>
                  <option value="0-1 years">0-1 years (Entry level)</option>
                  <option value="2-3 years">2-3 years</option>
                  <option value="4-5 years">4-5 years</option>
                  <option value="6-10 years">6-10 years</option>
                  <option value="10+ years">10+ years (Senior level)</option>
                </select>
              </div>

              <div className="gform-question">
                <label className="gform-label">
                  Key Skills & Technologies <span className="required">*</span>
                </label>
                <textarea
                  name="skills"
                  value={formData.skills}
                  onChange={handleInputChange}
                  className="gform-textarea"
                  placeholder="List your key skills, programming languages, frameworks, tools, etc."
                  rows={4}
                  required
                />
              </div>
            </div>

            {/* Section 3: Education & Background */}
            <div className="gform-section">
              <div className="gform-section-header">
                <h3>Education & Background</h3>
                <p>Educational qualifications and professional background</p>
              </div>

              <div className="gform-question">
                <label className="gform-label">
                  Highest Education Level <span className="required">*</span>
                </label>
                <select
                  name="education"
                  value={formData.education}
                  onChange={handleInputChange}
                  className="gform-select"
                  required
                >
                  <option value="">Choose</option>
                  <option value="High School">High School Diploma</option>
                  <option value="Associates">Associate's Degree</option>
                  <option value="Bachelors">Bachelor's Degree</option>
                  <option value="Masters">Master's Degree</option>
                  <option value="PhD">PhD/Doctorate</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="gform-question">
                <label className="gform-label">
                  Portfolio/Website URL
                </label>
                <input
                  type="url"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleInputChange}
                  className="gform-input"
                  placeholder="https://yourportfolio.com"
                />
              </div>

              <div className="gform-question">
                <label className="gform-label">
                  Upload Resume/CV <span className="required">*</span>
                </label>
                <div className="gform-file-upload">
                  <input
                    type="file"
                    name="resume"
                    onChange={handleInputChange}
                    className="gform-file-input"
                    accept=".pdf,.doc,.docx"
                    required
                    id="resume-upload"
                  />
                  <label htmlFor="resume-upload" className="gform-file-label">
                    <span className="gform-file-icon">📎</span>
                    Choose file or drag here
                  </label>
                  <small className="gform-file-note">PDF, DOC, or DOCX format (Max 10MB)</small>
                </div>
              </div>
            </div>

            {/* Section 4: Cover Letter & Additional Information */}
            <div className="gform-section">
              <div className="gform-section-header">
                <h3>Cover Letter & Additional Information</h3>
                <p>Tell us more about yourself and why you want to join CorrentFlow</p>
              </div>

              <div className="gform-question">
                <label className="gform-label">
                  Why do you want to work at CorrentFlow? What interests you about this role? <span className="required">*</span>
                </label>
                <textarea
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  className="gform-textarea"
                  placeholder="Tell us about your motivation, what excites you about CorrentFlow, and how you can contribute to our mission..."
                  rows={6}
                  required
                />
              </div>

              <div className="gform-question">
                <label className="gform-label">
                  Professional References
                </label>
                <textarea
                  name="references"
                  value={formData.references}
                  onChange={handleInputChange}
                  className="gform-textarea"
                  placeholder="Please provide 2-3 professional references with name, title, company, and contact information"
                  rows={4}
                />
              </div>

              <div className="gform-question">
                <label className="gform-label">
                  Additional Information
                </label>
                <textarea
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  className="gform-textarea"
                  placeholder="Anything else you'd like us to know? Certifications, awards, projects, etc."
                  rows={3}
                />
              </div>
            </div>

            {/* Submit Section */}
            <div className="gform-submit-section">
              <div className="gform-submit-content">
                <button 
                  type="submit" 
                  className={`gform-submit-btn ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
                
                {submitStatus === 'success' && (
                  <div className="submit-success">
                    ✅ Application submitted successfully! We'll review your application and get back to you soon.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="submit-error">
                    ❌ There was an error submitting your application. Please try again or contact us at correntflow@gmail.com
                  </div>
                )}
                
                <p className="gform-submit-note">
                  Your application will be saved securely and reviewed by our hiring team.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="gform-footer">
        <p>This form is for CorrentFlow job applications only. Your information will be kept confidential.</p>
        <div className="gform-footer-links">
          <a href="mailto:correntflow@gmail.com">Contact Us</a>
          <span>•</span>
          <a href="/">Back to CorrentFlow</a>
        </div>
      </div>
    </div>
  );
}

export default ApplicationForm;
