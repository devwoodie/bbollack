import { useState, useEffect } from "react";
import { FaWonSign } from "react-icons/fa"
import { IoReloadCircle } from "react-icons/io5"
import axios from "axios";

const Quotes = () => {

    const [quotes, setQuotes] = useState([]);
    const [quotesDate, setQuotesDate] = useState("");

    const getTokenQuoteAPI = async () => {
        try{
            const res = await axios.get("https://api.coinpaprika.com/v1/tickers?quotes=KRW");
            setQuotes(res.data.slice(0,10));
            res.data.slice(0,1).map((item) => {
                setQuotesDate(item.last_updated)
            })
        }catch (err){
            console.log(err);
        }
    }

    useEffect(() => {
        getTokenQuoteAPI();
    }, []);

    return(
        <div className="Quotes inner-cont">
            <h3>Cryptocurrency Quotes</h3>
            <span className="reload-btn" onClick={getTokenQuoteAPI}><IoReloadCircle size={20} /></span>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>symbol</th>
                        <th>price</th>
                        <th>volume</th>
                    </tr>
                </thead>
                <tbody>
                {quotes.map((item, index) => (
                    <tr key={index}>
                        <td>{item.rank}</td>
                        <td>{item.symbol}</td>
                        <td><FaWonSign size={10} /> {Number(item.quotes.KRW.price.toFixed(1)).toLocaleString()}</td>
                        <td>{(item.quotes.KRW.volume_24h / 1000000000000).toFixed(2)}T</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <span className="quotes-date">{quotesDate}</span>
        </div>
    )
}

export default Quotes;