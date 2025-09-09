import React, { useState, useEffect } from 'react';
import './App.css';

// Mock app screenshots - in production these would be actual app screenshots
const appScreenshots = [
  '/src/assets/app-screenshot.jpeg',
  '/src/assets/app-screenshot_02.jpeg',
  '/src/assets/app-screenshot_03.jpeg',
  '/src/assets/app-screenshot_04.jpeg'
];

function App() {
  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreenshot((prev) => (prev + 1) % appScreenshots.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <nav className="nav">
          <div className="nav-brand">
            <img src="/src/assets/ute-hub-logo.png" alt="UteHub" className="logo" />
          </div>
          <div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <a href="https://utehub.com" className="nav-link">UteHub.com</a>
            <a href="#features" className="nav-link">Features</a>
            <a href="#community" className="nav-link">Community</a>
            <a href="#download" className="nav-link">Download</a>
          </div>
          <div className="nav-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>The Ultimate Ute Fan Experience</h1>
            <p>Connect with fellow Ute fans, track games and scores, read insider information, participate in contests, and never miss a moment of University of Utah sports action.</p>
            <div className="hero-buttons">
              <div className="download-option">
                <a href="https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewSoftware?id=1252441645&mt=8" className="badge-link">
                  <img src="/src/assets/app-store-badge.svg" alt="Download on the App Store" className="store-badge" />
                </a>
                <div className="qr-code">
                  <img src="/src/assets/qr-ios.png" alt="iOS QR Code" />
                  <p>Scan for iOS</p>
                </div>
              </div>
              <div className="download-option">
                <button className="badge-link">
                  <img src="/src/assets/google-play-badge.png" alt="Get it on Google Play" className="store-badge" />
                </button>
                <div className="qr-code">
                  <img src="/src/assets/qr-android.png" alt="Android QR Code" />
                  <p>Scan for Android</p>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-phone">
            <div className="phone-mockup">
              <img 
                src={appScreenshots[currentScreenshot]} 
                alt="UteHub App Screenshot" 
                className="app-screenshot"
              />
            </div>
            <div className="screenshot-dots">
              {appScreenshots.map((_, index) => (
                <button 
                  key={index}
                  className={`dot ${index === currentScreenshot ? 'active' : ''}`}
                  onClick={() => setCurrentScreenshot(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2>Everything a Ute Fan Needs</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">💬</div>
              <h3>Fan Forum</h3>
              <p>Engage in passionate discussions with fellow Ute fans about games, players, and team strategies.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>Social Community</h3>
              <p>Connect with Ute fans worldwide, share photos, and build lasting friendships in the Ute family.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📅</div>
              <h3>Schedules & Scores</h3>
              <p>Stay updated with real-time game schedules, live scores, and comprehensive sports coverage.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3>Team Rosters</h3>
              <p>Complete player profiles, stats, and roster information for all University of Utah sports teams.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Contests</h3>
              <p>Test your sports knowledge with Pick 'Em games and score predictions. Compete against other fans for bragging rights and prizes.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Fan Polls</h3>
              <p>Voice your opinion on team decisions, MVP choices, and hot topics in the Ute community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="community">
        <div className="container">
          <h2>Join the #1 Ute Fan Community</h2>
          <div className="community-stats">
            <div className="stat">
              <h3>10K+</h3>
              <p>iOS Downloads</p>
            </div>
            <div className="stat">
              <h3>200K+</h3>
              <p>Forum Posts</p>
            </div>
            <div className="stat">
              <h3>500+</h3>
              <p>Daily Predictions</p>
            </div>
          </div>
          <p>Be part of the most passionate University of Utah fan community. Share your Ute pride, make predictions, and celebrate victories together!</p>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="download">
        <div className="container">
          <h2>Download the Ute Hub App Today!</h2>
          <p>Available on iOS and Android. Join thousands of Ute fans already using the app.</p>
          <div className="download-buttons">
            <a href="https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewSoftware?id=1252441645&mt=8" className="badge-link">
              <img src="/src/assets/app-store-badge.svg" alt="Download on the App Store" className="store-badge-large" />
            </a>
            <button className="badge-link">
              <img src="/src/assets/google-play-badge.png" alt="Get it on Google Play" className="store-badge-large" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>UteHub</h3>
              <p>The official fan community app for University of Utah sports.</p>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#support">Support</a>
              <a href="#contact">Contact Us</a>
            </div>
            <div className="footer-social">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="https://www.facebook.com/utehubdotcom" target="_blank" rel="noopener noreferrer">
                  <span>📘</span>
                </a>
                <a href="https://x.com/Ute_Hub" target="_blank" rel="noopener noreferrer">
                  <span>🐦</span>
                </a>
                <span>📷</span>
                <span>🎵</span>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 UteHub.com. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;