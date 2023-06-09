enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const teleporter = SpriteKind.create()
    export const teleporteur = SpriteKind.create()
    export const objectif = SpriteKind.create()
    export const enemy2 = SpriteKind.create()
    export const tuile = SpriteKind.create()
    export const object = SpriteKind.create()
    export const enemy3 = SpriteKind.create()
    export const cristalmagique = SpriteKind.create()
    export const boule = SpriteKind.create()
    export const mort = SpriteKind.create()
    export const champignon = SpriteKind.create()
    export const pierre = SpriteKind.create()
    export const enemy4 = SpriteKind.create()
    export const champi = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.tuile, function (sprite, otherSprite) {
    tiles.placeOnTile(Arlem, tiles.getTileLocation(28, 31))
    controller.moveSprite(Arlem, 0, 0)
    sprites.destroyAllSpritesOfKind(SpriteKind.tuile)
    sprites.destroyAllSpritesOfKind(SpriteKind.champignon)
    tiles.placeOnTile(Arlem, tiles.getTileLocation(1, 1))
    scene.cameraShake(15, 1000)
    sprites.destroyAllSpritesOfKind(SpriteKind.enemy4)
    tiles.placeOnTile(Arlem, tiles.getTileLocation(28, 31))
    tiles.setCurrentTilemap(tilemap`forêt magique de la fée Fitza 2 1`)
    controller.moveSprite(Arlem, 100, 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.teleporteur, function (sprite, otherSprite) {
    game.showLongText("ummmmmm c'était bizarrement facile", DialogLayout.Full)
    game.showLongText("bon je vais pas m'en plaindre mais bon il est partit ou Zarlenem", DialogLayout.Full)
    sprites.destroy(mySprite3)
    tiles.setCurrentTilemap(tilemap`forêt magique de la fée Fitza3`)
    sprites.destroyAllSpritesOfKind(SpriteKind.object)
    tiles.placeOnTile(Arlem, tiles.getTileLocation(2, 2))
    Zarlenem = sprites.create(img`
        ..................................
        ..................................
        ..................................
        ..................................
        ..................................
        ..................................
        ..................................
        ..................................
        ......aaaa........................
        ......faaaa.......................
        ......ffffaa......................
        ..222.fffffaa.....................
        .22222ffffffaa....................
        .22222ffffffaaaaaaaaaaaaaa........
        .22222fffffffffffffffffffaa.......
        .22222dfffffffffffffffffffa.......
        222222dfffffffffffffffffffa.......
        222222dfffffffffffffffffffafaaaaa1
        222ddddfffffffffffffffffffaffffff1
        .22...fffafffffaffffffffffaffffff1
        ......fffafffffaffffffffffaffffff1
        ......fffa..fffa......ffffa.......
        ......fffa..fffa......ffffaaaaaaa1
        ......fffa..dddd......fffffffffff1
        ......dddd..dddd......fffffffffff1
        ......dddd.............ffffffffff1
        ..................................
        ..................................
        ..................................
        ..................................
        ..................................
        ..................................
        ..................................
        ..................................
        `, SpriteKind.enemy2)
    tiles.placeOnTile(Zarlenem, tiles.getTileLocation(29, 31))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.boule, function (sprite, otherSprite) {
    controller.startLightPulse(0xff0000, 500)
    statusbar.value += -10
    pause(1000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.champignon, function (sprite, otherSprite) {
    statusbar.value += -4
    pause(1000)
    statusbar.value += -2
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Arlem)
    Arlem.setImage(assets.image`Arlem de coté droit sur place`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorDark0, function (sprite, location) {
    scene.cameraShake(10, 1000)
    controller.startLightPulse(0xff0000, 1000)
    tiles.placeOnTile(Arlem, tiles.getTileLocation(13, 6))
    tiles.placeOnTile(Zarlenem_infecté, tiles.getTileLocation(1, 1))
    scene.cameraShake(10, 1000)
    tiles.setCurrentTilemap(tilemap`niveau du gardien2`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.enemy2, function (sprite, otherSprite) {
    sprites.destroy(mySprite4)
    tiles.placeOnTile(Arlem, tiles.getTileLocation(24, 31))
    scene.cameraFollowSprite(Zarlenem)
    game.showLongText("vaaaaaaaaaa tttttt'eeeeennnnn aaaaahhhhhhhhhhhhhhhhhhhhh", DialogLayout.Top)
    Zarlenem.setImage(assets.image`Zarlenem a quatre patte`)
    game.showLongText("Qu'est-ce qui ce passe!", DialogLayout.Bottom)
    game.showLongText("Zarlenem!!", DialogLayout.Bottom)
    Zarlenem.setImage(assets.image`Zarlenem sur les genou`)
    game.showLongText("euh Zarlenem?", DialogLayout.Bottom)
    Zarlenem.setImage(assets.image`Zarlenem sur 1 genou`)
    game.showLongText("Qu'est-ce qu t'arrive", DialogLayout.Bottom)
    Zarlenem.setImage(assets.image`Zarlenem debout`)
    game.showLongText("répond moi bon sens!", DialogLayout.Bottom)
    Zarlenem.setImage(assets.image`Zarlenem infecté`)
    sprites.destroy(Zarlenem)
    Zarlenem_infecté = sprites.create(assets.image`Zarlenem infecté`, SpriteKind.enemy3)
    tiles.setCurrentTilemap(tilemap`forêt magique de la fée Fitza4`)
    tiles.placeOnTile(Zarlenem_infecté, tiles.getTileLocation(31, 30))
    scene.cameraFollowSprite(Arlem)
    controller.startLightPulse(0xffffff, 1000)
    scene.cameraShake(10, 1000)
    Zarlenem_infecté.follow(Arlem, 75)
    controller.moveSprite(Arlem, 125, 125)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile12`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`écran noir`)
    game.showLongText("bon, tu vas me racconter maintenant", DialogLayout.Bottom)
    game.showLongText("Oui, attend un peu Arlem", DialogLayout.Top)
    tiles.setCurrentTilemap(tilemap`niveau10`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.object, function (sprite, otherSprite) {
    tiles.setCurrentTilemap(tilemap`forêt magique de la fée Fitza 2 1`)
    tiles.placeOnTile(Guardien_de_la_forêt, tiles.getTileLocation(30, 32))
    tuileverte = sprites.create(img`
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        `, SpriteKind.tuile)
    tuileverte2 = sprites.create(img`
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        `, SpriteKind.tuile)
    tiles.placeOnTile(tuileverte, tiles.getTileLocation(29, 31))
    tiles.placeOnTile(tuileverte2, tiles.getTileLocation(29, 32))
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.shrub, function (sprite, location) {
    scene.cameraShake(10, 1000)
    controller.startLightPulse(0xff0000, 1000)
    tiles.placeOnTile(Arlem, tiles.getTileLocation(19, 1))
    tiles.placeOnTile(Zarlenem_infecté, tiles.getTileLocation(38, 1))
    scene.cameraShake(10, 1000)
    tiles.setCurrentTilemap(tilemap`niveau du gardien3`)
    cristal2 = sprites.create(assets.image`cristal plasmatique`, SpriteKind.cristalmagique)
    tiles.placeOnRandomTile(cristal2, assets.tile`myTile`)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Arlem,
    assets.animation`Arlem de face mouvement`,
    110,
    controller.down.isPressed()
    )
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Arlem)
    Arlem.setImage(assets.image`Arlem de dos sur place`)
})
info.onCountdownEnd(function () {
    game.showLongText("Va récupérer la pierre de la foudre des enfer c'est le point faible du gardien", DialogLayout.Center)
    point_faible_gardien = sprites.create(assets.image`pierre de la foudre des enfer`, SpriteKind.pierre)
    tiles.placeOnRandomTile(point_faible_gardien, sprites.dungeon.floorLight2)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.pierre, function (sprite, otherSprite) {
    tiles.setCurrentTilemap(tilemap`écran noir`)
    sprites.destroyAllSpritesOfKind(SpriteKind.boule)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    sprites.destroyAllSpritesOfKind(SpriteKind.enemy2)
    sprites.destroyAllSpritesOfKind(SpriteKind.enemy3)
    sprites.destroyAllSpritesOfKind(SpriteKind.pierre)
    Zarlenem.setVelocity(0, 0)
    Zarlenem = sprites.create(assets.image`Zarlenem a quatre patte`, SpriteKind.enemy3)
    tiles.placeOnTile(Arlem, tiles.getTileLocation(26, 22))
    tiles.placeOnTile(Zarlenem, tiles.getTileLocation(28, 22))
    scene.cameraFollowSprite(Arlem)
    game.showLongText("nooooooooooooooon! mon point faible!", DialogLayout.Center)
    tiles.setCurrentTilemap(tilemap`niveau de fin`)
    game.showLongText("eum, ça va Zarlenem?", DialogLayout.Bottom)
    game.showLongText("oui je me sens juste un peut étourdi", DialogLayout.Top)
    game.showLongText("c'est bon a savoir. Mais pourquoi est tu venu ici?", DialogLayout.Bottom)
    game.showLongText("on pourrai en parler plus tard Arlem", DialogLayout.Top)
    game.showLongText("d'accord mon frère est tu en mesure de marcher?", DialogLayout.Bottom)
    game.showLongText("Oui", DialogLayout.Top)
    game.showLongText("Une longue marche plus tard", DialogLayout.Full)
    tiles.setCurrentTilemap(tilemap`niveau5`)
    Zarlenem.setImage(assets.image`Zarlenem`)
    Zarlenem.follow(Arlem)
    tiles.placeOnTile(Arlem, tiles.getTileLocation(13, 28))
    game.showLongText("dirige toi vers la maison", DialogLayout.Center)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Arlem,
    assets.animation`Arlem de dos mouvement`,
    110,
    controller.up.isPressed()
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.champi, function (sprite, otherSprite) {
    game.showLongText("Un champignon cracheur de spore empoisonné, je ne devrai pas y toucher", DialogLayout.Bottom)
    sprites.destroy(champignon_cracheur_de_spore6)
    champignon_cracheur_de_spore6 = sprites.create(img`
        . . . . . . . . . . . 
        . . . . . . . . . . . 
        . . . . . . . . . . . 
        . . . . 4 4 4 . . . . 
        . . . 4 4 4 4 4 . . . 
        . . 4 4 4 4 4 4 4 . . 
        . . 5 5 5 5 4 4 4 . . 
        . . 5 5 5 5 5 5 5 . . 
        . . . . 1 1 1 . . . . 
        . . . . 1 1 1 . . . . 
        . . . . 1 1 1 . . . . 
        `, SpriteKind.champignon)
    tiles.placeOnTile(champignon_cracheur_de_spore6, tiles.getTileLocation(6, 3))
    tiles.placeOnTile(Arlem, tiles.getTileLocation(4, 3))
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.gameOver(false)
})
sprites.onDestroyed(SpriteKind.enemy4, function (sprite) {
    mySprite3 = sprites.create(assets.image`Gardien de la forêt brisée`, SpriteKind.Player)
    tiles.placeOnTile(mySprite3, tiles.getTileLocation(32, 32))
    mySprite4 = sprites.create(assets.image`teleporteur pour niveau3`, SpriteKind.teleporteur)
    tiles.placeOnTile(mySprite4, tiles.getTileLocation(31, 31))
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath5, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.object)
    scene.cameraShake(10, 1000)
    controller.startLightPulse(0xff0000, 1000)
    tiles.placeOnTile(Arlem, tiles.getTileLocation(16, 16))
    tiles.placeOnTile(Zarlenem_infecté, tiles.getTileLocation(27, 1))
    tiles.setCurrentTilemap(tilemap`niveau du gardien1`)
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Arlem)
    Arlem.setImage(assets.image`Arlem de face sur place`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Arlem,
    assets.animation`Arlem de coté droit mouvement`,
    110,
    controller.right.isPressed()
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.showLongText("ah te voici Zarlenem", DialogLayout.Bottom)
    game.showLongText("mon frère que fais-tu ici je te cherchais", DialogLayout.Bottom)
    tiles.setCurrentTilemap(tilemap`forêt magique de la fée Fitza3 1`)
    tiles.placeOnTile(Zarlenem, tiles.getTileLocation(29, 31))
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Arlem)
    Arlem.setImage(assets.image`Arlem de coté gauche sur place`)
})
controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Arlem)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.enemy3, function (sprite, otherSprite) {
    controller.startLightPulse(0xff0000, 500)
    statusbar.value += -25
    Zarlenem_infecté.follow(Arlem, 0)
    pause(1000)
    Zarlenem_infecté.follow(Arlem, 75)
    pause(500)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Arlem,
    assets.animation`Arlem de coté gauche mouvement`,
    110,
    controller.left.isPressed()
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    tiles.setCurrentTilemap(tilemap`forêt magique de la fée Fitza2`)
    tiles.placeOnRandomTile(champignon_cracheur_de_spore, sprites.castle.tileDarkGrass1)
    tiles.placeOnRandomTile(champignon_cracheur_de_spore2, sprites.castle.tileDarkGrass1)
    tiles.placeOnRandomTile(champignon_cracheur_de_spore3, sprites.castle.tileDarkGrass1)
    tiles.placeOnRandomTile(champignon_cracheur_de_spore4, sprites.castle.tileDarkGrass1)
    tiles.placeOnRandomTile(champignon_cracheur_de_spore5, sprites.castle.tileDarkGrass1)
    scene.cameraShake(10, 2000)
    game.showLongText("Vous ressentez une force inconnue qui semble modifier la carte ", DialogLayout.Center)
    game.showLongText("Trouve le cristal du vent et grâce à sa puissance dégage le gardien", DialogLayout.Center)
    cristal = sprites.create(assets.image`Cristal du vent`, SpriteKind.object)
    tiles.placeOnRandomTile(cristal, assets.tile`myTile0`)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    Guardien_de_la_forêt = sprites.create(assets.image`Gardien de la forêt`, SpriteKind.enemy4)
    tiles.placeOnTile(Guardien_de_la_forêt, tiles.getTileLocation(29, 31))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.cristalmagique, function (sprite, otherSprite) {
    controller.moveSprite(Arlem, 100, 100)
    sprites.destroy(Zarlenem_infecté)
    tiles.setCurrentTilemap(tilemap`Domaine du gardien`)
    sprites.destroyAllSpritesOfKind(SpriteKind.cristalmagique)
    tiles.placeOnTile(Arlem, tiles.getTileLocation(5, 9))
    game.showLongText("bienvenue dans mon domaine", DialogLayout.Top)
    game.showLongText("comme tu peux le voir il a quelques tuile plus sombre", DialogLayout.Bottom)
    game.showLongText("si je serai toi je ni toucherai pas", DialogLayout.Bottom)
    game.showLongText("maintenant place au spectacle!", DialogLayout.Center)
    boule_mortel = sprites.create(assets.image`boule piquante`, SpriteKind.boule)
    tiles.placeOnTile(Arlem, tiles.getTileLocation(15, 16))
    tiles.placeOnTile(boule_mortel, tiles.getTileLocation(2, 17))
    boule_mortel.setBounceOnWall(true)
    boule_mortel.setVelocity(60, 60)
    pause(10000)
    game.showLongText("pourquoi pas en ajouter!", DialogLayout.Top)
    boule_mortel2 = sprites.create(assets.image`boule piquante`, SpriteKind.boule)
    tiles.placeOnTile(boule_mortel2, tiles.getTileLocation(3, 17))
    boule_mortel2.setBounceOnWall(true)
    boule_mortel.setVelocity(70, 70)
    info.startCountdown(60)
    pause(10000)
    game.showLongText("tu en veux encore? En voilà une autre!", DialogLayout.Bottom)
    boule_mortel3 = sprites.create(assets.image`boule piquante`, SpriteKind.boule)
    tiles.placeOnTile(boule_mortel3, tiles.getTileLocation(4, 17))
    boule_mortel3.setBounceOnWall(true)
    boule_mortel3.setVelocity(80, 80)
    pause(10000)
    game.showLongText("encore!", DialogLayout.Bottom)
    boule_mortel4 = sprites.create(assets.image`boule piquante`, SpriteKind.boule)
    tiles.placeOnTile(boule_mortel4, tiles.getTileLocation(5, 17))
    boule_mortel4.setBounceOnWall(true)
    boule_mortel4.setVelocity(90, 90)
    pause(5000)
    game.showLongText("Puis une autre pour terminer", DialogLayout.Bottom)
    boule_mortel5 = sprites.create(assets.image`boule piquante`, SpriteKind.boule)
    tiles.placeOnTile(boule_mortel5, tiles.getTileLocation(6, 17))
    boule_mortel5.setBounceOnWall(true)
    boule_mortel5.setVelocity(100, 100)
})
let boule_mortel5: Sprite = null
let boule_mortel4: Sprite = null
let boule_mortel3: Sprite = null
let boule_mortel2: Sprite = null
let boule_mortel: Sprite = null
let cristal: Sprite = null
let point_faible_gardien: Sprite = null
let cristal2: Sprite = null
let tuileverte2: Sprite = null
let tuileverte: Sprite = null
let mySprite4: Sprite = null
let Zarlenem_infecté: Sprite = null
let Zarlenem: Sprite = null
let mySprite3: Sprite = null
let champignon_cracheur_de_spore6: Sprite = null
let champignon_cracheur_de_spore5: Sprite = null
let champignon_cracheur_de_spore4: Sprite = null
let champignon_cracheur_de_spore3: Sprite = null
let champignon_cracheur_de_spore2: Sprite = null
let champignon_cracheur_de_spore: Sprite = null
let Guardien_de_la_forêt: Sprite = null
let Arlem: Sprite = null
let statusbar: StatusBarSprite = null
statusbar = statusbars.create(136, 8, StatusBarKind.Health)
statusbar.attachToSprite(Arlem, 0, 0)
statusbar.positionDirection(CollisionDirection.Bottom)
statusbar.setBarBorder(2, 15)
statusbar.setLabel("HP", 15)
statusbar.value = 100
game.showLongText("Bon il est partit ou mon frère. Je dois le retrouver", DialogLayout.Full)
tiles.setTilemap(tilemap`forêt magique de la fée Fitza1`)
music.play(music.createSong(assets.song`mySong`), music.PlaybackMode.LoopingInBackground)
Arlem = sprites.create(assets.image`Arlem`, SpriteKind.Player)
Guardien_de_la_forêt = sprites.create(assets.image`Gardien de la forêt`, SpriteKind.Enemy)
champignon_cracheur_de_spore = sprites.create(assets.image`champignon cracheur de spore`, SpriteKind.champignon)
champignon_cracheur_de_spore2 = sprites.create(assets.image`champignon cracheur de spore2`, SpriteKind.champignon)
champignon_cracheur_de_spore3 = sprites.create(assets.image`champignon cracheur de spore3`, SpriteKind.champignon)
champignon_cracheur_de_spore4 = sprites.create(assets.image`champignon cracheur de spore4`, SpriteKind.champignon)
champignon_cracheur_de_spore5 = sprites.create(assets.image`champignon cracheur de spore5`, SpriteKind.champignon)
champignon_cracheur_de_spore6 = sprites.create(assets.image`champignon cracheur de spore6`, SpriteKind.champi)
tiles.placeOnRandomTile(champignon_cracheur_de_spore, sprites.castle.tileDarkGrass1)
tiles.placeOnRandomTile(champignon_cracheur_de_spore2, sprites.castle.tileDarkGrass1)
tiles.placeOnRandomTile(champignon_cracheur_de_spore3, sprites.castle.tileDarkGrass1)
tiles.placeOnRandomTile(champignon_cracheur_de_spore4, sprites.castle.tileDarkGrass1)
tiles.placeOnRandomTile(champignon_cracheur_de_spore5, sprites.castle.tileDarkGrass1)
tiles.placeOnTile(champignon_cracheur_de_spore6, tiles.getTileLocation(6, 3))
tiles.placeOnTile(Arlem, tiles.getTileLocation(2, 2))
tiles.placeOnTile(Guardien_de_la_forêt, tiles.getTileLocation(29, 31))
controller.moveSprite(Arlem)
scene.cameraFollowSprite(Arlem)
