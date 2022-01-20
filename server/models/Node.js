function Node(id, vendorId, productId, deviceName, type, isAvailable, childrens) {
    this.id = (id === undefined ? 0: id)
    this.vendorId = vendorId === undefined ? 0 : vendorId;
    this.productId = productId === undefined ? 0 : productId;
    this.deviceName = deviceName === undefined ? null : deviceName;
    this.type = type === undefined ? "Device" : type;
    this.isAvailable = isAvailable === undefined ? "Available" : isAvailable;
    this.childrens = childrens === undefined ? [] : childrens;
  }
  
  module.exports = Node;