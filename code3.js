gdjs.loadingCode = {};
gdjs.loadingCode.GDBGObjects1= [];
gdjs.loadingCode.GDBGObjects2= [];
gdjs.loadingCode.GDpillObjects1= [];
gdjs.loadingCode.GDpillObjects2= [];
gdjs.loadingCode.GDpulicaObjects1= [];
gdjs.loadingCode.GDpulicaObjects2= [];
gdjs.loadingCode.GDredpillmanObjects1= [];
gdjs.loadingCode.GDredpillmanObjects2= [];
gdjs.loadingCode.GDmanginaldoObjects1= [];
gdjs.loadingCode.GDmanginaldoObjects2= [];
gdjs.loadingCode.GDzeObjects1= [];
gdjs.loadingCode.GDzeObjects2= [];
gdjs.loadingCode.GDMSOLObjects1= [];
gdjs.loadingCode.GDMSOLObjects2= [];
gdjs.loadingCode.GDcolissionObjects1= [];
gdjs.loadingCode.GDcolissionObjects2= [];
gdjs.loadingCode.GDleftcollisionObjects1= [];
gdjs.loadingCode.GDleftcollisionObjects2= [];
gdjs.loadingCode.GDfloorObjects1= [];
gdjs.loadingCode.GDfloorObjects2= [];
gdjs.loadingCode.GDjumpsceneObjects1= [];
gdjs.loadingCode.GDjumpsceneObjects2= [];
gdjs.loadingCode.GDlogoObjects1= [];
gdjs.loadingCode.GDlogoObjects2= [];


gdjs.loadingCode.mapOfGDgdjs_9546loadingCode_9546GDmanginaldoObjects1Objects = Hashtable.newFrom({"manginaldo": gdjs.loadingCode.GDmanginaldoObjects1});
gdjs.loadingCode.mapOfGDgdjs_9546loadingCode_9546GDcolissionObjects1Objects = Hashtable.newFrom({"colission": gdjs.loadingCode.GDcolissionObjects1});
gdjs.loadingCode.mapOfGDgdjs_9546loadingCode_9546GDpillObjects1Objects = Hashtable.newFrom({"pill": gdjs.loadingCode.GDpillObjects1});
gdjs.loadingCode.mapOfGDgdjs_9546loadingCode_9546GDleftcollisionObjects1Objects = Hashtable.newFrom({"leftcollision": gdjs.loadingCode.GDleftcollisionObjects1});
gdjs.loadingCode.mapOfGDgdjs_9546loadingCode_9546GDmanginaldoObjects1Objects = Hashtable.newFrom({"manginaldo": gdjs.loadingCode.GDmanginaldoObjects1});
gdjs.loadingCode.mapOfGDgdjs_9546loadingCode_9546GDpillObjects1Objects = Hashtable.newFrom({"pill": gdjs.loadingCode.GDpillObjects1});
gdjs.loadingCode.asyncCallback13027692 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("colission"), gdjs.loadingCode.GDcolissionObjects2);
gdjs.copyArray(asyncObjectsList.getObjects("manginaldo"), gdjs.loadingCode.GDmanginaldoObjects2);

{for(var i = 0, len = gdjs.loadingCode.GDmanginaldoObjects2.length ;i < len;++i) {
    gdjs.loadingCode.GDmanginaldoObjects2[i].returnVariable(gdjs.loadingCode.GDmanginaldoObjects2[i].getVariables().getFromIndex(0)).setString("Right");
}
}{for(var i = 0, len = gdjs.loadingCode.GDcolissionObjects2.length ;i < len;++i) {
    gdjs.loadingCode.GDcolissionObjects2[i].deleteFromScene(runtimeScene);
}
}}
gdjs.loadingCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.loadingCode.GDmanginaldoObjects1) asyncObjectsList.addObject("manginaldo", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.loadingCode.asyncCallback13027692(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.loadingCode.mapOfGDgdjs_9546loadingCode_9546GDmanginaldoObjects1Objects = Hashtable.newFrom({"manginaldo": gdjs.loadingCode.GDmanginaldoObjects1});
gdjs.loadingCode.mapOfGDgdjs_9546loadingCode_9546GDjumpsceneObjects1Objects = Hashtable.newFrom({"jumpscene": gdjs.loadingCode.GDjumpsceneObjects1});
gdjs.loadingCode.mapOfGDgdjs_9546loadingCode_9546GDpulicaObjects1ObjectsGDgdjs_9546loadingCode_9546GDzeObjects1ObjectsGDgdjs_9546loadingCode_9546GDMSOLObjects1Objects = Hashtable.newFrom({"pulica": gdjs.loadingCode.GDpulicaObjects1, "ze": gdjs.loadingCode.GDzeObjects1, "MSOL": gdjs.loadingCode.GDMSOLObjects1});
gdjs.loadingCode.mapOfGDgdjs_9546loadingCode_9546GDcolissionObjects1Objects = Hashtable.newFrom({"colission": gdjs.loadingCode.GDcolissionObjects1});
gdjs.loadingCode.mapOfGDgdjs_9546loadingCode_9546GDpulicaObjects1ObjectsGDgdjs_9546loadingCode_9546GDzeObjects1ObjectsGDgdjs_9546loadingCode_9546GDMSOLObjects1Objects = Hashtable.newFrom({"pulica": gdjs.loadingCode.GDpulicaObjects1, "ze": gdjs.loadingCode.GDzeObjects1, "MSOL": gdjs.loadingCode.GDMSOLObjects1});
gdjs.loadingCode.mapOfGDgdjs_9546loadingCode_9546GDleftcollisionObjects1Objects = Hashtable.newFrom({"leftcollision": gdjs.loadingCode.GDleftcollisionObjects1});
gdjs.loadingCode.mapOfGDgdjs_9546loadingCode_9546GDpulicaObjects1ObjectsGDgdjs_9546loadingCode_9546GDzeObjects1ObjectsGDgdjs_9546loadingCode_9546GDMSOLObjects1Objects = Hashtable.newFrom({"pulica": gdjs.loadingCode.GDpulicaObjects1, "ze": gdjs.loadingCode.GDzeObjects1, "MSOL": gdjs.loadingCode.GDMSOLObjects1});
gdjs.loadingCode.mapOfGDgdjs_9546loadingCode_9546GDleftcollisionObjects1Objects = Hashtable.newFrom({"leftcollision": gdjs.loadingCode.GDleftcollisionObjects1});
gdjs.loadingCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Action magical background Music   Cartoon Pursuit.mp3", false, 60, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("manginaldo"), gdjs.loadingCode.GDmanginaldoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.loadingCode.GDmanginaldoObjects1.length;i<l;++i) {
    if ( gdjs.loadingCode.GDmanginaldoObjects1[i].getVariableString(gdjs.loadingCode.GDmanginaldoObjects1[i].getVariables().getFromIndex(0)) == "Right" ) {
        isConditionTrue_0 = true;
        gdjs.loadingCode.GDmanginaldoObjects1[k] = gdjs.loadingCode.GDmanginaldoObjects1[i];
        ++k;
    }
}
gdjs.loadingCode.GDmanginaldoObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.loadingCode.GDmanginaldoObjects1 */
{for(var i = 0, len = gdjs.loadingCode.GDmanginaldoObjects1.length ;i < len;++i) {
    gdjs.loadingCode.GDmanginaldoObjects1[i].addForce(155, 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("manginaldo"), gdjs.loadingCode.GDmanginaldoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.loadingCode.GDmanginaldoObjects1.length;i<l;++i) {
    if ( gdjs.loadingCode.GDmanginaldoObjects1[i].getVariableString(gdjs.loadingCode.GDmanginaldoObjects1[i].getVariables().getFromIndex(0)) == "Left" ) {
        isConditionTrue_0 = true;
        gdjs.loadingCode.GDmanginaldoObjects1[k] = gdjs.loadingCode.GDmanginaldoObjects1[i];
        ++k;
    }
}
gdjs.loadingCode.GDmanginaldoObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.loadingCode.GDmanginaldoObjects1 */
{for(var i = 0, len = gdjs.loadingCode.GDmanginaldoObjects1.length ;i < len;++i) {
    gdjs.loadingCode.GDmanginaldoObjects1[i].addForce(-(155), 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("colission"), gdjs.loadingCode.GDcolissionObjects1);
gdjs.copyArray(runtimeScene.getObjects("manginaldo"), gdjs.loadingCode.GDmanginaldoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.loadingCode.mapOfGDgdjs_9546loadingCode_9546GDmanginaldoObjects1Objects, gdjs.loadingCode.mapOfGDgdjs_9546loadingCode_9546GDcolissionObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.loadingCode.GDmanginaldoObjects1 */
gdjs.loadingCode.GDleftcollisionObjects1.length = 0;

gdjs.loadingCode.GDpillObjects1.length = 0;

{for(var i = 0, len = gdjs.loadingCode.GDmanginaldoObjects1.length ;i < len;++i) {
    gdjs.loadingCode.GDmanginaldoObjects1[i].flipX(true);
}
}{for(var i = 0, len = gdjs.loadingCode.GDmanginaldoObjects1.length ;i < len;++i) {
    gdjs.loadingCode.GDmanginaldoObjects1[i].returnVariable(gdjs.loadingCode.GDmanginaldoObjects1[i].getVariables().getFromIndex(0)).setString("Left");
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.loadingCode.mapOfGDgdjs_9546loadingCode_9546GDpillObjects1Objects, 255, 576, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.loadingCode.mapOfGDgdjs_9546loadingCode_9546GDleftcollisionObjects1Objects, 550, 608, "");
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("manginaldo"), gdjs.loadingCode.GDmanginaldoObjects1);
gdjs.copyArray(runtimeScene.getObjects("pill"), gdjs.loadingCode.GDpillObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.loadingCode.mapOfGDgdjs_9546loadingCode_9546GDmanginaldoObjects1Objects, gdjs.loadingCode.mapOfGDgdjs_9546loadingCode_9546GDpillObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.loadingCode.GDmanginaldoObjects1 */
/* Reuse gdjs.loadingCode.GDpillObjects1 */
{for(var i = 0, len = gdjs.loadingCode.GDpillObjects1.length ;i < len;++i) {
    gdjs.loadingCode.GDpillObjects1[i].setOpacity(10);
}
}{for(var i = 0, len = gdjs.loadingCode.GDpillObjects1.length ;i < len;++i) {
    gdjs.loadingCode.GDpillObjects1[i].setOpacity(40);
}
}{for(var i = 0, len = gdjs.loadingCode.GDpillObjects1.length ;i < len;++i) {
    gdjs.loadingCode.GDpillObjects1[i].setOpacity(60);
}
}{for(var i = 0, len = gdjs.loadingCode.GDpillObjects1.length ;i < len;++i) {
    gdjs.loadingCode.GDpillObjects1[i].setOpacity(80);
}
}{for(var i = 0, len = gdjs.loadingCode.GDpillObjects1.length ;i < len;++i) {
    gdjs.loadingCode.GDpillObjects1[i].setOpacity(100);
}
}{for(var i = 0, len = gdjs.loadingCode.GDpillObjects1.length ;i < len;++i) {
    gdjs.loadingCode.GDpillObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.loadingCode.GDmanginaldoObjects1.length ;i < len;++i) {
    gdjs.loadingCode.GDmanginaldoObjects1[i].setAnimationName("redpill");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Super Mario Bros. - Mushroom Sound Effect.mp3", false, 30, 1);
}{for(var i = 0, len = gdjs.loadingCode.GDmanginaldoObjects1.length ;i < len;++i) {
    gdjs.loadingCode.GDmanginaldoObjects1[i].flipX(false);
}
}
{ //Subevents
gdjs.loadingCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("jumpscene"), gdjs.loadingCode.GDjumpsceneObjects1);
gdjs.copyArray(runtimeScene.getObjects("manginaldo"), gdjs.loadingCode.GDmanginaldoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.loadingCode.mapOfGDgdjs_9546loadingCode_9546GDmanginaldoObjects1Objects, gdjs.loadingCode.mapOfGDgdjs_9546loadingCode_9546GDjumpsceneObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Instruções", false);
}}

}


{



}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MSOL"), gdjs.loadingCode.GDMSOLObjects1);
gdjs.copyArray(runtimeScene.getObjects("pulica"), gdjs.loadingCode.GDpulicaObjects1);
gdjs.copyArray(runtimeScene.getObjects("ze"), gdjs.loadingCode.GDzeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.loadingCode.GDpulicaObjects1.length;i<l;++i) {
    if ( gdjs.loadingCode.GDpulicaObjects1[i].getVariableString(gdjs.loadingCode.GDpulicaObjects1[i].getVariables().get("Direction")) == "Right" ) {
        isConditionTrue_0 = true;
        gdjs.loadingCode.GDpulicaObjects1[k] = gdjs.loadingCode.GDpulicaObjects1[i];
        ++k;
    }
}
gdjs.loadingCode.GDpulicaObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.loadingCode.GDzeObjects1.length;i<l;++i) {
    if ( gdjs.loadingCode.GDzeObjects1[i].getVariableString(gdjs.loadingCode.GDzeObjects1[i].getVariables().get("Direction")) == "Right" ) {
        isConditionTrue_0 = true;
        gdjs.loadingCode.GDzeObjects1[k] = gdjs.loadingCode.GDzeObjects1[i];
        ++k;
    }
}
gdjs.loadingCode.GDzeObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.loadingCode.GDMSOLObjects1.length;i<l;++i) {
    if ( gdjs.loadingCode.GDMSOLObjects1[i].getVariableString(gdjs.loadingCode.GDMSOLObjects1[i].getVariables().get("Direction")) == "Right" ) {
        isConditionTrue_0 = true;
        gdjs.loadingCode.GDMSOLObjects1[k] = gdjs.loadingCode.GDMSOLObjects1[i];
        ++k;
    }
}
gdjs.loadingCode.GDMSOLObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.loadingCode.GDMSOLObjects1 */
/* Reuse gdjs.loadingCode.GDpulicaObjects1 */
/* Reuse gdjs.loadingCode.GDzeObjects1 */
{for(var i = 0, len = gdjs.loadingCode.GDpulicaObjects1.length ;i < len;++i) {
    gdjs.loadingCode.GDpulicaObjects1[i].addForce(155, 0, 0);
}
for(var i = 0, len = gdjs.loadingCode.GDzeObjects1.length ;i < len;++i) {
    gdjs.loadingCode.GDzeObjects1[i].addForce(155, 0, 0);
}
for(var i = 0, len = gdjs.loadingCode.GDMSOLObjects1.length ;i < len;++i) {
    gdjs.loadingCode.GDMSOLObjects1[i].addForce(155, 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MSOL"), gdjs.loadingCode.GDMSOLObjects1);
gdjs.copyArray(runtimeScene.getObjects("pulica"), gdjs.loadingCode.GDpulicaObjects1);
gdjs.copyArray(runtimeScene.getObjects("ze"), gdjs.loadingCode.GDzeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.loadingCode.GDpulicaObjects1.length;i<l;++i) {
    if ( gdjs.loadingCode.GDpulicaObjects1[i].getVariableString(gdjs.loadingCode.GDpulicaObjects1[i].getVariables().get("Direction")) == "Left" ) {
        isConditionTrue_0 = true;
        gdjs.loadingCode.GDpulicaObjects1[k] = gdjs.loadingCode.GDpulicaObjects1[i];
        ++k;
    }
}
gdjs.loadingCode.GDpulicaObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.loadingCode.GDzeObjects1.length;i<l;++i) {
    if ( gdjs.loadingCode.GDzeObjects1[i].getVariableString(gdjs.loadingCode.GDzeObjects1[i].getVariables().get("Direction")) == "Left" ) {
        isConditionTrue_0 = true;
        gdjs.loadingCode.GDzeObjects1[k] = gdjs.loadingCode.GDzeObjects1[i];
        ++k;
    }
}
gdjs.loadingCode.GDzeObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.loadingCode.GDMSOLObjects1.length;i<l;++i) {
    if ( gdjs.loadingCode.GDMSOLObjects1[i].getVariableString(gdjs.loadingCode.GDMSOLObjects1[i].getVariables().get("Direction")) == "Left" ) {
        isConditionTrue_0 = true;
        gdjs.loadingCode.GDMSOLObjects1[k] = gdjs.loadingCode.GDMSOLObjects1[i];
        ++k;
    }
}
gdjs.loadingCode.GDMSOLObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.loadingCode.GDMSOLObjects1 */
/* Reuse gdjs.loadingCode.GDpulicaObjects1 */
/* Reuse gdjs.loadingCode.GDzeObjects1 */
{for(var i = 0, len = gdjs.loadingCode.GDpulicaObjects1.length ;i < len;++i) {
    gdjs.loadingCode.GDpulicaObjects1[i].addForce(-(155), 0, 0);
}
for(var i = 0, len = gdjs.loadingCode.GDzeObjects1.length ;i < len;++i) {
    gdjs.loadingCode.GDzeObjects1[i].addForce(-(155), 0, 0);
}
for(var i = 0, len = gdjs.loadingCode.GDMSOLObjects1.length ;i < len;++i) {
    gdjs.loadingCode.GDMSOLObjects1[i].addForce(-(155), 0, 0);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MSOL"), gdjs.loadingCode.GDMSOLObjects1);
gdjs.copyArray(runtimeScene.getObjects("colission"), gdjs.loadingCode.GDcolissionObjects1);
gdjs.copyArray(runtimeScene.getObjects("pulica"), gdjs.loadingCode.GDpulicaObjects1);
gdjs.copyArray(runtimeScene.getObjects("ze"), gdjs.loadingCode.GDzeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.loadingCode.mapOfGDgdjs_9546loadingCode_9546GDpulicaObjects1ObjectsGDgdjs_9546loadingCode_9546GDzeObjects1ObjectsGDgdjs_9546loadingCode_9546GDMSOLObjects1Objects, gdjs.loadingCode.mapOfGDgdjs_9546loadingCode_9546GDcolissionObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.loadingCode.GDMSOLObjects1 */
/* Reuse gdjs.loadingCode.GDpulicaObjects1 */
/* Reuse gdjs.loadingCode.GDzeObjects1 */
{for(var i = 0, len = gdjs.loadingCode.GDpulicaObjects1.length ;i < len;++i) {
    gdjs.loadingCode.GDpulicaObjects1[i].flipX(true);
}
for(var i = 0, len = gdjs.loadingCode.GDzeObjects1.length ;i < len;++i) {
    gdjs.loadingCode.GDzeObjects1[i].flipX(true);
}
for(var i = 0, len = gdjs.loadingCode.GDMSOLObjects1.length ;i < len;++i) {
    gdjs.loadingCode.GDMSOLObjects1[i].flipX(true);
}
}{for(var i = 0, len = gdjs.loadingCode.GDpulicaObjects1.length ;i < len;++i) {
    gdjs.loadingCode.GDpulicaObjects1[i].returnVariable(gdjs.loadingCode.GDpulicaObjects1[i].getVariables().get("Direction")).setString("Left");
}
for(var i = 0, len = gdjs.loadingCode.GDzeObjects1.length ;i < len;++i) {
    gdjs.loadingCode.GDzeObjects1[i].returnVariable(gdjs.loadingCode.GDzeObjects1[i].getVariables().get("Direction")).setString("Left");
}
for(var i = 0, len = gdjs.loadingCode.GDMSOLObjects1.length ;i < len;++i) {
    gdjs.loadingCode.GDMSOLObjects1[i].returnVariable(gdjs.loadingCode.GDMSOLObjects1[i].getVariables().get("Direction")).setString("Left");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MSOL"), gdjs.loadingCode.GDMSOLObjects1);
gdjs.copyArray(runtimeScene.getObjects("leftcollision"), gdjs.loadingCode.GDleftcollisionObjects1);
gdjs.copyArray(runtimeScene.getObjects("pulica"), gdjs.loadingCode.GDpulicaObjects1);
gdjs.copyArray(runtimeScene.getObjects("ze"), gdjs.loadingCode.GDzeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.loadingCode.mapOfGDgdjs_9546loadingCode_9546GDpulicaObjects1ObjectsGDgdjs_9546loadingCode_9546GDzeObjects1ObjectsGDgdjs_9546loadingCode_9546GDMSOLObjects1Objects, gdjs.loadingCode.mapOfGDgdjs_9546loadingCode_9546GDleftcollisionObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.loadingCode.GDMSOLObjects1 */
/* Reuse gdjs.loadingCode.GDpulicaObjects1 */
/* Reuse gdjs.loadingCode.GDzeObjects1 */
{for(var i = 0, len = gdjs.loadingCode.GDpulicaObjects1.length ;i < len;++i) {
    gdjs.loadingCode.GDpulicaObjects1[i].flipX(false);
}
for(var i = 0, len = gdjs.loadingCode.GDzeObjects1.length ;i < len;++i) {
    gdjs.loadingCode.GDzeObjects1[i].flipX(false);
}
for(var i = 0, len = gdjs.loadingCode.GDMSOLObjects1.length ;i < len;++i) {
    gdjs.loadingCode.GDMSOLObjects1[i].flipX(false);
}
}{for(var i = 0, len = gdjs.loadingCode.GDpulicaObjects1.length ;i < len;++i) {
    gdjs.loadingCode.GDpulicaObjects1[i].returnVariable(gdjs.loadingCode.GDpulicaObjects1[i].getVariables().get("Direction")).setString("Right");
}
for(var i = 0, len = gdjs.loadingCode.GDzeObjects1.length ;i < len;++i) {
    gdjs.loadingCode.GDzeObjects1[i].returnVariable(gdjs.loadingCode.GDzeObjects1[i].getVariables().get("Direction")).setString("Right");
}
for(var i = 0, len = gdjs.loadingCode.GDMSOLObjects1.length ;i < len;++i) {
    gdjs.loadingCode.GDMSOLObjects1[i].returnVariable(gdjs.loadingCode.GDMSOLObjects1[i].getVariables().get("Direction")).setString("Right");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MSOL"), gdjs.loadingCode.GDMSOLObjects1);
gdjs.copyArray(runtimeScene.getObjects("leftcollision"), gdjs.loadingCode.GDleftcollisionObjects1);
gdjs.copyArray(runtimeScene.getObjects("pulica"), gdjs.loadingCode.GDpulicaObjects1);
gdjs.copyArray(runtimeScene.getObjects("ze"), gdjs.loadingCode.GDzeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.loadingCode.mapOfGDgdjs_9546loadingCode_9546GDpulicaObjects1ObjectsGDgdjs_9546loadingCode_9546GDzeObjects1ObjectsGDgdjs_9546loadingCode_9546GDMSOLObjects1Objects, gdjs.loadingCode.mapOfGDgdjs_9546loadingCode_9546GDleftcollisionObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.loadingCode.GDMSOLObjects1 */
/* Reuse gdjs.loadingCode.GDpulicaObjects1 */
/* Reuse gdjs.loadingCode.GDzeObjects1 */
{for(var i = 0, len = gdjs.loadingCode.GDpulicaObjects1.length ;i < len;++i) {
    gdjs.loadingCode.GDpulicaObjects1[i].flipX(false);
}
for(var i = 0, len = gdjs.loadingCode.GDzeObjects1.length ;i < len;++i) {
    gdjs.loadingCode.GDzeObjects1[i].flipX(false);
}
for(var i = 0, len = gdjs.loadingCode.GDMSOLObjects1.length ;i < len;++i) {
    gdjs.loadingCode.GDMSOLObjects1[i].flipX(false);
}
}{for(var i = 0, len = gdjs.loadingCode.GDpulicaObjects1.length ;i < len;++i) {
    gdjs.loadingCode.GDpulicaObjects1[i].returnVariable(gdjs.loadingCode.GDpulicaObjects1[i].getVariables().get("Direction")).setString("Right");
}
for(var i = 0, len = gdjs.loadingCode.GDzeObjects1.length ;i < len;++i) {
    gdjs.loadingCode.GDzeObjects1[i].returnVariable(gdjs.loadingCode.GDzeObjects1[i].getVariables().get("Direction")).setString("Right");
}
for(var i = 0, len = gdjs.loadingCode.GDMSOLObjects1.length ;i < len;++i) {
    gdjs.loadingCode.GDMSOLObjects1[i].returnVariable(gdjs.loadingCode.GDMSOLObjects1[i].getVariables().get("Direction")).setString("Right");
}
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

gdjs.loadingCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.loadingCode.GDBGObjects1.length = 0;
gdjs.loadingCode.GDBGObjects2.length = 0;
gdjs.loadingCode.GDpillObjects1.length = 0;
gdjs.loadingCode.GDpillObjects2.length = 0;
gdjs.loadingCode.GDpulicaObjects1.length = 0;
gdjs.loadingCode.GDpulicaObjects2.length = 0;
gdjs.loadingCode.GDredpillmanObjects1.length = 0;
gdjs.loadingCode.GDredpillmanObjects2.length = 0;
gdjs.loadingCode.GDmanginaldoObjects1.length = 0;
gdjs.loadingCode.GDmanginaldoObjects2.length = 0;
gdjs.loadingCode.GDzeObjects1.length = 0;
gdjs.loadingCode.GDzeObjects2.length = 0;
gdjs.loadingCode.GDMSOLObjects1.length = 0;
gdjs.loadingCode.GDMSOLObjects2.length = 0;
gdjs.loadingCode.GDcolissionObjects1.length = 0;
gdjs.loadingCode.GDcolissionObjects2.length = 0;
gdjs.loadingCode.GDleftcollisionObjects1.length = 0;
gdjs.loadingCode.GDleftcollisionObjects2.length = 0;
gdjs.loadingCode.GDfloorObjects1.length = 0;
gdjs.loadingCode.GDfloorObjects2.length = 0;
gdjs.loadingCode.GDjumpsceneObjects1.length = 0;
gdjs.loadingCode.GDjumpsceneObjects2.length = 0;
gdjs.loadingCode.GDlogoObjects1.length = 0;
gdjs.loadingCode.GDlogoObjects2.length = 0;

gdjs.loadingCode.eventsList1(runtimeScene);

return;

}

gdjs['loadingCode'] = gdjs.loadingCode;
