Titanium.include('../common/constant.js');

var backList = function() {
	var win = Titanium.UI.createWindow({url:LIST_FILE});
	win.oriantationMode = [Titanium.UI.PORTRAIT];
	Titanium.UI.currentTab.open(win, {animated:true});
}

var createCurrentDate = function() {
        var date = new Date();
        var year = date.getYear();
        var mon = date.getMonth() + 1;
        var day = date.getDate();

        year = (year < 2000) ? year+1900 : year;
        if (mon < 10) { mon = "0" + mon; }
        if (day < 10) { day = "0" + day; }

         NowDate = year + "-" + mon + "-" + day + "T15:00:00Z";
        lblDateData.text = NowDate;
}

var insertTrans = function() {
	var tmpBool = '';
	if (rdoBoolean.value == true) {
		tmpBool = '1';
	} else {
		tmpBool = '0';
	}
	var tmpOption= '';
	if (lblOptionData.text == 'Yes') {
		tmpOption = '1';
	} else {
		tmpOption = '2';
	}
	var url = LIST_URL + Titanium.App.Properties.getString(KEY_CODE_USERNAME)　+ ADD_INSERT_URL + PARAM1 + tmpBool+ COMMA + PARAM2 + lblDateData.text + COMMA + PARAM3 + txtName.value + COMMA + PARAM4 + txtNumber.value+ COMMA + PARAM5 + tmpOption + COMMA;
	Titanium.API.info('Insert is ' + url);
	executeTrans(url);
}

var editTrans = function() {
	var selectData = [];
	selectData = Titanium.App.Properties.getList(KEY_CODE_SELECTUSER);
	var tmpBool = '';
	if (rdoBoolean.value == true) {
		tmpBool = '1';
	} else {
		tmpBool = '0';
	}
	var tmpOption= '';
	if (lblOptionData.text == 'Yes') {
		tmpOption = '1';
	} else {
		tmpOption = '2';
	}
	var url = LIST_URL + Titanium.App.Properties.getString(KEY_CODE_USERNAME)　+ ADD_EDIT_URL + selectData[1] + ADD_EDIT_URL1 +  selectData[0]+ ADD_EDIT_URL2 + PARAM1 + tmpBool+ COMMA + PARAM2 + lblDateData.text + COMMA + PARAM3 + txtName.value + COMMA + PARAM4 + txtNumber.value+ COMMA + PARAM5 + tmpOption + COMMA;
	Titanium.API.info('Edit is ' + url);
	executeTrans(url);
}

var deleteTrans = function() {
	var selectData = [];
	selectData = Titanium.App.Properties.getList(KEY_CODE_SELECTUSER);
	var url = LIST_URL + Titanium.App.Properties.getString(KEY_CODE_USERNAME)　+ ADD_DELETE_URL + selectData[0] + COMMA;
	Titanium.API.info('Delete is ' + url);
	executeTrans(url);
}

var executeTrans = function(url) {
	var client = Titanium.Network.createHTTPClient({timeout : 100000});	
	client.open(GET_REC, url);
	client.onload = function() {
		try {
			var resData = eval("("+this.responseText+")");
			Titanium.API.info(resData);
			if (resData[0].error == 'Yes') {
				var dialog = Titanium.UI.createAlertDialog({});
				dialog.title =  Titanium.Locale.getString("event_yes_title");
				dialog.message = resData[0].contents;
				dialog.show();
				return;
			} else {
				var win = Titanium.UI.createWindow({url:LIST_FILE});
				win.oriantationMode = [Titanium.UI.PORTRAIT];
				Titanium.UI.currentTab.open(win, {animated:true});
			}
		} catch (e) {
			Titanium.API.error(e);
			var dialog = Titanium.UI.createAlertDialog({});
			dialog.title =  Titanium.Locale.getString("event_catch_title");
			dialog.message = Titanium.Locale.getString("event_catch_message");
			dialog.show();
			return;
		}
	};
	client.onerror = function() {
		if (client.status == 401) {
			var dialog = Titanium.UI.createAlertDialog({});
			dialog.title =  Titanium.Locale.getString("event_connect_title");
			dialog.message = Titanium.Locale.getString("event_connect_message");
			dialog.show();
			return;
		}
		var dialog = Titanium.UI.createAlertDialog({});
		dialog.title =  Titanium.Locale.getString("event_network_title");
		dialog.message = Titanium.Locale.getString("event_network_message");
		dialog.show();
		return;
	};
	client.send();
}