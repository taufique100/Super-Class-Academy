$(document).ready(function(){
    $("#lec1").click(function(){
      let url = "../static/css/CSS Introduction in Hindi  Urdu.mp4";
      $(".frame").html('<video width="810px" height="445px" controls><source src="' + url + '" type="video/mp4" /></video>');
      $(".discription").html('<h3 color="#808080">Lecture 1. Introduction of CSS </h3> <hr/> <p>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript. </p>');
    });
    $("#lect2").click(function(){
        let url = "../static/css/CSS Basic Selectors Tutorial in Hindi  Urdu.mp4";
        $(".frame").html('<video width="810px" height="450px" controls><source src="' + url + '" type="video/mp4" /></video>');
        $(".discription").load('../static/Lecture/demo_test.txt');
    });
    $("#lec3").click(function(){
        let url = "../static/css/CSS  Padding Tutorial in Hindi  Urdu.mp4";
        $(".frame").html('<video width="810px" height="450px" controls><source src="' + url + '" type="video/mp4" /></video>');
        $(".discription").load('../static/Lecture/demo_test.txt');
    });
    $("#lec4").click(function(){
        let url = "../static/css/CSS Opacity Tutorial in Hindi  Urdu.mp4";
        $(".frame").html('<video width="810px" height="450px" controls><source src="' + url + '" type="video/mp4" /></video>');
        $(".discription").load('../static/Lecture/demo_test.txt');
    });
    $("#lec5").click(function(){
        let url = "../static/css/CSS Min-height & Max-height Tutorial in Hindi  Urdu.mp4";
        $(".frame").html('<video width="810px" height="450px" controls><source src="' + url + '" type="video/mp4" /></video>');
        $(".discription").load('../static/Lecture/demo_test.txt');
    });
    $("#lec6").click(function(){
        let url = "../static/css/CSS Text Formatting Properties Tutorial in Hindi  Urdu.mp4";
        $(".frame").html('<video width="810px" height="450px" controls><source src="' + url + '" type="video/mp4" /></video>');
        $(".discription").load('../static/Lecture/demo_test.txt');
    });
    $("#lec7").click(function(){
        let url = "../static/css/CSS Z-index Tutorial in Hindi  Urdu.mp4";
        $(".frame").html('<video width="810px" height="450px" controls><source src="' + url + '" type="video/mp4" /></video>');
        $(".discription").load('../static/Lecture/demo_test.txt');
    });
    $("#lec8").click(function(){
        let url = "../static/css/CSS Box-Shadow Tutorial in Hindi  Urdu.mp4";
        $(".frame").html('<video width="810px" height="450px" controls><source src="' + url + '" type="video/mp4" /></video>');
        $(".discription").load('../static/Lecture/demo_test.txt');
    });
    $("#lec9").click(function(){
        let url = "../static/css/CSS Gradient Background Tutorial in Hindi  Urdu.mp4";
        $(".frame").html('<video width="810px" height="450px" controls><source src="' + url + '" type="video/mp4" /></video>');
        $(".discription").load('../static/Lecture/demo_test.txt');
    });
    $("#lec10").click(function(){
        let url = "../static/css/CSS Media Queries Tutorial in Hindi  Urdus.mp4";
        $(".frame").html('<video width="810px" height="450px" controls><source src="' + url + '" type="video/mp4" /></video>');
        $(".discription").load('../static/Lecture/demo_test.txt');
    });

  });
  