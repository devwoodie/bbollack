import {useState, useEffect} from "react";
import { FaEthereum, FaWonSign } from "react-icons/fa"
import { SiWebmoney } from "react-icons/si"
import WalletsCoinBox from "./WalletsCoinBox";
import WalletsProgress from "./WalletsProgress";

const Wallets = () => {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers?quotes=KRW")
            .then(response => response.json())
            .then(json => {
                setCoins(json.slice(0, 100)); // 가져온 데이터 1~100위 담기
                console.log(coins)
            });

    }, [])
    return(
        <div className="Wallets">
            <h3>My wallets</h3>
            <div className="wallets-wrap">
                <ul className="coin-wrap flex-box">
                    <WalletsCoinBox
                        coinSmName="CED"
                        coinName="Cedars"
                        coinAmount="10.3454"
                        icon={<SiWebmoney size={23} />}
                    />
                    <WalletsCoinBox
                        coinSmName="ETH"
                        coinName="Ethereum"
                        coinAmount="120.34"
                        icon={<FaEthereum size={25} />}
                    />
                    <WalletsCoinBox
                        coinSmName="KRW"
                        coinName="KRW"
                        coinAmount="2,120,000"
                        icon={<FaWonSign size={23} />}
                    />
                </ul>
            </div>
            <div className="flex-box" style={{marginTop: "3%"}}>
                <WalletsProgress />
                <div className="empty inner-cont" style={{width: "53%", height: "178px", padding: "20px"}}>Current Balance</div>
            </div>
        </div>
    )
}



export default Wallets;