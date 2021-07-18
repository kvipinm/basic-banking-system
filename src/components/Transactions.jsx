import React from 'react'
import db from '../firebase/firebaseConfig'

let transactionArray = [];
db.collection('transactions').get().then((snapshot) => {
    snapshot.forEach((doc) => {
        if (doc.data()) {
            let transactionElement = (
                <tr key={doc.id} className="accounts">
                    <td className="accounts">{doc.data().senderName}</td>
                    <td className="accounts">{doc.data().senderEmail}</td>
                    <td className="accounts">{doc.data().receiverName}</td>
                    <td className="accounts">{doc.data().receiverEmail}</td>
                    <td className="accounts">{doc.data().amount}</td>
                    <td className="accounts">{doc.data().time}</td>
                </tr>
            )
            transactionArray.push(transactionElement);
        }
    })
})

export default function Accounts() {
    return (
        <div className='accounts-container'>
            <table>
                <thead>
                    <tr className="accounts">
                        <th className="accounts">Sender's Name</th>
                        <th className="accounts">Sender's Email</th>
                        <th className="accounts">Receiver's Name</th>
                        <th className="accounts">Receiver's Email</th>
                        <th className="accounts">Amount</th>
                        <th className="accounts">Date and Time</th>
                    </tr>
                </thead>
                <tbody>
                    {transactionArray}
                </tbody>
            </table>
        </div>
    )
}

