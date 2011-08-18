Titanium.include('/common/constant.js');
Titanium.UI.setBackgroundColor('#FFF');

// Shaking
Titanium.Gesture.addEventListener("shake", function(){
	Titanium.API.info('Shaking test');
});

// Screen 
Titanium.Gesture.addEventListener('orientationchange',function(e) {
	var o = e.orientation;
	var o2 = Titanium.Gesture.orientation;
	Titanium.UI.orientation = Titanium.UI.PORTRAIT;
});

var language = 'ja';
//var language = 'en';
Titanium.Locale.setLanguage(language);
Titanium.App.Properties.setString(KEY_CODE_LANGUAGE,language);

var tabGroup = Titanium.UI.createTabGroup();

var win = Titanium.UI.createWindow({url:LOGIN_FILE});
win.oriantationMode = [Titanium.UI.PORTRAIT];
var tab = Titanium.UI.createTab({window:win});

var win1 = Titanium.UI.createWindow({url:START_FILE});
win1.oriantationMode = [Titanium.UI.PORTRAIT];
var tab1 = Titanium.UI.createTab({window:win1});

tabGroup.addTab(tab);
tabGroup.addTab(tab1);
tabGroup.tabBarVisible = false;
Titanium.App.tabGroup = tabGroup;

win.hideNavBar();
win.hideTabBar();
win1.hideNavBar();
win1.hideTabBar();

Titanium.UI.iPhone.StatusBar.OPAQUE_BLACK
tabGroup.open();
tabGroup.activeTab = tabGroup.tabs[1];
