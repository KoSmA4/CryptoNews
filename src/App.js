import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import logo from './crypto_news_logo.png';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/editorial" element={<Editorial />} />
                    <Route path="/marketcap" element={<MarketCap />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                </Routes>
            </div>
        </Router>
    );
};

const Header = () => {
    return (
        <header className="header">
            <div className="top-menu">
                <div className="logo">
                    <img src={logo} alt="Crypto News Logo" />
                    <span>Crypto News</span>
                </div>
                <nav className="nav">
                    <ul>
                        <li><Link to="/">NEWS</Link></li>
                        <li><Link to="/editorial">EDITORIAL</Link></li>
                        <li><Link to="/marketcap">MARKET CAP</Link></li>
                        <li><Link to="/aboutus">ABOUT US</Link></li>
                    </ul>
                </nav>
                <div className="right-section">
                    <div className="language">EN</div>
                    <button className="auth-button">Login</button>
                </div>
            </div>
            <div className="sub-menu">
                <ul>
                    <li>Latest news</li>
                    <li>Video</li>
                    <li>Bitcoin</li>
                    <li>DeFi</li>
                    <li>NFT</li>
                    <li>Ethereum</li>
                    <li>Altcoins</li>
                    <li>Blockchain</li>
                    <li>Mining</li>
                    <li>Finance</li>
                    <li>More...</li>
                </ul>
            </div>
        </header>
    );
};

const Home = () => {
    return (
        <main className="main-content">
            <div className="ad-banner">
                <img src="bybit-banner.png" alt="Bybit Starter Rewards" />
            </div>
            <div className="news-container">
                <div className="main-news">
                    <img src="etf-news.jpg" alt="Ethereum ETF D-Day" />
                    <h2>Ethereum ETF D-Day Approaches, Where Will ETH Prices Go?</h2>
                    <p>cryptopotato.com • 3 h</p>
                </div>
                <div className="top-news">
                    <h3>Top News</h3>
                    <ul>
                        <li>
                            <h4>Ethereum ETF D-Day Approaches, Where Will ETH Prices Go?</h4>
                            <p>cryptopotato.com • 3 h</p>
                        </li>
                        <li>
                            <h4>The Big Day for the Cryptocurrency Market is Just 4 Days Away: Two Analysts Explain Their Views</h4>
                            <p>en.bitcoinsistemi.com • 18 May 2024 20:51, UTC</p>
                        </li>
                        <li>
                            <h4>Unlucky User Accidentally Sends $7K in Bitcoin to Satoshi Nakamoto</h4>
                            <p>blockchainreporter.net • 18 May 2024 18:40, UTC</p>
                        </li>
                        <li>
                            <h4>14 Years Ago, an Individual Offered 10,000 Bitcoins for 2 Pizzas, Finalizing the Deal in 4 Days</h4>
                            <p>news.bitcoin.com • 18 May 2024 18:35, UTC</p>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
};

const Editorial = () => {
    return (
        <main className="main-content">
            <div className="news-container">
                <div className="main-news">
                    <h2>Editorial</h2>
                    <div className="editorial-news">
                        <div className="news-item">
                            <h4>Bitcoin Price Analysis: Bulls and Bears Battle for Control</h4>
                            <p>cryptonews.com • 1 h</p>
                        </div>
                        <div className="news-item">
                            <h4>Ethereum 2.0: What to Expect from the Upcoming Upgrade</h4>
                            <p>cryptonews.com • 2 h</p>
                        </div>
                        <div className="news-item">
                            <h4>DeFi: The Future of Finance or Just a Fad?</h4>
                            <p>cryptonews.com • 3 h</p>
                        </div>
                        <div className="news-item">
                            <h4>Top 5 Altcoins to Watch in 2024</h4>
                            <p>cryptonews.com • 4 h</p>
                        </div>
                        <div className="news-item">
                            <h4>Blockchain Technology: Beyond Cryptocurrencies</h4>
                            <p>cryptonews.com • 5 h</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

const MarketCap = () => {
    return (
        <main className="main-content">
            <div className="news-container">
                <div className="main-news">
                    <h2>Market Cap</h2>
                    <a href="https://coinmarketcap.com/ru/" target="_blank" rel="noopener noreferrer">
                        Visit CoinMarketCap for detailed cryptocurrency market cap information.
                    </a>
                </div>
            </div>
        </main>
    );
};

const AboutUs = () => {
    return (
        <main className="main-content">
            <div className="news-container">
                <div className="main-news">
                    <h2>About Us</h2>
                    <p>Crypto News is your go-to source for the latest updates, news, and analysis in the cryptocurrency world. We aim to provide accurate and timely information to help you stay informed about market trends, investment opportunities, and more.</p>
                </div>
            </div>
        </main>
    );
};

export default App;
