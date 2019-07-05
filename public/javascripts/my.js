$(document).ready(function() {
    $('#member_insert_btn').click(function(){
        const id=$('#id').val();
        const pw=$('#pw').val();
        const name=$('#name').val();
        const send_params={
            id,
            pw,
            name
        };
        $.post("member_insert",send_params,function(data,status){
            alert(data+":"+status);
            const parsed_data=JSON.parse(data);

            $('#result_div').html(`${parsed_data.msg}`);
        });
    });
    $('#login_btn').click(function () {
        const id=$('#login_id').val();
        const pw=$('#login_pw').val();
        const send_params={
            id,
            pw
        };
        $.post("/login",send_params,function (data,status) {
            try {
                alert(JSON.parse(data).msg);
                $('#login_id').val()="";
                $('#login_pw').val()="";

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
    
});