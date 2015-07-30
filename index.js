var fs = require('fs');
var glob = require('glob');

module.exports = function (dirname) {
    glob(dirname + '/*.js', null, function (err, files) {
        if (err) throw err;
        files.forEach(replace);
    });
}

function replace (filename) {
    var content = fs.readFileSync(filename, { encoding: 'utf8' });
    // replace undefined global variables
    // Case 1: RpcZaocanOrderService_getOrderListByToken_args = function(args) {
    // Case 2: RpcZaocanOrderServiceClient = exports.Client = function(output, pClass) {
    // Case 3: OrderDigest = module.exports.OrderDigest = function(args) {
    content = content.replace(/^\w+ = ([\w.]+ = )?function/mg, 'var $&');
    fs.writeFileSync(filename, content);
}
