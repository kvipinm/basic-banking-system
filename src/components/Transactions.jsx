import React from 'react'
import db from '../firebase/firebaseConfig'

let transactionArray = [];
db.collection('transactions').get().then((snapshot) => {
    snapshot.forEach((doc) => {
        if (doc.data()) {
            let transactionElement = (
                <tr key={doc.id}>
                    <td>{doc.data().senderName}</td>
                    <td>{doc.data().senderEmail}</td>
                    <td>{doc.data().receiverName}</td>
                    <td>{doc.data().receiverEmail}</td>
                    <td>{doc.data().amount}</td>
                    <td>{doc.data().time}</td>
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
                    <tr>
                        <th>Sender's Name</th>
                        <th>Sender's Email</th>
                        <th>Receiver's Name</th>
                        <th>Receiver's Email</th>
                        <th>Amount</th>
                        <th>Date and Time</th>
                    </tr>
                </thead>
                <tbody>
                    {transactionArray}
                </tbody>
            </table>
        </div>
    )
}

