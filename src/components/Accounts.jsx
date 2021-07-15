import db from '../firebase/firebaseConfig';
import '../styles/_accounts.scss'

let userArray = [];
db.collection('users').get().then((snapshot) => {
    snapshot.forEach((doc) => {
        let userElement = (
            <tr key={doc.id} className="accounts">
                <td className="accounts">{doc.data().name}</td>
                <td className="accounts">{doc.data().email}</td>
                <td className="accounts">{doc.data().age}</td>
                <td className="accounts">{doc.data().balance}</td>
                {/* <td><Link to='/transactions'> <button>View Transactions</button></Link></td> */}
            </tr>
        )
        userArray.push(userElement);
    })
})

export { userArray };
export default function Accounts() {
    return (
        <div className='accounts-container'>
            <table>
                <thead>
                    <tr className="accounts">
                        <th className="accounts">Name</th>
                        <th className="accounts">Email</th>
                        <th className="accounts">Age</th>
                        <th className="accounts">Balance</th>
                        {/* <th className="accounts">Action</th> */}
                    </tr>
                </thead>
                <tbody>
                    {userArray}
                </tbody>
            </table>
        </div>
    )
}

