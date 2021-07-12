import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Link to="/accounts">
                <h1>View all Accounts</h1>
            </Link>
            <Link to="/transactions">
                <h1>View all Transactions</h1>
            </Link>
            <Link to="/transfer">
                <h1>Transfer Money</h1>
            </Link>
        </div>
    )
}
export default Home;