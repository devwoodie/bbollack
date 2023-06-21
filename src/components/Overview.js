import { Link } from "react-router-dom";

const Overview = () => {
    return(
        <div className="Overview">
            <h3>Overview</h3>
            <div className="inner-cont">
                <div className="flex-box">
                    <div className="transaction-wrap">
                        <span className="transaction-count">105</span>
                        <small>Transactions</small>
                    </div>
                    <div className="wallets-wrap">
                        <span className="wallets-count">2</span>
                        <small>Wallets</small>
                    </div>
                </div>
                <div className="news-wrap">
                    <span className="news-title">Crypto News</span>
                    <p>Discover News<br/>Related to Ethereum</p>
                    <Link to="https://cryptonews.net/news/ethereum/" target="_blank">Explore</Link>
                </div>
            </div>
        </div>
    )
}

export default Overview;