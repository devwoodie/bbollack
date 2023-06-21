import { BsGrid1X2Fill, BsFillPostcardFill, BsCalendarWeekFill, BsClockFill, BsGearFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SideBar = () => {

    let navigate = useNavigate();
    let [pageIndex, setPageIndex] = useState(0);

    return(
        <div className="SideBar">
            <h1 className="logo">BB</h1>
            <ul className="side-bar">
                <li onClick={() => {navigate('/'); setPageIndex(0);}} className={pageIndex === 0 ? 'on' : ''}>
                    <BsGrid1X2Fill size={20} />
                </li>
                <li onClick={() => {navigate('/1'); setPageIndex(1);}} className={pageIndex === 1 ? 'on' : ''}>
                    <BsFillPostcardFill size={20} />
                </li>
                <li onClick={() => {navigate('/2'); setPageIndex(2);}} className={pageIndex === 2 ? 'on' : ''}>
                    <BsCalendarWeekFill size={20} />
                </li>
                <li onClick={() => {navigate('/3'); setPageIndex(3);}} className={pageIndex === 3 ? 'on' : ''}>
                    <BsClockFill size={20} />
                </li>
                <li onClick={() => {navigate('/4'); setPageIndex(4);}} className={pageIndex === 4 ? 'on' : ''}>
                    <BsGearFill size={20} />
                </li>
            </ul>
        </div>
    )
}

export default SideBar;
