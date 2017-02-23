var newQuote;

$(document).ready(function(){  
  
  $("#getMessage").on("click", function(){   
    
    //Random color 
   var randomColorChange = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    $('h1').css('color', randomColorChange);
   
    
    $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
        $("#click").html(a[0].content + "<p>— " +   a[0].title + "</p>")
      
      newQuote = 'https://twitter.com/intent/tweet?text=' + a[0].content + "<p>— " +   a[0].title + "</p>";           
      //fade out fade in
      $("#click").hide();
      $("#click").fadeIn(1000);
      
        $.ajaxSetup ({ cache: false});
  });
  });
  $("#getMessage").trigger( "click" );

});

$(".twitter-share-button").click(function(){
    $(this).attr("href", newQuote);
  });