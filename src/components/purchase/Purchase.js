import BuyToken from "./BuyToken";
import SellToken from "./SellToken";
import {useState} from "react";
import {useSelector} from "react-redux";


const Purchase = () => {

    const [isDivision, setIsDivision] = useState(0);
    const userAccount = useSelector((state) => state.metaAccount.metaAccount);

    const tabArr = [
        { name: 'Buy' },
        { name: 'Sell' },
    ];

    const handleDivision = (index) => {
        setIsDivision(index)
    }

    return(
        <div className="Purchase inner-cont">
            <h3>{isDivision === 0 ? "Buy" : isDivision === 1 ? "Sell" : null} Cedars Token</h3>
            <ul className="buy-sell-tab flex-box">
                {tabArr.map((el, index) => (
                    <li key={index} className={index === isDivision ? "on" : ""} onClick={() => handleDivision(index)}>
                        {el.name}
                    </li>
                ))}
            </ul>
            <form>
                {isDivision === 0 ? <BuyToken /> : isDivision === 1 ? <SellToken /> : null}
                <div className="account">
                    <div className="flex-box" >
                        <label>Account</label>
                        <input
                            type="text"
                            value={userAccount}
                            readOnly={true}
                            style={{width: "65%", textAlign: "left", color: "#616161"}}
                        />
                    </div>
                </div>
                <div className="purchase-btn-wrap">
                    {isDivision === 0 ?
                        <button type="button" className="purchase-btn">Buy</button> :
                        isDivision === 1 ?
                            <button type="button" className="purchase-btn">Sell</button> : null
                    }
                </div>
            </form>
        </div>
    )
}


export default Purchase;