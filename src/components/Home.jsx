import {Link} from "react-router-dom";
import '../styles/_home.scss';
import account_img from '../images/accounts.jpg';
import transactions_img from '../images/transactions.jpg';
import transfer_img from '../images/transfer.jpg';

const Home = () => {
    return (
        <div className="home-container">
            <Link to="/accounts" className="home-link">
                <img src={account_img} alt="Accounts" className="home-img" />
                <h1 className="home-h1">View all Accounts</h1>
            </Link>
            <Link to="/transactions" className="home-link">
                <img src={transactions_img} alt="Transactions" className="home-img" />
                <h1 className="home-h1">View all Transactions</h1>
            </Link>
            <Link to="/transfer" className="home-link">
                <img src={transfer_img} alt="Transfer Money" className="home-img" />
                <h1 className="home-h1">Transfer Money</h1>
            </Link>
        </div>
    )
}
export default Home;