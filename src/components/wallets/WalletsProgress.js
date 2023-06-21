import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { BsThreeDotsVertical } from "react-icons/bs"

const WalletsProgress = () => {
    return(
        <div className="WalletsProgress inner-cont">
            <ProgressBar percent={52} coinName="Ethereum" />
            <ProgressBar percent={35} coinName="KRW" />
            <ProgressBar percent={13} coinName="Cedars" />
        </div>
    )
}

const ProgressBar = ({ percent, coinName }) => {
    return(
        <div className="ProgressBar flex-box">
            <span className="percent">
                <CircularProgressbar
                    value={percent}
                    round={true}
                    styles={buildStyles({
                        pathColor: '#7AC231',
                        trailColor: '#2A2B31',
                    })}
                />
            </span>
            <span className="percent-num">{percent}<em>%</em></span>
            <span className="coin-name">{coinName}</span>
            <span className="dots"><BsThreeDotsVertical /></span>
        </div>
    )
}

export default WalletsProgress;