function main(params) {
    var date = new Date();
    console.log("Invoked at: " + date.toLocaleString());
    console.log("param testKey: " +params.testKey);
    return { message: 'Invoked at: ' + date.toLocaleString() };
}