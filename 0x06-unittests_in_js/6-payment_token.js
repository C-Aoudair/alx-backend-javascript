function getPaymentTokenFromAPI(sucess) {
    if (sucess === true) {
        return Promise.resolve({ data: 'Successful response from the API' });
    }
}

module.exports = getPaymentTokenFromAPI;