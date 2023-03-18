let fbsSocket = new WebSocket("ws://localhost:1202/fbs");
fbsSocket.binaryType = 'arraybuffer';

fbsSocket.onopen = function () {
  sendFbs();
};

let sendFbs = function () {
  var builder = new flatbuffers.Builder(1024);
  var weaponOne = builder.createString('Sword');
  var weaponTwo = builder.createString('Axe');

// Create the first `Weapon` ('Sword').
  MyGame.Sample.Weapon.startWeapon(builder);
  MyGame.Sample.Weapon.addName(builder, weaponOne);
  MyGame.Sample.Weapon.addDamage(builder, 3);
  var sword = MyGame.Sample.Weapon.endWeapon(builder);

// Create the second `Weapon` ('Axe').
  MyGame.Sample.Weapon.startWeapon(builder);
  MyGame.Sample.Weapon.addName(builder, weaponTwo);
  MyGame.Sample.Weapon.addDamage(builder, 5);
  var axe = MyGame.Sample.Weapon.endWeapon(builder);
  // Serialize a name for our monster, called 'Orc'.
  var name = builder.createString('Orc');

// Create a `vector` representing the inventory of the Orc. Each number
// could correspond to an item that can be claimed after he is slain.
  var treasure = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var inv = MyGame.Sample.Monster.createInventoryVector(builder, treasure);
  // Create an array from the two `Weapon`s and pass it to the
// `createWeaponsVector()` method to create a FlatBuffer vector.
  var weaps = [sword, axe];
  var weapons = MyGame.Sample.Monster.createWeaponsVector(builder, weaps);
  MyGame.Sample.Monster.startPathVector(builder, 2);
  MyGame.Sample.Vec3.createVec3(builder, 1.0, 2.0, 3.0);
  MyGame.Sample.Vec3.createVec3(builder, 4.0, 5.0, 6.0);
  var path = builder.endVector();
  // Create our monster by using `startMonster()` and `endMonster()`.
  MyGame.Sample.Monster.startMonster(builder);
  MyGame.Sample.Monster.addPos(builder,
      MyGame.Sample.Vec3.createVec3(builder, 1.0, 2.0, 3.0));
  MyGame.Sample.Monster.addHp(builder, 300);
  MyGame.Sample.Monster.addColor(builder, MyGame.Sample.Color.Red)
  MyGame.Sample.Monster.addName(builder, name);
  MyGame.Sample.Monster.addInventory(builder, inv);
  MyGame.Sample.Monster.addWeapons(builder, weapons);
  MyGame.Sample.Monster.addEquippedType(builder,
      MyGame.Sample.Equipment.Weapon);
  MyGame.Sample.Monster.addEquipped(builder, axe);
  MyGame.Sample.Monster.addPath(builder, path);
  var orc = MyGame.Sample.Monster.endMonster(builder);
  MyGame.Sample.Monster.addEquippedType(builder,
      MyGame.Sample.Equipment.Weapon); // Union type
  MyGame.Sample.Monster.addEquipped(builder, axe); // Union data
  builder.finish(orc);

  var buf = builder.asUint8Array(); // Of type `Uint8Array`.

  console.log(buf);

  fbsSocket.send(buf);
}

let jsonSocket = new WebSocket("ws://localhost:1202/json");

jsonSocket.onopen = function () {
  sendJson();
};

let sendJson = function () {
  let data = {
    a: 1,
    b: true,
    c: [1, 2, 3],
    d: {
      e: 1,
    }
  }
  jsonSocket.send(JSON.stringify(data));
}
