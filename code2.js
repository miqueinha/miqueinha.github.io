gdjs.Instru_231_245esCode = {};
gdjs.Instru_231_245esCode.GDNewSpriteObjects1= [];
gdjs.Instru_231_245esCode.GDNewSpriteObjects2= [];
gdjs.Instru_231_245esCode.GDtwoplayersObjects1= [];
gdjs.Instru_231_245esCode.GDtwoplayersObjects2= [];
gdjs.Instru_231_245esCode.GDtwoplayers2Objects1= [];
gdjs.Instru_231_245esCode.GDtwoplayers2Objects2= [];
gdjs.Instru_231_245esCode.GDtwoplayers3Objects1= [];
gdjs.Instru_231_245esCode.GDtwoplayers3Objects2= [];


gdjs.Instru_231_245esCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "menu .mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("twoplayers"), gdjs.Instru_231_245esCode.GDtwoplayersObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Instru_231_245esCode.GDtwoplayersObjects1.length;i<l;++i) {
    if ( gdjs.Instru_231_245esCode.GDtwoplayersObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Instru_231_245esCode.GDtwoplayersObjects1[k] = gdjs.Instru_231_245esCode.GDtwoplayersObjects1[i];
        ++k;
    }
}
gdjs.Instru_231_245esCode.GDtwoplayersObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(2);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "A Saga de um Miqueinha", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("twoplayers2"), gdjs.Instru_231_245esCode.GDtwoplayers2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Instru_231_245esCode.GDtwoplayers2Objects1.length;i<l;++i) {
    if ( gdjs.Instru_231_245esCode.GDtwoplayers2Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Instru_231_245esCode.GDtwoplayers2Objects1[k] = gdjs.Instru_231_245esCode.GDtwoplayers2Objects1[i];
        ++k;
    }
}
gdjs.Instru_231_245esCode.GDtwoplayers2Objects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(3);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "A Saga de um Miqueinha", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("twoplayers3"), gdjs.Instru_231_245esCode.GDtwoplayers3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Instru_231_245esCode.GDtwoplayers3Objects1.length;i<l;++i) {
    if ( gdjs.Instru_231_245esCode.GDtwoplayers3Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Instru_231_245esCode.GDtwoplayers3Objects1[k] = gdjs.Instru_231_245esCode.GDtwoplayers3Objects1[i];
        ++k;
    }
}
gdjs.Instru_231_245esCode.GDtwoplayers3Objects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(4);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "A Saga de um Miqueinha", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Instru_231_245esCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Instru_231_245esCode.GDNewSpriteObjects1.length = 0;
gdjs.Instru_231_245esCode.GDNewSpriteObjects2.length = 0;
gdjs.Instru_231_245esCode.GDtwoplayersObjects1.length = 0;
gdjs.Instru_231_245esCode.GDtwoplayersObjects2.length = 0;
gdjs.Instru_231_245esCode.GDtwoplayers2Objects1.length = 0;
gdjs.Instru_231_245esCode.GDtwoplayers2Objects2.length = 0;
gdjs.Instru_231_245esCode.GDtwoplayers3Objects1.length = 0;
gdjs.Instru_231_245esCode.GDtwoplayers3Objects2.length = 0;

gdjs.Instru_231_245esCode.eventsList0(runtimeScene);

return;

}

gdjs['Instru_231_245esCode'] = gdjs.Instru_231_245esCode;
