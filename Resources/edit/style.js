var styles = {
    lblTitle: {
    	textAlign:'center',
    	shadowColor:'#aaa',
    	shadowOffset:{x:5,y:5},
    	font:{fontSize: 30},
        height: 80,
        width:'auto',
        top: "vertical"
    },
    showview: {
        borderRadius: 0,
        width: 320,
        height: 800,
        top: 0
    },
    scrollview: {
        contentWidth:'auto',
        contentHeight:'auto',
        top:0,
        showVerticalScrollIndicator : true,
        showHorizonScrollIndicator:true
    },
    lblName: {
        textAlign: 'left',
    	font:{fontSize: 20},
    	shadowColor:'#aaa',
    	shadowOffset:{x:0, y:0},
        height: 30,
        left: 40,
        top:80
    },
    txtName: {
        color:'#000000',
        top: 120,
        left: 35,
        width: 250,
        height: 40,
        hintText:'キーを入力',
        textAlign: 'left',
        verticalAlign: 'middle',
        keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
        returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
        borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        leftButtonMode:Titanium.UI.INPUT_BUTTONMODE_ALWAYS,
        rightButtonMode:Titanium.UI.INPUT_BUTTONMODE_ONFOCUS
    },
    lblNumber: {
        textAlign: 'left',
    	font:{fontSize: 20},
    	shadowColor:'#aaa',
    	shadowOffset:{x:0, y:0},
        height: 30,
        left: 40,
        top:180
    },
    txtNumber: {
        color:'#000000',
        top: 220,
        left: 35,
        width: 250,
        height: 40,
        hintText:'数字を入力',
        textAlign: 'right',
        verticalAlign: 'middle',
        keyboardType:Titanium.UI.KEYBOARD_NUMBER_PAD,
        returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
        borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        leftButtonMode:Titanium.UI.INPUT_BUTTONMODE_ALWAYS,
        rightButtonMode:Titanium.UI.INPUT_BUTTONMODE_ONFOCUS
    },
    lblBoolean: {
        textAlign: 'left',
    	font:{fontSize: 20},
    	shadowColor:'#aaa',
    	shadowOffset:{x:0, y:0},
        height: 30,
        left: 40,
        top:280
    },
    rdoBoolean: {
	value:true,
        left: 40,
        top:320
    },
    lblOption: {
        textAlign: 'left',
    	font:{fontSize: 20},
    	shadowColor:'#aaa',
    	shadowOffset:{x:0, y:0},
        height: 30,
        left: 40,
        top:370
    },
   lblOptionData: {
        textAlign: 'left',
    	shadowColor:'#aaa',
    	shadowOffset:{x:0, y:0},
    	font:{fontSize: 24},
        height: 40,
        left: 40,
        top:400
    },
   btnOption: {
        width: 250,
        height: 40,
        left: 40,
        top:440,
        color:'#000000',
        style: Titanium.UI.iPhone.SystemButtonStyle.BORDERED
    },
    lblDate: {
        textAlign: 'left',
    	font:{fontSize: 20},
    	shadowColor:'#aaa',
    	shadowOffset:{x:0, y:0},
        height: 30,
        left: 40,
        top:500
    },
   lblDateData: {
        textAlign: 'left',
    	shadowColor:'#aaa',
    	shadowOffset:{x:0, y:0},
    	font:{fontSize: 24},
        height: 40,
        left: 40,
        top:530
    },
   btnDate: {
        width: 250,
        height: 40,
        left: 40,
        top:570,
        color:'#000000',
        style: Titanium.UI.iPhone.SystemButtonStyle.BORDERED
    },
    btnEdit: {
        width: 80,
        height: 50,
        left: 30,
        top: 700,
        color:'#000000',
        style: Titanium.UI.iPhone.SystemButtonStyle.BORDERED
    },
    btnDelete: {
        width: 80,
        height: 50,
        left: 120,
        top: 700,
        color:'#000000',
        style: Titanium.UI.iPhone.SystemButtonStyle.BORDERED
    },
    btnBack2: {
        width: 80,
        height: 50,
        left: 210,
        top: 700,
        color:'#000000',
        style: Titanium.UI.iPhone.SystemButtonStyle.BORDERED
    },
    btnNew: {
        width: 110,
        height: 50,
        left: 40,
        top: 700,
        color:'#000000',
        style: Titanium.UI.iPhone.SystemButtonStyle.BORDERED
    },
    btnBack: {
        width: 110,
        height: 50,
        left: 170,
        top: 700,
        color:'#000000',
        style: Titanium.UI.iPhone.SystemButtonStyle.BORDERED
    }
};