function main(args) {
    var date = new Date();
    console.log("Invoked at: " + date.toLocaleString());
    const body = {
         message: 'Invoked at: ' + date.toLocaleString()
    }
    return {
        statusCode: 200,
        headers: { 
            'Content-Type': 'application/json', 
        },
        body,
    };
}