
function ret_json(org_id,dc_id,bp_id,role_code){
    var str='[{"org_id":"'+org_id+'","dc_id":"'+dc_id+'","bp_id":"'+bp_id+'","role_code":"'+role_code+'"}]';
    var obj=JSON.parse(str);
    console.log(obj)
}
 ret_json(2,3,4,'rafsan');


 function printj(str){
    var obj=JSON.parse(str);
    console.log(obj)
}


//'{"org_id": "2","dc_name":"rj test 18","discussion_class": "PUBLIC_GROUP","members":[{"bp_id":"7","role_code":"$CGPART"},{"bp_id":"8","role_code":"$CGPART"},{"bp_id":"9","role_code":"$CGPART"}]}'



function groupAdd(query,org_id,dc_name,dis_clas,bp_id,role_code){
    var query='';
    var members='';
    for(var i=0; i<bp_id.length; i++){
        members=members+'{"bp_id"'+':"'+bp_id[i]+'",'+'"role_code"'+':"'+role_code[i]+'"}';
        if (i<bp_id.length-1){members=members+',';}
    }
    members='['+members+']';
    printj(members);
    query="{"+'"org_id":'+'"'+org_id+'",'+'"dc_name":'+'"'+dc_name+'",'+'"diccusion_class":'+'"'+dis_clas+'",'+
    '"members":'+members+"}";
    return query
}
var str=(groupAdd(2,3434,"helo world","no class",["3","5","6","7"],["anything","nothing","something","allthing"]));



printj(str);
