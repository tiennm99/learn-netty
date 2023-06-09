// automatically generated by the FlatBuffers compiler, do not modify

package com.miti99.netty.fbs;

import java.nio.*;
import java.lang.*;
import java.util.*;
import com.google.flatbuffers.*;

@SuppressWarnings("unused")
public final class Player extends Table {
  public static void ValidateVersion() { Constants.FLATBUFFERS_1_12_0(); }
  public static Player getRootAsPlayer(ByteBuffer _bb) { return getRootAsPlayer(_bb, new Player()); }
  public static Player getRootAsPlayer(ByteBuffer _bb, Player obj) { _bb.order(ByteOrder.LITTLE_ENDIAN); return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb)); }
  public void __init(int _i, ByteBuffer _bb) { __reset(_i, _bb); }
  public Player __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  public int userId() { int o = __offset(4); return o != 0 ? bb.getInt(o + bb_pos) : 0; }
  public String userName() { int o = __offset(6); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer userNameAsByteBuffer() { return __vector_as_bytebuffer(6, 1); }
  public ByteBuffer userNameInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 6, 1); }
  public com.miti99.netty.fbs.Vec2 position() { return position(new com.miti99.netty.fbs.Vec2()); }
  public com.miti99.netty.fbs.Vec2 position(com.miti99.netty.fbs.Vec2 obj) { int o = __offset(8); return o != 0 ? obj.__assign(o + bb_pos, bb) : null; }
  public double rotation() { int o = __offset(10); return o != 0 ? bb.getDouble(o + bb_pos) : 0.0; }
  public int team() { int o = __offset(12); return o != 0 ? bb.getInt(o + bb_pos) : 0; }

  public static void startPlayer(FlatBufferBuilder builder) { builder.startTable(5); }
  public static void addUserId(FlatBufferBuilder builder, int userId) { builder.addInt(0, userId, 0); }
  public static void addUserName(FlatBufferBuilder builder, int userNameOffset) { builder.addOffset(1, userNameOffset, 0); }
  public static void addPosition(FlatBufferBuilder builder, int positionOffset) { builder.addStruct(2, positionOffset, 0); }
  public static void addRotation(FlatBufferBuilder builder, double rotation) { builder.addDouble(3, rotation, 0.0); }
  public static void addTeam(FlatBufferBuilder builder, int team) { builder.addInt(4, team, 0); }
  public static int endPlayer(FlatBufferBuilder builder) {
    int o = builder.endTable();
    return o;
  }

  public static final class Vector extends BaseVector {
    public Vector __assign(int _vector, int _element_size, ByteBuffer _bb) { __reset(_vector, _element_size, _bb); return this; }

    public Player get(int j) { return get(new Player(), j); }
    public Player get(Player obj, int j) {  return obj.__assign(__indirect(__element(j), bb), bb); }
  }
}

