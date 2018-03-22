$(document).ready(function(){
    /*$.ajax({
        url: "https://wind-bow.gomix.me/twitch-api/streams/LCK1",
        dataType: "jsonp",
        success: function(result) {
            console.log("streams", result);
        },
    });
    $.ajax({
        url: "https://wind-bow.gomix.me/twitch-api/channels/freecodecamp",
        dataType: "jsonp",
        success: function(result) {
            console.log("channels", result);
        },
    });*/
    var userId = [
        "mikulu777", "failverde", "chiao622", "rubychaoo", 
        "minerva8018", "CinCinBear", "missypwns", "ChloeLock", 
        "sweet0313love", "AimzAtchu", "Alliestrasza", "winny3531", 
        "AlexiaRaye", "ning886", "mini8816", "yuanyuan_satomi", 
        "deathfong", "vanessa_cc", "aphrolin1107", "ryo_0814", 
        "iris522", "aga191919", "ESL_SC2", "SaltyBet", 
        "zxcv323215", "n00biesuzikinz", "fanvivi", "VeRsuta", 
        "lulalalulula", "midahri", "danenebobar", "TwitchShow", 
        "mikadaime", "Ms_Vixen", "soming1907", "freecodecamp", 
        "Rakin", "gmdkdsla", "fluidwindlolz", "LukiLuluped", 
        "OGN_LoL", "LCK1", "chery0505", 
    ];

    $.each(userId, function(key, value){
        $.ajax({
            url: "https://wind-bow.gomix.me/twitch-api/streams/" + value,
            dataType: "jsonp",
            success: function(result1){
                $.ajax({
                    url: "https://wind-bow.gomix.me/twitch-api/channels/" + value,
                    dataType: "jsonp",
                    success: function(result2){
                        if(result1.stream){
                            $("#container>ul").prepend("<li class=\"online\"><div class=\"img\"><img src=\"" + 
                            result1.stream.preview.large + "\"></div><div class=\"mes\"><p class=\"name\">" + 
                            result1.stream.channel.status + "</p><p class=\"type\">" + 
                            result1.stream.channel.game + "</p><p class=\"user\"><i class=\"fa fa-user-o\" aria-hidden=\"true\"></i><span>" + 
                            result1.stream.channel.display_name + "</span></p><p class=\"num\"><i class=\"fa fa-fire\" aria-hidden=\"true\"></i><span>" + 
                            result1.stream.channel.views + "</span></p></div><div class=\"view\"><i class=\"fa fa-play-circle-o\" aria-hidden=\"true\"></i></div><a class=\"link\" href=\"" + 
                            result1.stream.channel.url + "\" target=\"_blank\"></a></li>");
                        }else{
                            $("#container>ul").append("<li class=\"offline\"><div class=\"img\"><img src=\"" + 
                            result2.video_banner + "\"></div><div class=\"mes\"><p class=\"name\">" + 
                            result2.status + "</p><p class=\"type\">" + 
                            result2.game + "</p><p class=\"user\"><i class=\"fa fa-user-o\" aria-hidden=\"true\"></i><span>" + 
                            result2.display_name + "</span></p><p class=\"num\"><i class=\"fa fa-fire\" aria-hidden=\"true\"></i><span>" + 
                            result2.views + "</span></p></div><div class=\"view\"><i class=\"fa fa-play-circle-o\" aria-hidden=\"true\"></i></div><a class=\"link\" href=\"" + 
                            result2.url + "\" target=\"_blank\"></a></li>");
                        }
                    },
                    error: function(){
                        console.log("Channels error");
                    }
                });
            },
            error: function(){
                console.log("Streams error");
            }
        });
    });

});