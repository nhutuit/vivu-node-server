//
// Autogenerated by Thrift Compiler (0.9.3)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;


var ttypes = module.exports = {};
if (typeof vv === 'undefined') {
  vv = {};
}
if (typeof vv.models === 'undefined') {
  vv.models = {};
}
vv.models.Quote = module.exports.Quote = function(args) {
  this.id = null;
  this.orderId = null;
  this.subtotal = null;
  this.grandTotal = null;
  this.checkoutMethod = null;
  this.customerId = null;
  this.customerAddressId = null;
  if (args) {
    if (args.id !== undefined && args.id !== null) {
      this.id = args.id;
    }
    if (args.orderId !== undefined && args.orderId !== null) {
      this.orderId = args.orderId;
    }
    if (args.subtotal !== undefined && args.subtotal !== null) {
      this.subtotal = args.subtotal;
    }
    if (args.grandTotal !== undefined && args.grandTotal !== null) {
      this.grandTotal = args.grandTotal;
    }
    if (args.checkoutMethod !== undefined && args.checkoutMethod !== null) {
      this.checkoutMethod = args.checkoutMethod;
    }
    if (args.customerId !== undefined && args.customerId !== null) {
      this.customerId = args.customerId;
    }
    if (args.customerAddressId !== undefined && args.customerAddressId !== null) {
      this.customerAddressId = args.customerAddressId;
    }
  }
};
vv.models.Quote.prototype = {};
vv.models.Quote.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.id = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.orderId = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.subtotal = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I32) {
        this.grandTotal = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.checkoutMethod = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.I32) {
        this.customerId = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.I32) {
        this.customerAddressId = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

vv.models.Quote.prototype.write = function(output) {
  output.writeStructBegin('Quote');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.I32, 1);
    output.writeI32(this.id);
    output.writeFieldEnd();
  }
  if (this.orderId !== null && this.orderId !== undefined) {
    output.writeFieldBegin('orderId', Thrift.Type.I32, 2);
    output.writeI32(this.orderId);
    output.writeFieldEnd();
  }
  if (this.subtotal !== null && this.subtotal !== undefined) {
    output.writeFieldBegin('subtotal', Thrift.Type.I32, 3);
    output.writeI32(this.subtotal);
    output.writeFieldEnd();
  }
  if (this.grandTotal !== null && this.grandTotal !== undefined) {
    output.writeFieldBegin('grandTotal', Thrift.Type.I32, 4);
    output.writeI32(this.grandTotal);
    output.writeFieldEnd();
  }
  if (this.checkoutMethod !== null && this.checkoutMethod !== undefined) {
    output.writeFieldBegin('checkoutMethod', Thrift.Type.STRING, 5);
    output.writeString(this.checkoutMethod);
    output.writeFieldEnd();
  }
  if (this.customerId !== null && this.customerId !== undefined) {
    output.writeFieldBegin('customerId', Thrift.Type.I32, 6);
    output.writeI32(this.customerId);
    output.writeFieldEnd();
  }
  if (this.customerAddressId !== null && this.customerAddressId !== undefined) {
    output.writeFieldBegin('customerAddressId', Thrift.Type.I32, 7);
    output.writeI32(this.customerAddressId);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

vv.models.QuoteInsert = module.exports.QuoteInsert = function(args) {
  this.orderId = null;
  this.subtotal = null;
  this.grandTotal = null;
  this.checkoutMethod = null;
  this.customerId = null;
  this.customerAddressId = null;
  if (args) {
    if (args.orderId !== undefined && args.orderId !== null) {
      this.orderId = args.orderId;
    }
    if (args.subtotal !== undefined && args.subtotal !== null) {
      this.subtotal = args.subtotal;
    }
    if (args.grandTotal !== undefined && args.grandTotal !== null) {
      this.grandTotal = args.grandTotal;
    }
    if (args.checkoutMethod !== undefined && args.checkoutMethod !== null) {
      this.checkoutMethod = args.checkoutMethod;
    }
    if (args.customerId !== undefined && args.customerId !== null) {
      this.customerId = args.customerId;
    }
    if (args.customerAddressId !== undefined && args.customerAddressId !== null) {
      this.customerAddressId = args.customerAddressId;
    }
  }
};
vv.models.QuoteInsert.prototype = {};
vv.models.QuoteInsert.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.orderId = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.subtotal = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.grandTotal = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.checkoutMethod = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.I32) {
        this.customerId = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.I32) {
        this.customerAddressId = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

vv.models.QuoteInsert.prototype.write = function(output) {
  output.writeStructBegin('QuoteInsert');
  if (this.orderId !== null && this.orderId !== undefined) {
    output.writeFieldBegin('orderId', Thrift.Type.I32, 1);
    output.writeI32(this.orderId);
    output.writeFieldEnd();
  }
  if (this.subtotal !== null && this.subtotal !== undefined) {
    output.writeFieldBegin('subtotal', Thrift.Type.I32, 2);
    output.writeI32(this.subtotal);
    output.writeFieldEnd();
  }
  if (this.grandTotal !== null && this.grandTotal !== undefined) {
    output.writeFieldBegin('grandTotal', Thrift.Type.I32, 3);
    output.writeI32(this.grandTotal);
    output.writeFieldEnd();
  }
  if (this.checkoutMethod !== null && this.checkoutMethod !== undefined) {
    output.writeFieldBegin('checkoutMethod', Thrift.Type.STRING, 4);
    output.writeString(this.checkoutMethod);
    output.writeFieldEnd();
  }
  if (this.customerId !== null && this.customerId !== undefined) {
    output.writeFieldBegin('customerId', Thrift.Type.I32, 5);
    output.writeI32(this.customerId);
    output.writeFieldEnd();
  }
  if (this.customerAddressId !== null && this.customerAddressId !== undefined) {
    output.writeFieldBegin('customerAddressId', Thrift.Type.I32, 6);
    output.writeI32(this.customerAddressId);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

vv.models.QuoteForm = module.exports.QuoteForm = function(args) {
  this.id = null;
  this.orderId = null;
  this.subtotal = null;
  this.grandTotal = null;
  this.checkoutMethod = null;
  this.customerId = null;
  this.customerAddressId = null;
  if (args) {
    if (args.id !== undefined && args.id !== null) {
      this.id = args.id;
    }
    if (args.orderId !== undefined && args.orderId !== null) {
      this.orderId = args.orderId;
    }
    if (args.subtotal !== undefined && args.subtotal !== null) {
      this.subtotal = args.subtotal;
    }
    if (args.grandTotal !== undefined && args.grandTotal !== null) {
      this.grandTotal = args.grandTotal;
    }
    if (args.checkoutMethod !== undefined && args.checkoutMethod !== null) {
      this.checkoutMethod = args.checkoutMethod;
    }
    if (args.customerId !== undefined && args.customerId !== null) {
      this.customerId = args.customerId;
    }
    if (args.customerAddressId !== undefined && args.customerAddressId !== null) {
      this.customerAddressId = args.customerAddressId;
    }
  }
};
vv.models.QuoteForm.prototype = {};
vv.models.QuoteForm.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.id = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.orderId = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.subtotal = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I32) {
        this.grandTotal = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.checkoutMethod = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.I32) {
        this.customerId = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.I32) {
        this.customerAddressId = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

vv.models.QuoteForm.prototype.write = function(output) {
  output.writeStructBegin('QuoteForm');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.I32, 1);
    output.writeI32(this.id);
    output.writeFieldEnd();
  }
  if (this.orderId !== null && this.orderId !== undefined) {
    output.writeFieldBegin('orderId', Thrift.Type.I32, 2);
    output.writeI32(this.orderId);
    output.writeFieldEnd();
  }
  if (this.subtotal !== null && this.subtotal !== undefined) {
    output.writeFieldBegin('subtotal', Thrift.Type.I32, 3);
    output.writeI32(this.subtotal);
    output.writeFieldEnd();
  }
  if (this.grandTotal !== null && this.grandTotal !== undefined) {
    output.writeFieldBegin('grandTotal', Thrift.Type.I32, 4);
    output.writeI32(this.grandTotal);
    output.writeFieldEnd();
  }
  if (this.checkoutMethod !== null && this.checkoutMethod !== undefined) {
    output.writeFieldBegin('checkoutMethod', Thrift.Type.STRING, 5);
    output.writeString(this.checkoutMethod);
    output.writeFieldEnd();
  }
  if (this.customerId !== null && this.customerId !== undefined) {
    output.writeFieldBegin('customerId', Thrift.Type.I32, 6);
    output.writeI32(this.customerId);
    output.writeFieldEnd();
  }
  if (this.customerAddressId !== null && this.customerAddressId !== undefined) {
    output.writeFieldBegin('customerAddressId', Thrift.Type.I32, 7);
    output.writeI32(this.customerAddressId);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

