import db from '../firebase/firebaseConfig';
import { Link } from 'react-router-dom';

let userArray = [];
db.collection('users').get().then((snapshot) => {
    snapshot.forEach((doc) => {
        let userElement = (
            <tr key={doc.id}>
                <td>{doc.data().name}</td>
                <td>{doc.data().email}</td>
                <td>{doc.data().age}</td>
                <td>{doc.data().balance}</td>
                <td><Link to='/transactions'> <button>View Transactions</button></Link></td>
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
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Balance</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {userArray}
                </tbody>
            </table>
        </div>
    )
}

