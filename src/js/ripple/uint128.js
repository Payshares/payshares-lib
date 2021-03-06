var utils  = require('./utils');
var extend = require('extend');
var UInt   = require('./uint').UInt;

//
// UInt128 support
//

var UInt128 = extend(function () {
  // Internal form: NaN or BigInteger
  this._value  = NaN;
}, UInt);

UInt128.width = 16;
UInt128.prototype = extend({}, UInt.prototype);
UInt128.prototype.constructor = UInt128;

var HEX_ZERO = UInt128.HEX_ZERO = '00000000000000000000000000000000';
var HEX_ONE  = UInt128.HEX_ONE  = '00000000000000000000000000000000';
var STR_ZERO = UInt128.STR_ZERO = utils.hexToString(HEX_ZERO);
var STR_ONE  = UInt128.STR_ONE  = utils.hexToString(HEX_ONE);

exports.UInt128 = UInt128;
