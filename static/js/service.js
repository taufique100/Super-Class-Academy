$(document).ready(function(){
    $("#lec1").click(function(){
      let url = "../static/Lecture/jaan.mp4";
      $(".frame").html('<video width="810px" height="445px" controls><source src="' + url + '" type="video/mp4" /></video>');
      $(".discription").html('<h3 color="#808080">DBMS Tutorial</h3> <hr/> <p>DBMS Tutorial provides basic and advanced concepts of Database. Our DBMS Tutorial is designed for beginners and professionals both.Database management system is software that is used to manage the database.Our DBMS Tutorial includes all topics of DBMS such as introduction, ER model, keys, relational model, join operation, SQL, functional dependency, transaction, concurrency control, etc.</p>');
    });
    $("#lect2").click(function(){
        let url = "../static/Lecture/video.mp4";
        $(".frame").html('<video width="810px" height="450px" controls><source src="' + url + '" type="video/mp4" /></video>');
        $(".discription").load('../static/Lecture/demo_test.txt');
    });
  });