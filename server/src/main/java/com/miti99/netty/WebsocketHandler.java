package com.miti99.netty;



import MyGame.Sample.Equipment;
import MyGame.Sample.Monster;
import MyGame.Sample.Weapon;
import io.netty.channel.ChannelHandler;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.ChannelInboundHandlerAdapter;
import io.netty.handler.codec.http.websocketx.TextWebSocketFrame;
import lombok.extern.slf4j.Slf4j;

@ChannelHandler.Sharable
@Slf4j
public class WebsocketHandler extends ChannelInboundHandlerAdapter {

  @Override
  public void channelRead(ChannelHandlerContext ctx, Object msg) {
    if (msg instanceof Monster monster) {
      var hp = monster.hp();
      var mana = monster.mana();
      var name = monster.name();

      log.info("hp : {}, mana : {}, name : {}", hp, mana, name);

      var pos = monster.pos();
      var x = pos.x();
      var y = pos.y();
      var z = pos.z();

      log.info("x : {}, y : {}, z : {}", x, y, z);

      var invLength = monster.inventoryLength();
      var thirdItem = monster.inventory(2);

      var weaponsLength = monster.weaponsLength();
      var secondWeaponName = monster.weapons(1).name();
      var secondWeaponDamage = monster.weapons(1).damage();

      log.info(
          "invLength : {}, thirdItem : {}, weaponsLength : {}, secondWeaponName : {}, secondWeaponDamage : {}",
          invLength, thirdItem, weaponsLength, secondWeaponName, secondWeaponDamage);

      var unionType = monster.equippedType();

      if (unionType == Equipment.Weapon) {
        var weapon = (Weapon) monster.equipped(new Weapon());

        var weaponName = weapon.name();    // "Axe"
        var weaponDamage = weapon.damage(); // 5

        log.info("weaponName : {}, weaponDamage : {}", weaponName, weaponDamage);
      }
    } else if (msg instanceof TextWebSocketFrame textWebSocketFrame) {
      log.info(textWebSocketFrame.text());
    }else {
      ctx.fireChannelRead(msg);
    }
  }

  @Override
  public void channelReadComplete(ChannelHandlerContext ctx) throws Exception {
    super.channelReadComplete(ctx);
    ctx.flush();
  }
}
