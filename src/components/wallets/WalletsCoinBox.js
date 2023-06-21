const WalletsCoinBox = ({ coinSmName, coinName, coinAmount, icon }) => {
    return(
        <li className="inner-cont">
            <span className="coin-abb-name">{coinSmName}</span>
            <span className="coin-name">{coinName}</span>
            <span className="coin-amount">{coinAmount}</span>
            <div className="coin-icon">
                <span>{icon}</span>
            </div>
        </li>
    )
}

export default WalletsCoinBox;