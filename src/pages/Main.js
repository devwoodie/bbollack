import Overview from "../components/Overview";
import Wallets from "../components/wallets/Wallets";
import Transactions from "../components/Transactions";
import Fee from "../components/Fee";


const Main = () => {
    return(
        <div className="Main">
            <div className="cont-wrap flex-box">
                <div className="left-cont">
                    <div className="left-top-cont flex-box">
                        <Overview />
                        <Wallets />
                    </div>
                    <div className="left-bottom-cont flex-box" style={{marginTop: "2%"}}>
                        <div className="inner-cont" style={{width: "64%", height: "320px", padding: "20px" }}>buy</div>
                        <div className="inner-cont" style={{width: "34%", height: "320px", padding: "20px" }}>Cryptocurrency Price</div>
                    </div>
                </div>
                <div className="right-cont">
                    <Transactions />
                    <Fee />
                </div>
            </div>
        </div>
    )
}

export default Main;
