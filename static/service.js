$(document).ready(function(){
    $(".lecture1").click(function(){
      var url = "../static/Lecture/jaan.mp4";
      $(".frame").html('<video width="810px" height="450px" controls><source src="' + url + '" type="video/mp4" /></video>');
      $(".discription").load('demo_test.txt');
    });
      $(".lecture2").click(function(){
      var url = "../static/Lecture/video.mp4";
      $(".frame").html('<video width="810px" height="450px" controls><source src="' + url + '" type="video/mp4" /></video>');

    });
  });