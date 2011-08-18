Titanium.include('../common/constant.js');
Titanium.include('style.js');
Titanium.include('event.js');
 
var win = Titanium.UI.currentWindow;

var scrollview = Titanium.UI.createScrollView(styles["scrollview"]);
var showview = Titanium.UI.createView(styles["showview"]);

var selectData = [];
selectData = Titanium.App.Properties.getList(KEY_CODE_SELECTUSER);

var lblTitle = Titanium.UI.createLabel(styles["lblTitle"]);
lblTitle.text = Titanium.Locale.getString("register_title");
showview.add(lblTitle);

var lblName = Titanium.UI.createLabel(styles["lblName"]);
lblName.text =  Titanium.Locale.getString("register_name");
showview.add(lblName);

var txtName = Titanium.UI.createTextField(styles["txtName"]);
txtName.value = selectData[5];
showview.add(txtName);

var lblNumber = Titanium.UI.createLabel(styles["lblNumber"]);
lblNumber.text =  Titanium.Locale.getString("register_number_name");
showview.add(lblNumber);

var txtNumber = Titanium.UI.createTextField(styles["txtNumber"]);
txtNumber.value = selectData[2];
showview.add(txtNumber);

var lblBoolean = Titanium.UI.createLabel(styles["lblBoolean"]);
lblBoolean.text =  Titanium.Locale.getString("register_boolean_name");
showview.add(lblBoolean);

var rdoBoolean = Titanium.UI.createSwitch(styles["rdoBoolean"]);
var tmpBool = selectData[3];
if (tmpBool == '1') {
	rdoBoolean.value = true;
} else {
	rdoBoolean.value = false;
}
showview.add(rdoBoolean);

var lblOption = Titanium.UI.createLabel(styles["lblOption"]);
lblOption.text =  Titanium.Locale.getString("register_option_name");
showview.add(lblOption);

var lblOptionData = Titanium.UI.createLabel(styles["lblOptionData"]);
var optioncode = selectData[4];
if (optioncode == '1') {
	lblOptionData.text = Titanium.Locale.getString("priority_yes") 
} else {
	lblOptionData.text = Titanium.Locale.getString("priority_no") 
}
showview.add(lblOptionData);

var dialog = Titanium.UI.createOptionDialog();
dialog.setTitle(Titanium.Locale.getString("register_dialog_title"));

var arrCategory = [];
arrCategory[0] = Titanium.Locale.getString("priority_yes");
arrCategory[1] = Titanium.Locale.getString("priority_no");
arrCategory[2] = Titanium.Locale.getString("priority_nothing");

dialog.setOptions(arrCategory);
dialog.setCancel(2);
dialog.addEventListener(EVT_CLICK,function(e) {
    if (e.index == 0) {
    	lblOptionData.text = Titanium.Locale.getString("priority_yes");
    } else if(e.index == 1) {
    	lblOptionData.text = Titanium.Locale.getString("priority_no");
    } else {
    	lblOptionData.text = '';
    }
});

var btnOption = Ti.UI.createButton(styles["btnOption"]);
btnOption.title = Titanium.Locale.getString("register_dialog_select");
btnOption.addEventListener(EVT_CLICK,function() { dialog.show(); });
showview.add(btnOption);

var lblDate = Titanium.UI.createLabel(styles["lblDate"]);
lblDate.text =  Titanium.Locale.getString("register_date_name");
showview.add(lblDate);

var lblDateData = Titanium.UI.createLabel(styles["lblDateData"]);
lblDateData.text = selectData[6];
showview.add(lblDateData);

var btnDate = Titanium.UI.createButton(styles["btnDate"]);
btnDate.title = Titanium.Locale.getString("register_btnDate");
btnDate.addEventListener(EVT_CLICK,createCurrentDate);
showview.add(btnDate);

var btnEdit = Titanium.UI.createButton(styles["btnEdit"]);
btnEdit.title = Titanium.Locale.getString("register_btnEdit");
btnEdit.addEventListener(EVT_CLICK,editTrans);
showview.add(btnEdit);

var btnDelete = Titanium.UI.createButton(styles["btnDelete"]);
btnDelete.title = Titanium.Locale.getString("register_btnDelete");
btnDelete.addEventListener(EVT_CLICK,deleteTrans);
showview.add(btnDelete);

var btnBack = Titanium.UI.createButton(styles["btnBack2"]);
btnBack.title = Titanium.Locale.getString("register_btnBack2");
btnBack.addEventListener(EVT_CLICK,backList);
showview.add(btnBack);

scrollview.add(showview);
win.add(scrollview);
win.open();
