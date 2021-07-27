db.collection("users").add({
    name: "Alan Mathison Turing",
    email: "alanmat@dummy.com",
    age: 28,
    balance: 10000
})
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });