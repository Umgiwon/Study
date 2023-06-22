import { useEffect, useState } from "react";

function App() {

    /** state */
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    // const [money, setMoney] = useState(0);


    /** event */
    // const onChange = () => {
    //     setMoney(money);
    // }
    // const fnSearch = (event) => {
    //     console.log(event.target.value);
    // }
    // const fnSubmit = () => {
    //     setMoney(money);
    // }

    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then(response => response.json())
        .then((json) => {
            setCoins(json);
            setLoading(false);
        });
    }, [])

    return (
        <div>
            <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
            {loading ? 
                <strong>Loading ...</strong> 
                : 
                <>
                {/* <form onSubmit={fnSubmit}> */}
                    <input /*</input>value={money} onChange={onChange}*/ placeholder="Enter your money($)" type="number"/>
                    <button /*onClick={fnSearch}*/>Search</button>
                    <br/><br/>
                    <select>
                    {coins.map((coin) => (
                        <option key={coin.id}>
                            {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
                        </option>
                    ))}
                    </select>
                {/* </form> */}
                </>
            }
            

        </div>
    );
}

export default App;
