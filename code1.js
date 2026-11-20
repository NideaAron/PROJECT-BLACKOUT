gdjs.MainMenuCode = {};
gdjs.MainMenuCode.localVariables = [];
gdjs.MainMenuCode.idToCallbackMap = new Map();
gdjs.MainMenuCode.GDTitleTextObjects1= [];
gdjs.MainMenuCode.GDTitleTextObjects2= [];
gdjs.MainMenuCode.GDStartTextObjects1= [];
gdjs.MainMenuCode.GDStartTextObjects2= [];


gdjs.MainMenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("StartText"), gdjs.MainMenuCode.GDStartTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("TitleText"), gdjs.MainMenuCode.GDTitleTextObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDTitleTextObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDTitleTextObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDStartTextObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDStartTextObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", false);
}
}

}


};

gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDTitleTextObjects1.length = 0;
gdjs.MainMenuCode.GDTitleTextObjects2.length = 0;
gdjs.MainMenuCode.GDStartTextObjects1.length = 0;
gdjs.MainMenuCode.GDStartTextObjects2.length = 0;

gdjs.MainMenuCode.eventsList0(runtimeScene);
gdjs.MainMenuCode.GDTitleTextObjects1.length = 0;
gdjs.MainMenuCode.GDTitleTextObjects2.length = 0;
gdjs.MainMenuCode.GDStartTextObjects1.length = 0;
gdjs.MainMenuCode.GDStartTextObjects2.length = 0;


return;

}

gdjs['MainMenuCode'] = gdjs.MainMenuCode;
