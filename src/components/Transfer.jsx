import React from 'react'
import db from '../firebase/firebaseConfig'

class Transfer extends React.Component {
    state = {
        senderName: '',
        senderEmail: '',
        receiverName: '',
        receiverEmail: '',
        amount: 0,
        time: '',
        err: ''
    }
    onSenderNameChange = (e) => {
        const senderName = e.target.value;
        this.setState(() => ({ senderName }))
    }
    onSenderEmailChange = (e) => {
        const senderEmail = e.target.value;
        this.setState(() => ({ senderEmail }))
    }
    onReceiverNameChange = (e) => {
        const receiverName = e.target.value;
        this.setState(() => ({ receiverName }))
    }
    onReceiverEmailChange = (e) => {
        const receiverEmail = e.target.value;
        this.setState(() => ({ receiverEmail }))
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    }
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.receiverName || !this.state.senderName || !this.state.receiverEmail || !this.state.senderEmail || !this.state.amount) {
            this.setState(() => ({
                error: 'Please Enter all the fields'
            }));
        }
        else {
            this.setState(() => ({ err: '' }));
            let transactionDate = new Date();
            db.collection('transactions').add({
                senderName: this.state.senderName,
                senderEmail: this.state.senderEmail,
                receiverName: this.state.receiverName,
                receiverEmail: this.state.receiverEmail,
                amount: this.state.amount,
                time: transactionDate.getDate() + '/' + transactionDate.getMonth() + '/' + transactionDate.getFullYear() + ' ' + transactionDate.getHours() + ':' + transactionDate.getMinutes()
            })
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
                alert('Transferred successfully');
                this.props.history.push('/');
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
        };
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" onChange={this.onSenderNameChange} placeholder="Enter Sender's Name" />
                    <input type="email" onChange={this.onSenderEmailChange} placeholder="Enter Sender's Email" />
                    <input type="text" onChange={this.onReceiverNameChange} placeholder="Enter Receiver's Name" />
                    <input type="email" onChange={this.onReceiverEmailChange} placeholder="Enter Receiver's Email" />
                    <input type="number" onChange={this.onAmountChange} placeholder="Enter amount to transfer" />
                    <input type="submit" value="Transfer Money" />
                </form>
            </div >
        )
    }
}
export default Transfer;