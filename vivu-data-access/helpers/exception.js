/**
 * @Author: Tran Van Nhut <nhutdev>
 * @Date:   2017-02-13T10:06:47+07:00
 * @Email:  tranvannhut4495@gmail.com
* @Last modified by:   nhutdev
* @Last modified time: 2017-02-13T10:06:53+07:00
 */



'use strict';

const exceptionTypes = require('vivu-common-api').ttypes.exception;
const helpers = require('node-helpers');

let exHelpers = new helpers.Exception(exceptionTypes);

module.exports = exHelpers;
