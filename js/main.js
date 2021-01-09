$(function(){
//============================Ajax============================
    $("button").on('click', function(){
         $(".output").fadeIn(4000);
        $.ajax({
    url:"https://api.covid19api.com/country/south-africa/status/confirmed/live?from=2020-03-01T00:00:00Z&to="+output+"T00:00:00Z",
    method: 'GET',
    success: function(data){
        //------------------Today Cases-------------------
                var date = "<td>Today</td>",
                country = "<td>"+data[data.length-1].Country+"</td>",
                casses = "<td>"+data[data.length-1].Cases+"</td>",
                allOutPut = "<tr>"+date+country+casses+"</tr>";
                document.querySelector('.output').innerHTML += allOutPut; 
        //------------------- yesterday cases------------------
                date = "<td>yesterday</td>";
                country = "<td>"+data[data.length-2].Country+"</td>";
                casses = "<td>"+data[data.length-2].Cases+"</td>";
                allOutPut = "<tr>"+date+country+casses+"</tr>";
                document.querySelector('.output').innerHTML += allOutPut;
        //------------------------other days--------------------
                for( var i = data.length-3; i >= 0; i--){
                date = "<td>"+data[i].Date+"</td>";
                country = "<td>"+data[i].Country+"</td>";
                casses = "<td>"+data[i].Cases+"</td>";
                allOutPut = "<tr>"+date+country+casses+"</tr>";
                document.querySelector('.output').innerHTML += allOutPut; 
                }
            },
    error: function(a,b,c){
        console.log("error");
    }

})
       
        
        })
//==============================Get Date Of Today========================
var d = new Date();
var month = d.getMonth()+1;
var day = d.getDate();
var output = d.getFullYear() + '-' +
    (month<10 ? '0' : '') + month + '-' +
    (day<10 ? '0' : '') + day;
    console.log("https://api.covid19api.com/country/south-africa/status/confirmed/live?from=2020-03-01T00:00:00Z&to="+output+"T00:00:00Z");
    
})