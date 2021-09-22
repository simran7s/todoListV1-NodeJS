// Exporting the getDate() as its own module
// module.exports = getDate;

// OR use below if exporting multiple dates

// module.exports.getDate = getDate;

// THEN ALSO MAKE IT ANONYMOUS (and you dont really need module.)


exports.getDate = () => {
    const today = new Date;
    const options = {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    }
    const dayString = today.toLocaleDateString("en-US", options);

    return dayString
}

