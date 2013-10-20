var Logger = {

    log: function() {
        var args = Array.prototype.slice.call(arguments);
        console.log.apply(null, args);
    }

};

module.exports = Logger;
