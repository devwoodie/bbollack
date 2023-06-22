import {BsArrowLeft, BsArrowRight} from "react-icons/bs"

const Transactions = ({ isConnected }) => {
    return(
        <div className={isConnected ? "Transactions" : "Transactions blur"}>
            <h3>Transactions</h3>
            <ul className="transactions-wrap">
                <li>
                    <span className="transactions-date">15:40, 21 june 2023</span>
                    <span className="transactions-amount buy">
                        <i><BsArrowRight size={18} /></i>
                        <span className="amount">0.00045 CED</span>
                    </span>
                    <span className="transactions-account">0xdfE5672D62a479D0D31C5632fA87803992A98692</span>
                </li>
                <li>
                    <span className="transactions-date">15:40, 21 june 2023</span>
                    <span className="transactions-amount buy">
                        <i><BsArrowRight size={18} /></i>
                        <span className="amount">0.00045 CED</span>
                    </span>
                    <span className="transactions-account">0xdfE5672D62a479D0D31C5632fA87803992A98692</span>
                </li>
                <li>
                    <span className="transactions-date">15:40, 21 june 2023</span>
                    <span className="transactions-amount sell">
                        <i><BsArrowLeft size={18} /></i>
                        <span className="amount">0.00045 CED</span>
                    </span>
                    <span className="transactions-account">0xdfE5672D62a479D0D31C5632fA87803992A98692</span>
                </li>
                <li>
                    <span className="transactions-date">15:40, 21 june 2023</span>
                    <span className="transactions-amount buy">
                        <i><BsArrowRight size={18} /></i>
                        <span className="amount">0.00045 CED</span>
                    </span>
                    <span className="transactions-account">0xdfE5672D62a479D0D31C5632fA87803992A98692</span>
                </li>
                <li>
                    <span className="transactions-date">15:40, 21 june 2023</span>
                    <span className="transactions-amount sell">
                        <i><BsArrowLeft size={18} /></i>
                        <span className="amount">0.00045 CED</span>
                    </span>
                    <span className="transactions-account">0xdfE5672D62a479D0D31C5632fA87803992A98692</span>
                </li>
                <li>
                    <span className="transactions-date">15:40, 21 june 2023</span>
                    <span className="transactions-amount buy">
                        <i><BsArrowRight size={18} /></i>
                        <span className="amount">0.00045 CED</span>
                    </span>
                    <span className="transactions-account">0xdfE5672D62a479D0D31C5632fA87803992A98692</span>
                </li>
            </ul>
        </div>
    )
}

export default Transactions;