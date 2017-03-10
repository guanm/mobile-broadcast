function fixStatusBar(){
    var systemType = api.systemType;
    if(systemType == 'ios'){
        $api.fixStatusBar( $api.dom('header') );
    }else{
        $api.fixStatusBar( $api.dom('header') );
    }
}