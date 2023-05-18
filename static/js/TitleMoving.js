var ScrollMsg= "{'about': 'Santiago Benavidez', 'office': 'Python developer'}"
var CharacterPosition=0;

function StartScrolling() {
document.title=ScrollMsg.substring(CharacterPosition,ScrollMsg.length)+
ScrollMsg.substring(0, CharacterPosition);
CharacterPosition++;
if(CharacterPosition > ScrollMsg.length) CharacterPosition=0;
window.setTimeout("StartScrolling()",150); }
StartScrolling();
