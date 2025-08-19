import React, { useState, useEffect } from 'react';
import './Docs.css';
import { Link } from 'react-router-dom';

function Docs() {
  const [activeSection, setActiveSection] = useState('overview');

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.docs-section');
      const scrollPosition = window.scrollY + 150;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="docs-page">
      {/* Navigation - Same as other pages */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h2>CorrentFlow</h2>
          </div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/docs" className="active">Docs</Link>
            <Link to="/careers" className="nav-cta">Apply Now</Link>
          </div>
        </div>
      </nav>

      <div className="docs-container">
        {/* Sidebar Navigation */}
        <aside className="docs-sidebar">
          <div className="sidebar-content">
            <div className="sidebar-section">
              <h4>Getting Started</h4>
              <ul>
                <li className={activeSection === 'overview' ? 'active' : ''}>
                  <button onClick={() => scrollToSection('overview')}>Overview</button>
                </li>
                <li className={activeSection === 'installation' ? 'active' : ''}>
                  <button onClick={() => scrollToSection('installation')}>Installation</button>
                </li>
                <li className={activeSection === 'quick-start' ? 'active' : ''}>
                  <button onClick={() => scrollToSection('quick-start')}>Quick Start</button>
                </li>
              </ul>
            </div>
            
            <div className="sidebar-section">
              <h4>Core Concepts</h4>
              <ul>
                <li className={activeSection === 'architecture' ? 'active' : ''}>
                  <button onClick={() => scrollToSection('architecture')}>Architecture</button>
                </li>
                <li className={activeSection === 'data-flow' ? 'active' : ''}>
                  <button onClick={() => scrollToSection('data-flow')}>Data Flow</button>
                </li>
                <li className={activeSection === 'activities' ? 'active' : ''}>
                  <button onClick={() => scrollToSection('activities')}>Activities</button>
                </li>
              </ul>
            </div>
            
            <div className="sidebar-section">
              <h4>Activity Reference</h4>
              <ul>
                <li className={activeSection === 'data-activities' ? 'active' : ''}>
                  <button onClick={() => scrollToSection('data-activities')}>Data Activities</button>
                </li>
                <li className={activeSection === 'file-activities' ? 'active' : ''}>
                  <button onClick={() => scrollToSection('file-activities')}>File Activities</button>
                </li>
                <li className={activeSection === 'web-activities' ? 'active' : ''}>
                  <button onClick={() => scrollToSection('web-activities')}>Web Activities</button>
                </li>
                <li className={activeSection === 'email-activities' ? 'active' : ''}>
                  <button onClick={() => scrollToSection('email-activities')}>Email Activities</button>
                </li>
              </ul>
            </div>
            
            <div className="sidebar-section">
              <h4>Advanced</h4>
              <ul>
                <li className={activeSection === 'integrations' ? 'active' : ''}>
                  <button onClick={() => scrollToSection('integrations')}>Integrations</button>
                </li>
                <li className={activeSection === 'deployment' ? 'active' : ''}>
                  <button onClick={() => scrollToSection('deployment')}>Deployment</button>
                </li>
                <li className={activeSection === 'troubleshooting' ? 'active' : ''}>
                  <button onClick={() => scrollToSection('troubleshooting')}>Troubleshooting</button>
                </li>
              </ul>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="docs-main">
          <div className="docs-content">
            {/* Header */}
            <header className="docs-header">
              <h1>CorrentFlow Studio Documentation</h1>
              <p className="docs-subtitle">Comprehensive automation platform for data processing, workflow management, and intelligent task orchestration</p>
            </header>

            {/* Overview Section */}
            <section id="overview" className="docs-section">
              <h2>Overview</h2>
              
              <p>CorrentFlow Studio is a comprehensive automation platform designed to streamline data processing, workflow management, and intelligent task orchestration. Built with enterprise-grade reliability and intuitive design, it empowers teams to automate complex business processes with ease.</p>
              
              <h3>Key Capabilities</h3>
              <div className="capability-list">
                <div className="capability-item">
                  <h4>Visual Workflow Designer</h4>
                  <p>Drag-and-drop interface for building complex automation workflows without coding. Create sophisticated data pipelines and business process automations with our intuitive visual editor.</p>
                </div>
                
                <div className="capability-item">
                  <h4>Intelligent Data Processing</h4>
                  <p>Advanced data transformation, validation, and enrichment capabilities. Handle multiple data formats, perform complex calculations, and ensure data quality throughout your workflows.</p>
                </div>
                
                <div className="capability-item">
                  <h4>Enterprise Integrations</h4>
                  <p>Connect with 200+ enterprise systems including databases, cloud services, APIs, and business applications. Seamlessly integrate with your existing technology stack.</p>
                </div>
                
                <div className="capability-item">
                  <h4>Real-time Monitoring</h4>
                  <p>Comprehensive dashboard with real-time workflow monitoring, performance analytics, and intelligent alerting. Track execution status, performance metrics, and resource utilization.</p>
                </div>
              </div>

              <h3>Who Uses CorrentFlow</h3>
              <ul>
                <li><strong>Data Teams</strong> - Automate ETL processes, data validation, and reporting workflows</li>
                <li><strong>Business Analysts</strong> - Create automated reports and data-driven decision workflows</li>
                <li><strong>Operations Teams</strong> - Streamline repetitive tasks and process automation</li>
                <li><strong>IT Departments</strong> - Orchestrate system integrations and maintenance workflows</li>
                <li><strong>Finance Teams</strong> - Automate reconciliation, reporting, and compliance processes</li>
              </ul>
            </section>

            {/* Installation Section */}
            <section id="installation" className="docs-section">
              <h2>Installation</h2>
              
              <h3>System Requirements</h3>
              <div className="requirements-grid">
                <div className="requirement-category">
                  <h4>Minimum Requirements</h4>
                  <ul>
                    <li>4 GB RAM</li>
                    <li>2 CPU cores</li>
                    <li>20 GB storage</li>
                    <li>Windows 10/11, macOS 10.15+, or Linux</li>
                    <li>Internet connection for cloud features</li>
                  </ul>
                </div>
                
                <div className="requirement-category">
                  <h4>Recommended</h4>
                  <ul>
                    <li>16 GB RAM</li>
                    <li>8 CPU cores</li>
                    <li>100 GB SSD storage</li>
                    <li>Dedicated GPU for ML workloads</li>
                    <li>High-speed internet (100 Mbps+)</li>
                  </ul>
                </div>
                
                <div className="requirement-category">
                  <h4>Enterprise</h4>
                  <ul>
                    <li>32+ GB RAM</li>
                    <li>16+ CPU cores</li>
                    <li>500+ GB storage</li>
                    <li>Load balancer support</li>
                    <li>Database clustering</li>
                  </ul>
                </div>
              </div>

              <h3>Installation Steps</h3>
              <div className="installation-steps">
                <div className="step">
                  <h4>1. Download CorrentFlow Studio</h4>
                  <p>Download the latest version from our official website. Choose the appropriate installer for your operating system (Windows, macOS, or Linux).</p>
                </div>
                
                <div className="step">
                  <h4>2. Run the Installer</h4>
                  <p>Execute the downloaded installer with administrator privileges. Follow the installation wizard and accept the license agreement.</p>
                </div>
                
                <div className="step">
                  <h4>3. Configure Initial Settings</h4>
                  <p>Set up your workspace directory, configure database connections, and establish cloud service credentials if using enterprise features.</p>
                </div>
                
                <div className="step">
                  <h4>4. Verify Installation</h4>
                  <p>Launch CorrentFlow Studio and run the built-in system check to verify all components are properly installed and configured.</p>
                </div>
              </div>
            </section>

            {/* Quick Start Section */}
            <section id="quick-start" className="docs-section">
              <h2>Quick Start Guide</h2>
              
              <p>Get up and running with CorrentFlow Studio in minutes. This guide will walk you through creating your first automation workflow.</p>
              
              <div className="tutorial-steps">
                <div className="tutorial-step">
                  <h4>Step 1: Create a New Workflow</h4>
                  <p>Open CorrentFlow Studio and click "New Workflow" from the dashboard. Choose a template or start with a blank workflow canvas.</p>
                </div>
                
                <div className="tutorial-step">
                  <h4>Step 2: Add Data Source</h4>
                  <p>Drag a "File Reader" activity from the toolbox to your canvas. Configure it to read from a CSV file or database table.</p>
                </div>
                
                <div className="tutorial-step">
                  <h4>Step 3: Transform Data</h4>
                  <p>Add a "Data Transform" activity and connect it to your data source. Configure column mappings, filters, and calculations.</p>
                </div>
                
                <div className="tutorial-step">
                  <h4>Step 4: Configure Output</h4>
                  <p>Add a "File Writer" or "Database Writer" activity to save your processed data. Set the destination and format options.</p>
                </div>
                
                <div className="tutorial-step">
                  <h4>Step 5: Test and Deploy</h4>
                  <p>Run your workflow in test mode to verify it works correctly. Once satisfied, deploy it to run on a schedule or trigger.</p>
                </div>
              </div>
            </section>

            {/* Architecture Section */}
            <section id="architecture" className="docs-section">
              <h2>Architecture Overview</h2>
              
              <p>CorrentFlow Studio is built on a modular, scalable architecture designed for enterprise-grade performance and reliability.</p>
              
              <div className="architecture-components">
                <div className="component">
                  <h4>Workflow Engine</h4>
                  <p>Core execution engine that orchestrates workflow activities, manages state, handles errors, and ensures reliable processing of complex automation scenarios.</p>
                </div>
                
                <div className="component">
                  <h4>Activity Library</h4>
                  <p>Comprehensive collection of pre-built activities for data processing, file operations, web interactions, API calls, and system integrations.</p>
                </div>
                
                <div className="component">
                  <h4>Visual Designer</h4>
                  <p>Intuitive drag-and-drop interface for building workflows. Features include real-time validation, debugging tools, and collaborative editing capabilities.</p>
                </div>
                
                <div className="component">
                  <h4>Scheduler & Triggers</h4>
                  <p>Advanced scheduling system supporting cron expressions, file watchers, API webhooks, and event-driven execution patterns.</p>
                </div>
                
                <div className="component">
                  <h4>Monitoring Dashboard</h4>
                  <p>Real-time performance monitoring, execution logs, resource utilization tracking, and comprehensive analytics for workflow optimization.</p>
                </div>
                
                <div className="component">
                  <h4>Security Framework</h4>
                  <p>Enterprise-grade security with role-based access control, encrypted connections, audit logging, and compliance reporting capabilities.</p>
                </div>
              </div>
            </section>

            {/* Data Flow Section */}
            <section id="data-flow" className="docs-section">
              <h2>Data Flow Management</h2>
              
              <p>Understanding how data flows through CorrentFlow Studio workflows is essential for building efficient automation processes.</p>
              
              <h3>Data Types</h3>
              <ul>
                <li><strong>Structured Data</strong> - Tables, databases, JSON, XML</li>
                <li><strong>Unstructured Data</strong> - Text files, documents, images</li>
                <li><strong>Streaming Data</strong> - Real-time data feeds, sensors, APIs</li>
                <li><strong>Binary Data</strong> - Files, media, compressed archives</li>
              </ul>
              
              <h3>Data Processing Patterns</h3>
              <ul>
                <li><strong>ETL (Extract, Transform, Load)</strong> - Traditional data warehouse patterns</li>
                <li><strong>ELT (Extract, Load, Transform)</strong> - Modern cloud-native patterns</li>
                <li><strong>Stream Processing</strong> - Real-time data processing and analytics</li>
                <li><strong>Batch Processing</strong> - Scheduled bulk data operations</li>
              </ul>
            </section>

            {/* Activities Section */}
            <section id="activities" className="docs-section">
              <h2>Activity Framework</h2>
              
              <p>Activities are the building blocks of CorrentFlow workflows. Each activity performs a specific function and can be connected to create complex automation processes.</p>
              
              <div className="activity-categories">
                <div className="category">
                  <h4>Data Activities</h4>
                  <p>Read, write, transform, validate, and manipulate data from various sources including databases, files, APIs, and cloud services.</p>
                </div>
                
                <div className="category">
                  <h4>File Activities</h4>
                  <p>Comprehensive file operations including read/write, compression, encryption, format conversion, and file system management.</p>
                </div>
                
                <div className="category">
                  <h4>Web Activities</h4>
                  <p>HTTP requests, web scraping, browser automation, API interactions, and web service integrations with authentication support.</p>
                </div>
                
                <div className="category">
                  <h4>Email Activities</h4>
                  <p>Send, receive, and process emails with support for attachments, templates, bulk operations, and multiple email providers.</p>
                </div>
                
                <div className="category">
                  <h4>System Activities</h4>
                  <p>Execute commands, manage processes, interact with operating system features, and perform system administration tasks.</p>
                </div>
                
                <div className="category">
                  <h4>Logic Activities</h4>
                  <p>Control flow, conditional logic, loops, error handling, and workflow orchestration activities for complex business rules.</p>
                </div>
              </div>
            </section>

            {/* Data Activities Reference */}
            <section id="data-activities" className="docs-section">
              <h2>Data Activities Reference</h2>
              
              <div className="activity-reference">
                <h3>Database Query</h3>
                <p>Execute SQL queries against databases with support for parameters, transactions, and connection pooling.</p>
                <div className="parameter-table">
                  <div className="parameter-row">
                    <span className="parameter-name">Connection</span>
                    <span className="parameter-type">String</span>
                    <span className="parameter-description">Database connection string or reference</span>
                  </div>
                  <div className="parameter-row">
                    <span className="parameter-name">Query</span>
                    <span className="parameter-type">String</span>
                    <span className="parameter-description">SQL query to execute</span>
                  </div>
                  <div className="parameter-row">
                    <span className="parameter-name">Parameters</span>
                    <span className="parameter-type">Object</span>
                    <span className="parameter-description">Query parameters for safe execution</span>
                  </div>
                </div>
                <div className="code-block">
                  <pre>{`SELECT customer_id, order_total, order_date 
FROM orders 
WHERE order_date >= @start_date 
  AND customer_region = @region
ORDER BY order_date DESC`}</pre>
                </div>
              </div>
              
              <div className="activity-reference">
                <h3>Data Transform</h3>
                <p>Transform data using expressions, mappings, and built-in functions for data cleansing and enrichment.</p>
                <div className="parameter-table">
                  <div className="parameter-row">
                    <span className="parameter-name">Mappings</span>
                    <span className="parameter-type">Array</span>
                    <span className="parameter-description">Column mapping definitions</span>
                  </div>
                  <div className="parameter-row">
                    <span className="parameter-name">Filters</span>
                    <span className="parameter-type">String</span>
                    <span className="parameter-description">Filter expression for row selection</span>
                  </div>
                  <div className="parameter-row">
                    <span className="parameter-name">Aggregations</span>
                    <span className="parameter-type">Object</span>
                    <span className="parameter-description">Grouping and aggregation settings</span>
                  </div>
                </div>
              </div>
              
              <div className="activity-reference">
                <h3>Data Validation</h3>
                <p>Validate data quality with customizable rules, constraints, and business logic validation.</p>
                <div className="parameter-table">
                  <div className="parameter-row">
                    <span className="parameter-name">Rules</span>
                    <span className="parameter-type">Array</span>
                    <span className="parameter-description">Validation rules to apply</span>
                  </div>
                  <div className="parameter-row">
                    <span className="parameter-name">OnError</span>
                    <span className="parameter-type">Enum</span>
                    <span className="parameter-description">Action when validation fails</span>
                  </div>
                </div>
              </div>
            </section>

            {/* File Activities Reference */}
            <section id="file-activities" className="docs-section">
              <h2>File Activities Reference</h2>
              
              <div className="activity-reference">
                <h3>File Reader</h3>
                <p>Read data from various file formats including CSV, JSON, XML, Excel, and plain text files.</p>
                <div className="parameter-table">
                  <div className="parameter-row">
                    <span className="parameter-name">FilePath</span>
                    <span className="parameter-type">String</span>
                    <span className="parameter-description">Path to the file to read</span>
                  </div>
                  <div className="parameter-row">
                    <span className="parameter-name">Format</span>
                    <span className="parameter-type">Enum</span>
                    <span className="parameter-description">File format (CSV, JSON, XML, Excel)</span>
                  </div>
                  <div className="parameter-row">
                    <span className="parameter-name">Options</span>
                    <span className="parameter-type">Object</span>
                    <span className="parameter-description">Format-specific parsing options</span>
                  </div>
                </div>
              </div>
              
              <div className="activity-reference">
                <h3>File Writer</h3>
                <p>Write data to files in various formats with compression and encryption options.</p>
                <div className="parameter-table">
                  <div className="parameter-row">
                    <span className="parameter-name">FilePath</span>
                    <span className="parameter-type">String</span>
                    <span className="parameter-description">Destination file path</span>
                  </div>
                  <div className="parameter-row">
                    <span className="parameter-name">Format</span>
                    <span className="parameter-type">Enum</span>
                    <span className="parameter-description">Output file format</span>
                  </div>
                  <div className="parameter-row">
                    <span className="parameter-name">Overwrite</span>
                    <span className="parameter-type">Boolean</span>
                    <span className="parameter-description">Whether to overwrite existing files</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Web Activities Reference */}
            <section id="web-activities" className="docs-section">
              <h2>Web Activities Reference</h2>
              
              <div className="activity-reference">
                <h3>HTTP Request</h3>
                <p>Make HTTP requests to web APIs with full support for authentication, headers, and request/response handling.</p>
                <div className="parameter-table">
                  <div className="parameter-row">
                    <span className="parameter-name">URL</span>
                    <span className="parameter-type">String</span>
                    <span className="parameter-description">Target URL for the request</span>
                  </div>
                  <div className="parameter-row">
                    <span className="parameter-name">Method</span>
                    <span className="parameter-type">Enum</span>
                    <span className="parameter-description">HTTP method (GET, POST, PUT, DELETE)</span>
                  </div>
                  <div className="parameter-row">
                    <span className="parameter-name">Headers</span>
                    <span className="parameter-type">Object</span>
                    <span className="parameter-description">HTTP headers to include</span>
                  </div>
                  <div className="parameter-row">
                    <span className="parameter-name">Body</span>
                    <span className="parameter-type">String</span>
                    <span className="parameter-description">Request body content</span>
                  </div>
                </div>
              </div>
              
              <div className="activity-reference">
                <h3>Web Scraper</h3>
                <p>Extract data from web pages using CSS selectors, XPath, and intelligent content recognition.</p>
                <div className="parameter-table">
                  <div className="parameter-row">
                    <span className="parameter-name">URL</span>
                    <span className="parameter-type">String</span>
                    <span className="parameter-description">Web page URL to scrape</span>
                  </div>
                  <div className="parameter-row">
                    <span className="parameter-name">Selectors</span>
                    <span className="parameter-type">Array</span>
                    <span className="parameter-description">CSS selectors for data extraction</span>
                  </div>
                  <div className="parameter-row">
                    <span className="parameter-name">WaitFor</span>
                    <span className="parameter-type">String</span>
                    <span className="parameter-description">Element to wait for before scraping</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Email Activities Reference */}
            <section id="email-activities" className="docs-section">
              <h2>Email Activities Reference</h2>
              
              <div className="activity-reference">
                <h3>Send Email</h3>
                <p>Send emails with rich formatting, attachments, and template support for automated communications.</p>
                <div className="parameter-table">
                  <div className="parameter-row">
                    <span className="parameter-name">To</span>
                    <span className="parameter-type">String</span>
                    <span className="parameter-description">Recipient email addresses</span>
                  </div>
                  <div className="parameter-row">
                    <span className="parameter-name">Subject</span>
                    <span className="parameter-type">String</span>
                    <span className="parameter-description">Email subject line</span>
                  </div>
                  <div className="parameter-row">
                    <span className="parameter-name">Body</span>
                    <span className="parameter-type">String</span>
                    <span className="parameter-description">Email content (HTML or plain text)</span>
                  </div>
                  <div className="parameter-row">
                    <span className="parameter-name">Attachments</span>
                    <span className="parameter-type">Array</span>
                    <span className="parameter-description">Files to attach to the email</span>
                  </div>
                </div>
              </div>
              
              <div className="activity-reference">
                <h3>Email Reader</h3>
                <p>Read and process emails from mailboxes with filtering, parsing, and attachment handling capabilities.</p>
                <div className="parameter-table">
                  <div className="parameter-row">
                    <span className="parameter-name">Server</span>
                    <span className="parameter-type">String</span>
                    <span className="parameter-description">Email server configuration</span>
                  </div>
                  <div className="parameter-row">
                    <span className="parameter-name">Folder</span>
                    <span className="parameter-type">String</span>
                    <span className="parameter-description">Mailbox folder to read from</span>
                  </div>
                  <div className="parameter-row">
                    <span className="parameter-name">Filter</span>
                    <span className="parameter-type">String</span>
                    <span className="parameter-description">Email filter criteria</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Integrations Section */}
            <section id="integrations" className="docs-section">
              <h2>Enterprise Integrations</h2>
              
              <p>CorrentFlow Studio provides extensive integration capabilities with popular enterprise systems and cloud services.</p>
              
              <h3>Database Systems</h3>
              <ul>
                <li><strong>SQL Server</strong> - Microsoft SQL Server integration with advanced features</li>
                <li><strong>Oracle</strong> - Oracle Database connectivity with PL/SQL support</li>
                <li><strong>PostgreSQL</strong> - Open-source PostgreSQL with JSON and array support</li>
                <li><strong>MySQL</strong> - MySQL and MariaDB integration</li>
                <li><strong>MongoDB</strong> - NoSQL document database operations</li>
                <li><strong>Redis</strong> - In-memory data structure store</li>
              </ul>
              
              <h3>Cloud Platforms</h3>
              <ul>
                <li><strong>Amazon Web Services</strong> - S3, RDS, Lambda, SQS, SNS</li>
                <li><strong>Microsoft Azure</strong> - Blob Storage, SQL Database, Functions</li>
                <li><strong>Google Cloud Platform</strong> - Cloud Storage, BigQuery, Functions</li>
                <li><strong>Salesforce</strong> - CRM data and process automation</li>
                <li><strong>Microsoft 365</strong> - SharePoint, OneDrive, Teams, Outlook</li>
              </ul>
              
              <h3>Business Applications</h3>
              <ul>
                <li><strong>SAP</strong> - ERP system integration and data exchange</li>
                <li><strong>ServiceNow</strong> - IT service management automation</li>
                <li><strong>Slack</strong> - Team communication and notifications</li>
                <li><strong>Jira</strong> - Project management and issue tracking</li>
                <li><strong>Tableau</strong> - Business intelligence and analytics</li>
              </ul>
            </section>

            {/* Deployment Section */}
            <section id="deployment" className="docs-section">
              <h2>Deployment Options</h2>
              
              <p>CorrentFlow Studio offers flexible deployment options to meet various organizational needs and security requirements.</p>
              
              <h3>On-Premises Deployment</h3>
              <ul>
                <li><strong>Single Server</strong> - Complete installation on a single machine</li>
                <li><strong>Clustered</strong> - Multi-server setup for high availability</li>
                <li><strong>Containerized</strong> - Docker-based deployment for scalability</li>
                <li><strong>Kubernetes</strong> - Container orchestration for cloud-native environments</li>
              </ul>
              
              <h3>Cloud Deployment</h3>
              <ul>
                <li><strong>SaaS</strong> - Fully managed cloud service</li>
                <li><strong>Private Cloud</strong> - Dedicated cloud infrastructure</li>
                <li><strong>Hybrid</strong> - Combination of on-premises and cloud components</li>
                <li><strong>Multi-Cloud</strong> - Distributed across multiple cloud providers</li>
              </ul>
              
              <h3>Security Considerations</h3>
              <ul>
                <li><strong>Network Security</strong> - VPN, firewall, and network segmentation</li>
                <li><strong>Data Encryption</strong> - At rest and in transit encryption</li>
                <li><strong>Access Control</strong> - Role-based permissions and authentication</li>
                <li><strong>Compliance</strong> - GDPR, HIPAA, SOX compliance features</li>
              </ul>
            </section>

            {/* Troubleshooting Section */}
            <section id="troubleshooting" className="docs-section">
              <h2>Troubleshooting Guide</h2>
              
              <p>Common issues and their solutions to help you resolve problems quickly and maintain smooth operations.</p>
              
              <div className="troubleshooting-item">
                <h4>Workflow Execution Failures</h4>
                <p><strong>Symptoms:</strong> Workflows fail to start or stop unexpectedly during execution.</p>
                <p><strong>Causes:</strong> Resource constraints, permission issues, or configuration problems.</p>
                <p><strong>Solutions:</strong></p>
                <ul>
                  <li>Check system resources (CPU, memory, disk space)</li>
                  <li>Verify user permissions for file and database access</li>
                  <li>Review workflow logs for specific error messages</li>
                  <li>Validate connection strings and credentials</li>
                </ul>
              </div>
              
              <div className="troubleshooting-item">
                <h4>Performance Issues</h4>
                <p><strong>Symptoms:</strong> Slow workflow execution or system responsiveness.</p>
                <p><strong>Causes:</strong> Large data volumes, inefficient queries, or resource bottlenecks.</p>
                <p><strong>Solutions:</strong></p>
                <ul>
                  <li>Optimize database queries and indexes</li>
                  <li>Implement data chunking for large datasets</li>
                  <li>Increase memory allocation for workflows</li>
                  <li>Use parallel processing where appropriate</li>
                </ul>
              </div>
              
              <div className="troubleshooting-item">
                <h4>Connection Problems</h4>
                <p><strong>Symptoms:</strong> Unable to connect to databases, APIs, or external services.</p>
                <p><strong>Causes:</strong> Network issues, authentication failures, or service unavailability.</p>
                <p><strong>Solutions:</strong></p>
                <ul>
                  <li>Test network connectivity and firewall settings</li>
                  <li>Verify credentials and authentication methods</li>
                  <li>Check service status and availability</li>
                  <li>Review SSL/TLS certificate validity</li>
                </ul>
              </div>
              
              <h3>Getting Help</h3>
              <ul>
                <li><strong>Documentation</strong> - Comprehensive online documentation and tutorials</li>
                <li><strong>Community Forum</strong> - User community for questions and discussions</li>
                <li><strong>Support Portal</strong> - Enterprise support with SLA guarantees</li>
                <li><strong>Training</strong> - Professional training and certification programs</li>
              </ul>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Docs;
