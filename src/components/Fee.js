import { FaEthereum } from "react-icons/fa"
const Fee = () => {
    return(
        <div className="Fee">
            <h3>Real-time gas prices</h3>
            <span className="eth"><FaEthereum />&nbsp;Ethereum</span>
            <ul className="fee-wrap">
                <li className="flex-box"><span>Fast</span><i>14 GWEI</i></li>
                <li className="flex-box"><span>Average</span><i>14 GWEI</i></li>
                <li className="flex-box"><span>Safe</span><i>14 GWEI</i></li>
            </ul>
        </div>
    )
}

export default Fee;