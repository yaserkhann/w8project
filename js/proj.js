$(document).ready(function () {
    $.ajax({
        url: `https://developer.nps.gov/api/v1/parks?parkCode=yose&api_key=IQX0Hs25e3eP4PuDMnmt2qnz8eJZV2Rk33ra4vcw`,
        dataType: "json",
        success: function (res) {
            const data = res.data;
            console.log("ready");
            $("#icon1").click(function () {
                $(".covid-fluid").hide();
            });
            $(".btn-group").click(function () {
                $(".dropdown-menu").toggle();
                $(".sub1").click(function () {
                    html_str = "";
                    console.log("data", data);
                    $(".park").children().hide();
                    var activity = data[0].activities.length;
                    for (i = 0; i <= activity - 1; i++) {
                        html_str += `<ul class = "activities"><li><a href="#${data[0].activities[i].name}">${data[0].activities[i].name}</a></li></ul>`;
                        $(".park").css("backgroundColor", "black");
                    }
                    $(".park").html(html_str);
                });
            });
            $(".main-fluid").mouseover(function () {
                $(".title").css("color", "green");
                var html_str1 = `<p class= "des1" style="font-size: medium;">${data[0].description}</p>`;
                $(".des").html(html_str1);
            });
            var html_str2 = "";
            $(".sub2").click(function () {
                $(".park").children().hide();
                html_str2 = `<p class = "info" style= "color:white;font-size: large;">${data[0].directionsInfo}</p>`;
                $(".park").css("backgroundColor", "black");
                $(".park").html(html_str2);
            });
            var html_str3 = "";
            $(".sub3").click(function () {
                $(".park").children().hide();
                for (i = 0; i < data[0].images.length; i++) {
                    html_str3 += `<div class="row">
                <div class='col-12 col-sm-6 col-md-4'>
                        <img class='pics' alt='user' src="${data[0].images[i].url}">
                        <div class='card-body'>
                            <h5 class="pics-title">
                                ${data[0].images[i].title}
                            </h5></div></div></div`;
                }
                $(".park").css("backgroundColor", "black");
                $(".park").html(html_str3);
            });
        },
    });
});