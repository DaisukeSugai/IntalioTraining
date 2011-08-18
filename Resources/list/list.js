Titanium.include('../common/constant.js');
Titanium.include('style.js');

var win = Titanium.UI.currentWindow;

var lblTitle = Titanium.UI.createLabel(styles["lblTitle"]);
lblTitle.text = Titanium.Locale.getString("list_title");
win.add(lblTitle);

var btnNew = Titanium.UI.createButton(styles["btnNew"]);
btnNew.title = Titanium.Locale.getString("list_btnNew");
win.add(btnNew);
btnNew.addEventListener(EVT_CLICK, function() {
	Titanium.App.Properties.setList(KEY_CODE_SELECTUSER, null);
	var win = Titanium.UI.createWindow({url:INSERT_FILE});
	win.oriantationMode = [Titanium.UI.PORTRAIT];
	Titanium.UI.currentTab.open(win, {animated:true});
});

var btnLatest = Titanium.UI.createButton(styles["btnLatest"]);
btnLatest.title = Titanium.Locale.getString("list_btnLatest");
win.add(btnLatest);
btnLatest.addEventListener(EVT_CLICK, function() {
	Titanium.App.Properties.setList(KEY_CODE_SELECTUSER, null);
	var win = Titanium.UI.createWindow({url:LIST_FILE});
	win.oriantationMode = [Titanium.UI.PORTRAIT];
	Titanium.UI.currentTab.open(win, {animated:true});
});

var btnBack = Titanium.UI.createButton(styles["btnBack"]);
btnBack.title = Titanium.Locale.getString("list_btnBack");
win.add(btnBack);
btnBack.addEventListener(EVT_CLICK, function() {
	Titanium.App.Properties.setList(KEY_CODE_SELECTUSER, null);
	Titanium.App.Properties.setString(KEY_CODE_USERXID, null);
	Titanium.App.Properties.setString(KEY_CODE_USERNAME, null);
	
	var win = Titanium.UI.createWindow({url:LOGIN_FILE2});
	win.oriantationMode = [Titanium.UI.PORTRAIT];
	Titanium.UI.currentTab.open(win, {animated:true});
});



var rowData = [];
var selectData = [];
var xids = [];
var seqnos = [];
var mobilenums = [];
var mobilebools = [];
var mobileoptions = [];
var names = [];
var mobiledates = [];
var owners = [];

var client = Titanium.Network.createHTTPClient({timeout : 100000});
var url = REAL_LIST_URL + Titanium.App.Properties.getString(KEY_CODE_USERNAME);
//var url = LIST_URL + Titanium.App.Properties.getString(KEY_CODE_USERNAME)　+ ADD_LIST_URL;
Titanium.API.info('List URL is ' + url);

client.open(GET_REC, url);
client.onload = function() {
	try {
		var resData = eval("("+this.responseText+")");
		if (resData[0].error == 'Yes') {
			var record = resData[0].count;
			if (record == 0) {
				return;	
			} else {
				var dialog = Titanium.UI.createAlertDialog({});
				dialog.title =  Titanium.Locale.getString("event_yes_title");
				dialog.message = resData[0].contents;
				dialog.show();
				return;
			}
		} else {
			var record = resData[0].count;
			if (record == 0) {
				return;
			}
			for (var i = 0; i < resData[0].records.length; i++) {
				if (resData[0].records[i].xid == null) {
					// Not involced
				} else {
					xids[i] = resData[0].records[i].xid;
					seqnos[i] = resData[0].records[i].seqno;
					mobilenums[i] = resData[0].records[i].mobilenum;
					mobilebools[i] = resData[0].records[i].mobilebool;
					mobileoptions[i] = resData[0].records[i].mobileoption;
					names[i] = resData[0].records[i].name;
					mobiledates[i] = resData[0].records[i].mobiledate;
					owners[i] = resData[0].records[i].owner;
					
					if (i == 0) {
						selectData[0] = resData[0].records[i].xid;
						selectData[1] = resData[0].records[i].seqno;
						selectData[2] = resData[0].records[i].mobilenum;
						selectData[3] = resData[0].records[i].mobilebool;
						selectData[4] = resData[0].records[i].mobileoption;
						selectData[5] = resData[0].records[i].name;
						selectData[6] = resData[0].records[i].mobiledate;
						selectData[7] = resData[0].records[i].owner;
						Titanium.App.Properties.setList(KEY_CODE_SELECTUSER, null);
						Titanium.App.Properties.setList(KEY_CODE_SELECTUSER, selectData);
					}
					
					row = Titanium.UI.createTableViewRow(styles["rows"]);
					rowTitle = Titanium.UI.createLabel(styles["rowTitle"]);
					rowTitle.text = Titanium.Locale.getString("list_rowtitle") + resData[0].records[i].name;
					row.add(rowTitle);
					
					contentsTitle = Titanium.UI.createLabel(styles["contentsTitle"]);
					var bool = '';
					var boolcode = resData[0].records[i].mobilebool;
					if (boolcode == '1') {
						bool = Titanium.Locale.getString("bool_yes") 
					} else {
						bool = Titanium.Locale.getString("bool_no") 
					}
					var option = '';
					var optioncode = resData[0].records[i].mobileoption;
					if (optioncode == '1') {
						option = Titanium.Locale.getString("priority_yes") 
					} else {
						option = Titanium.Locale.getString("priority_no") 
					}
					contentsTitle.text = Titanium.Locale.getString("list_rowcontentstitle3") + bool + ' / ' + option;
					row.add(contentsTitle);
					
					footTitle = Titanium.UI.createLabel(styles["footTitle"]);
					var visitdate = resData[0].records[i].mobiledate;
					visitdate = visitdate.replace('T15:00:00Z','');
					var splitdate = visitdate.split('-');
					footTitle.text = Titanium.Locale.getString("list_rowcontentstitle2") + splitdate[0] + Titanium.Locale.getString("date_year") + splitdate[1] 
					+ Titanium.Locale.getString("date_month") + splitdate[2] + Titanium.Locale.getString("date_day") + ' / ' + resData[0].records[i].mobilenum;
					row.add(footTitle);
					
					rowData.push(row);
					row = [];
				}
			}
		}
		
		tableview = Titanium.UI.createTableView(styles["tableRows"]);
		tableview.data = rowData;
		tableview.addEventListener(EVT_CHANGE, function(e){
			var index = e.index;
			Titanium.API.info(index);
		});
		
		tableview.addEventListener(EVT_SINGLETAP, function(e){
			var index = e.index;
			callNext(index);
		});
		
		function callNext(index) {
			selectData = [];
			selectData.push(xids[index]);
			selectData.push(seqnos[index]);
			selectData.push(mobilenums[index]);
			selectData.push(mobilebools[index]);
			selectData.push(mobileoptions[index]);
			selectData.push(names[index]);
			selectData.push(mobiledates[index]);
			selectData.push(owners[index]);
			Titanium.App.Properties.setList(KEY_CODE_SELECTUSER, selectData);
			
			var win1 = Titanium.UI.createWindow({url:EDIT_FILE});
			win1.oriantationMode = [Titanium.UI.PORTRAIT];
			Titanium.UI.currentTab.open(win1, {animated:true});
		}
		
		win.add(tableview);
		win.open();
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
