gdjs.iniciar_32JogoCode = {};
gdjs.iniciar_32JogoCode.GDstartgameObjects1= [];
gdjs.iniciar_32JogoCode.GDstartgameObjects2= [];
gdjs.iniciar_32JogoCode.GDNewSpriteObjects1= [];
gdjs.iniciar_32JogoCode.GDNewSpriteObjects2= [];
gdjs.iniciar_32JogoCode.GDlogoObjects1= [];
gdjs.iniciar_32JogoCode.GDlogoObjects2= [];


gdjs.iniciar_32JogoCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "intro audio.mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.iniciar_32JogoCode.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.iniciar_32JogoCode.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs.iniciar_32JogoCode.GDNewSpriteObjects1[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.iniciar_32JogoCode.GDNewSpriteObjects1[k] = gdjs.iniciar_32JogoCode.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs.iniciar_32JogoCode.GDNewSpriteObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "loading", false);
}}

}


};

gdjs.iniciar_32JogoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.iniciar_32JogoCode.GDstartgameObjects1.length = 0;
gdjs.iniciar_32JogoCode.GDstartgameObjects2.length = 0;
gdjs.iniciar_32JogoCode.GDNewSpriteObjects1.length = 0;
gdjs.iniciar_32JogoCode.GDNewSpriteObjects2.length = 0;
gdjs.iniciar_32JogoCode.GDlogoObjects1.length = 0;
gdjs.iniciar_32JogoCode.GDlogoObjects2.length = 0;

gdjs.iniciar_32JogoCode.eventsList0(runtimeScene);

return;

}

gdjs['iniciar_32JogoCode'] = gdjs.iniciar_32JogoCode;
