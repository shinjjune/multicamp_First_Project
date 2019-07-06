$(document).ready(function() {
    $('#member_insert_btn').click(function(){
        const userid=$('#userid').val();
        const pw=$('#pw').val();
        const name=$('#name').val();
        const send_params={
            userid,
            pw,
            name
        };
        $.post("/member_insert",send_params,function(data,status){
            alert(data+":"+status);
            const parsed_data=JSON.parse(data);

            $('#result_div').html(`${parsed_data.msg}`);
        });
    });
    $('#login_btn').click(function () {
        const userid=$('#login_userid').val();
        const send_params={
            userid,
        };
        $.post("/login",send_params,function (data,status) {
            try {
                alert(JSON.parse(data).msg);
                $('#login_userid').val()="";
            } catch (err) {
                window.location.reload(true);
                
            }
            /* 
            const parsed_data=JSON.parse(data);
            alert(parsed_data.msg); */
        });
    });
    $('#logout_btn').click(function () {
        $.get("/logout",function (data,status) {
            location.reload();
        });
    });
    
  

    $('#searchType_btn').click(function () {
        const searchType=$('#searchType').val();
        const insur_input=$('#insur_input').val();
        const send_params={
            searchType,
            insur_input
        };
        $.post("/search_insur",send_params,function (data,status) {
            //alert(data+":"+status);
            const parsed_data=JSON.parse(data);
            //console.log(parsed_data)
            //console.log(parsed_data.msg)

            if(parsed_data.msg=="조회결과가 없습니다")
            {
                $('#table_div').html(parsed_data.msg);
            }else{
                let printData='<table border=1>';
                for(var key in parsed_data.msg) {
                    printData += `<tr><td>${key}</td><td>${parsed_data.msg[key]}</td></tr>`;
                }
                printData += '</table>';
                $('#table_div').html(printData);

            }
        });

    });
});
