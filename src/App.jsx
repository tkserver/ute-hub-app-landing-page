import React, { useState, useEffect } from 'react';
import './App.css';

// Import all assets
import uteHubLogo from './assets/ute-hub-logo.png';
import appStoreBadge from './assets/app-store-badge.svg';
import googlePlayBadge from './assets/google-play-badge.png';
import qrIos from './assets/qr-ios.png';
import qrAndroid from './assets/qr-android.png';
import heroBackground from './assets/hero-background.png';
import appScreenshot1 from './assets/app-screenshot.jpeg';
import appScreenshot2 from './assets/app-screenshot_02.jpeg';
import appScreenshot3 from './assets/app-screenshot_03.jpeg';
import appScreenshot4 from './assets/app-screenshot_04.jpeg';

// App screenshots array using imported assets
const appScreenshots = [
  appScreenshot1,
  appScreenshot2,
  appScreenshot3,
  appScreenshot4
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
            <img src={uteHubLogo} alt="UteHub" className="logo" />
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
                  <img src={appStoreBadge} alt="Download on the App Store" className="store-badge" />
                </a>
                <div className="qr-code">
                  <img src={qrIos} alt="iOS QR Code" />
                  <p>Scan for iOS</p>
                </div>
              </div>
              <div className="download-option">
                <button className="badge-link">
                  <img src={googlePlayBadge} alt="Get it on Google Play" className="store-badge" />
                </button>
                <div className="qr-code">
                  <img src={qrAndroid} alt="Android QR Code" />
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
              <p>Player profiles, stats, and roster information for University of Utah sports teams.</p>
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
          <h2>Join the Ultimate Fan Community</h2>
          <div className="community-stats">
            <div className="stat">
              <h3>11K+</h3>
              <p>iOS Downloads</p>
            </div>
            <div className="stat">
              <h3>200K+</h3>
              <p>Forum Posts</p>
            </div>
            <div className="stat">
              <h3>15K+</h3>
              <p>Daily Visits</p>
            </div>
          </div>
          <p>Be part of the most passionate University of Utah fan community.</p>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="download">
        <div className="container">
          <h2>Download the Ute Hub App Today!</h2>
          <p>Available on iOS and Android. Join thousands of Ute fans already using the app.</p>
          <div className="download-buttons">
            <a href="https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewSoftware?id=1252441645&mt=8" className="badge-link">
              <img src={appStoreBadge} alt="Download on the App Store" className="store-badge-large" />
            </a>
            <button className="badge-link">
              <img src={googlePlayBadge} alt="Get it on Google Play" className="store-badge-large" />
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
              <p>A fan community app for University of Utah sports enthusiasts.</p>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <a href="https://utehub.com/privacy-policy/">Privacy Policy</a>
              <a href="https://utehub.com/forums/forum/hubinfo/">Support</a>
              <a href="https://utehub.com/contact">Contact Us</a>
            </div>
            <div className="footer-social">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="https://www.facebook.com/utehubdotcom" target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://x.com/Ute_Hub" target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
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