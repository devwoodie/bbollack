import {FaEthereum} from "react-icons/fa";
import {SiWebmoney} from "react-icons/si";

const SellToken = () => {
    return(
        <>
            <div>
                <p className="flex-box"><FaEthereum />&nbsp;Ethereum</p>
                <div className="flex-box">
                    <label>Amount</label>
                    <input
                        type="text"
                    />
                    <span className="coin-name">ETH</span>
                </div>
            </div>
            <div>
                <p className="flex-box"><SiWebmoney />&nbsp;Cedars</p>
                <div className="flex-box">
                    <label>Amount</label>
                    <input
                        type="text"
                    />
                    <span className="coin-name">CED</span>
                    <div className="add-percent">
                        <button type="button">Max</button>
                        <button type="button">50%</button>
                        <button type="button">25%</button>
                        <button type="button">10%</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SellToken;