$(document).ready(function(){

    $("form").on("submit", function() {

        var item = $("form input").val();
        var todo = {item: item};

        console.log('Item before change: ' + JSON.stringify(todo));

        $.ajax({
            type: "POST",
            url: "/todo",
            data: todo,
            
            success: function(data){
                //Do something with the data via front-end framework
                location.reload();
            },

            error: (error) => {
                console.log(error)
            }
        });

        return false;
    });

    $('li').on('click', function(){
        var item = $(this).text().replace(/ /g, "-");
        $.ajax({
            type: 'DELETE',
            url: 'todo/' + item,

            success: function(data){
                //Do something with the data via front-end framework
                location.reload();
            },

            error: (error) => {
                console.log(error)
            }
        })
    });
});