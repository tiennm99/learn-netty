// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @const
 * @namespace
 */
var com = com || {};

/**
 * @const
 * @namespace
 */
com.miti99 = com.miti99 || {};

/**
 * @const
 * @namespace
 */
com.miti99.netty = com.miti99.netty || {};

/**
 * @const
 * @namespace
 */
com.miti99.netty.fbs = com.miti99.netty.fbs || {};

/**
 * @enum {number}
 */
com.miti99.netty.fbs.PacketData = {
  NONE: 0,
  LoginRequest: 1,
  LoginResponse: 2
};

/**
 * @enum {string}
 */
com.miti99.netty.fbs.PacketDataName = {
  '0': 'NONE',
  '1': 'LoginRequest',
  '2': 'LoginResponse'
};

/**
 * @constructor
 */
com.miti99.netty.fbs.Vec2 = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {com.miti99.netty.fbs.Vec2}
 */
com.miti99.netty.fbs.Vec2.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @returns {number}
 */
com.miti99.netty.fbs.Vec2.prototype.x = function() {
  return this.bb.readFloat64(this.bb_pos);
};

/**
 * @returns {number}
 */
com.miti99.netty.fbs.Vec2.prototype.y = function() {
  return this.bb.readFloat64(this.bb_pos + 8);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} x
 * @param {number} y
 * @returns {flatbuffers.Offset}
 */
com.miti99.netty.fbs.Vec2.createVec2 = function(builder, x, y) {
  builder.prep(8, 16);
  builder.writeFloat64(y);
  builder.writeFloat64(x);
  return builder.offset();
};

/**
 * @constructor
 */
com.miti99.netty.fbs.Player = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {com.miti99.netty.fbs.Player}
 */
com.miti99.netty.fbs.Player.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {com.miti99.netty.fbs.Player=} obj
 * @returns {com.miti99.netty.fbs.Player}
 */
com.miti99.netty.fbs.Player.getRootAsPlayer = function(bb, obj) {
  return (obj || new com.miti99.netty.fbs.Player).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {com.miti99.netty.fbs.Player=} obj
 * @returns {com.miti99.netty.fbs.Player}
 */
com.miti99.netty.fbs.Player.getSizePrefixedRootAsPlayer = function(bb, obj) {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new com.miti99.netty.fbs.Player).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns {number}
 */
com.miti99.netty.fbs.Player.prototype.userId = function() {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
com.miti99.netty.fbs.Player.prototype.userName = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {com.miti99.netty.fbs.Vec2=} obj
 * @returns {com.miti99.netty.fbs.Vec2|null}
 */
com.miti99.netty.fbs.Player.prototype.position = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? (obj || new com.miti99.netty.fbs.Vec2).__init(this.bb_pos + offset, this.bb) : null;
};

/**
 * @returns {number}
 */
com.miti99.netty.fbs.Player.prototype.rotation = function() {
  var offset = this.bb.__offset(this.bb_pos, 10);
  return offset ? this.bb.readFloat64(this.bb_pos + offset) : 0.0;
};

/**
 * @returns {number}
 */
com.miti99.netty.fbs.Player.prototype.team = function() {
  var offset = this.bb.__offset(this.bb_pos, 12);
  return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Builder} builder
 */
com.miti99.netty.fbs.Player.startPlayer = function(builder) {
  builder.startObject(5);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} userId
 */
com.miti99.netty.fbs.Player.addUserId = function(builder, userId) {
  builder.addFieldInt32(0, userId, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} userNameOffset
 */
com.miti99.netty.fbs.Player.addUserName = function(builder, userNameOffset) {
  builder.addFieldOffset(1, userNameOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} positionOffset
 */
com.miti99.netty.fbs.Player.addPosition = function(builder, positionOffset) {
  builder.addFieldStruct(2, positionOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} rotation
 */
com.miti99.netty.fbs.Player.addRotation = function(builder, rotation) {
  builder.addFieldFloat64(3, rotation, 0.0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} team
 */
com.miti99.netty.fbs.Player.addTeam = function(builder, team) {
  builder.addFieldInt32(4, team, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
com.miti99.netty.fbs.Player.endPlayer = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} userId
 * @param {flatbuffers.Offset} userNameOffset
 * @param {flatbuffers.Offset} positionOffset
 * @param {number} rotation
 * @param {number} team
 * @returns {flatbuffers.Offset}
 */
com.miti99.netty.fbs.Player.createPlayer = function(builder, userId, userNameOffset, positionOffset, rotation, team) {
  com.miti99.netty.fbs.Player.startPlayer(builder);
  com.miti99.netty.fbs.Player.addUserId(builder, userId);
  com.miti99.netty.fbs.Player.addUserName(builder, userNameOffset);
  com.miti99.netty.fbs.Player.addPosition(builder, positionOffset);
  com.miti99.netty.fbs.Player.addRotation(builder, rotation);
  com.miti99.netty.fbs.Player.addTeam(builder, team);
  return com.miti99.netty.fbs.Player.endPlayer(builder);
}

/**
 * @constructor
 */
com.miti99.netty.fbs.LoginRequest = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {com.miti99.netty.fbs.LoginRequest}
 */
com.miti99.netty.fbs.LoginRequest.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {com.miti99.netty.fbs.LoginRequest=} obj
 * @returns {com.miti99.netty.fbs.LoginRequest}
 */
com.miti99.netty.fbs.LoginRequest.getRootAsLoginRequest = function(bb, obj) {
  return (obj || new com.miti99.netty.fbs.LoginRequest).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {com.miti99.netty.fbs.LoginRequest=} obj
 * @returns {com.miti99.netty.fbs.LoginRequest}
 */
com.miti99.netty.fbs.LoginRequest.getSizePrefixedRootAsLoginRequest = function(bb, obj) {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new com.miti99.netty.fbs.LoginRequest).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns {number}
 */
com.miti99.netty.fbs.LoginRequest.prototype.userId = function() {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Builder} builder
 */
com.miti99.netty.fbs.LoginRequest.startLoginRequest = function(builder) {
  builder.startObject(1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} userId
 */
com.miti99.netty.fbs.LoginRequest.addUserId = function(builder, userId) {
  builder.addFieldInt32(0, userId, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
com.miti99.netty.fbs.LoginRequest.endLoginRequest = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} userId
 * @returns {flatbuffers.Offset}
 */
com.miti99.netty.fbs.LoginRequest.createLoginRequest = function(builder, userId) {
  com.miti99.netty.fbs.LoginRequest.startLoginRequest(builder);
  com.miti99.netty.fbs.LoginRequest.addUserId(builder, userId);
  return com.miti99.netty.fbs.LoginRequest.endLoginRequest(builder);
}

/**
 * @constructor
 */
com.miti99.netty.fbs.LoginResponse = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {com.miti99.netty.fbs.LoginResponse}
 */
com.miti99.netty.fbs.LoginResponse.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {com.miti99.netty.fbs.LoginResponse=} obj
 * @returns {com.miti99.netty.fbs.LoginResponse}
 */
com.miti99.netty.fbs.LoginResponse.getRootAsLoginResponse = function(bb, obj) {
  return (obj || new com.miti99.netty.fbs.LoginResponse).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {com.miti99.netty.fbs.LoginResponse=} obj
 * @returns {com.miti99.netty.fbs.LoginResponse}
 */
com.miti99.netty.fbs.LoginResponse.getSizePrefixedRootAsLoginResponse = function(bb, obj) {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new com.miti99.netty.fbs.LoginResponse).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {com.miti99.netty.fbs.Player=} obj
 * @returns {com.miti99.netty.fbs.Player|null}
 */
com.miti99.netty.fbs.LoginResponse.prototype.player = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? (obj || new com.miti99.netty.fbs.Player).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
com.miti99.netty.fbs.LoginResponse.startLoginResponse = function(builder) {
  builder.startObject(1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} playerOffset
 */
com.miti99.netty.fbs.LoginResponse.addPlayer = function(builder, playerOffset) {
  builder.addFieldOffset(0, playerOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
com.miti99.netty.fbs.LoginResponse.endLoginResponse = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} playerOffset
 * @returns {flatbuffers.Offset}
 */
com.miti99.netty.fbs.LoginResponse.createLoginResponse = function(builder, playerOffset) {
  com.miti99.netty.fbs.LoginResponse.startLoginResponse(builder);
  com.miti99.netty.fbs.LoginResponse.addPlayer(builder, playerOffset);
  return com.miti99.netty.fbs.LoginResponse.endLoginResponse(builder);
}

/**
 * @constructor
 */
com.miti99.netty.fbs.Packet = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {com.miti99.netty.fbs.Packet}
 */
com.miti99.netty.fbs.Packet.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {com.miti99.netty.fbs.Packet=} obj
 * @returns {com.miti99.netty.fbs.Packet}
 */
com.miti99.netty.fbs.Packet.getRootAsPacket = function(bb, obj) {
  return (obj || new com.miti99.netty.fbs.Packet).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {com.miti99.netty.fbs.Packet=} obj
 * @returns {com.miti99.netty.fbs.Packet}
 */
com.miti99.netty.fbs.Packet.getSizePrefixedRootAsPacket = function(bb, obj) {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new com.miti99.netty.fbs.Packet).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns {com.miti99.netty.fbs.PacketData}
 */
com.miti99.netty.fbs.Packet.prototype.dataType = function() {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? /** @type {com.miti99.netty.fbs.PacketData} */ (this.bb.readUint8(this.bb_pos + offset)) : com.miti99.netty.fbs.PacketData.NONE;
};

/**
 * @param {flatbuffers.Table} obj
 * @returns {?flatbuffers.Table}
 */
com.miti99.netty.fbs.Packet.prototype.data = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.__union(obj, this.bb_pos + offset) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
com.miti99.netty.fbs.Packet.startPacket = function(builder) {
  builder.startObject(2);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {com.miti99.netty.fbs.PacketData} dataType
 */
com.miti99.netty.fbs.Packet.addDataType = function(builder, dataType) {
  builder.addFieldInt8(0, dataType, com.miti99.netty.fbs.PacketData.NONE);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} dataOffset
 */
com.miti99.netty.fbs.Packet.addData = function(builder, dataOffset) {
  builder.addFieldOffset(1, dataOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
com.miti99.netty.fbs.Packet.endPacket = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
com.miti99.netty.fbs.Packet.finishPacketBuffer = function(builder, offset) {
  builder.finish(offset);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
com.miti99.netty.fbs.Packet.finishSizePrefixedPacketBuffer = function(builder, offset) {
  builder.finish(offset, undefined, true);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {com.miti99.netty.fbs.PacketData} dataType
 * @param {flatbuffers.Offset} dataOffset
 * @returns {flatbuffers.Offset}
 */
com.miti99.netty.fbs.Packet.createPacket = function(builder, dataType, dataOffset) {
  com.miti99.netty.fbs.Packet.startPacket(builder);
  com.miti99.netty.fbs.Packet.addDataType(builder, dataType);
  com.miti99.netty.fbs.Packet.addData(builder, dataOffset);
  return com.miti99.netty.fbs.Packet.endPacket(builder);
}

// Exports for Node.js and RequireJS
this.com = com;