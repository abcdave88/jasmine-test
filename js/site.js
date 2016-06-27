// $(document).ready(function(){

  // console.log('linked');

  var myApp = {

     url: 'http://fetd.prod.cps.awseuwest1.itvcloud.zone/platform/itvonline/samsung/productions?grouping=popular&size=15&broadcaster=ITV',

    getContent: function(url){
      $.ajax({
        type:'GET',
        url: url,
        headers: {
          Accept: "application/vnd.itv.default.production.v2+hal+json"
        }

      }).done(function(data){
        var data = data._embedded.productions;
        $(data).each(function(index, obj){
          var image = obj._links.image.href,
              channel = obj.channel,
              title = obj.programmeTitle,
              duration = obj.duration,
              synopsis = obj.synopsis,
              episodeNum = obj.moreEpisodesLabel
          
          $('.content-contain').append('<div class="col-md-6"><h2>'+title+'</h2><img src="'+image+'" class="img-responsive"><p>'+synopsis+'</p><div class="col-md-4"><p>Channel: '+channel+'</p></div><div class="col-md-4"><p>Duration: '+duration+'</p></div><div class="col-md-4"><p>'+episodeNum+'</p></div></div>')
        })
      })
    }

  };

  myApp.getContent(myApp.url);


// });