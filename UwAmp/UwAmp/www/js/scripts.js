window.onload = init;
which_image_loaded = 0; 

function init() {

    // var query; 
    // var input = document.getElementById("query"); 

    // input.addEventListener("keypress", function(e){
    //     if(e.key == "Enter"){
    //         query = input.value; 
    //         console.log(query); 
    //         getTweets(); 

    //     }
    // })

    var main; 
    var input = document.getElementById("button"); 
    input.addEventListener("click", function(){
        var main_array= ["sandwich","burger", "pizza", "steak", "sandwich", "chicken", "hotdog"]
        var rand = Math.floor(Math.random() * 6);
        console.log(main_array[rand]); 
        callAjax(main_array[rand]); 
    }); 

    var veggies; 
    var input = document.getElementById("button2"); 
    input.addEventListener("click", function(){
        var veg_array= ["avocado", "corn", "tomato", "red pepper", "carrots", "brussel sprouts", "eggplant"]
        var rand = Math.floor(Math.random() * 6);
        console.log(veg_array[rand]); 
        callAjax(veg_array[rand]); 
    }); 

    var surprise; 
    var input = document.getElementById("button3"); 
    input.addEventListener("click", function(){
        var sup_array= ["cake", "ice cream", "macaroon", "cupcake", "doughnut", "s'mores"]
        var rand = Math.floor(Math.random() * 6);
        console.log(sup_array[rand]); 
        callAjax(sup_array[rand]); 
    }); 

    
    function callAjax(food){
        var xhr = new XMLHttpRequest()
        xhr.open("GET", "get_tweets.php?q=" + food, true); 
        xhr.send(null);
        xhr.onload = function(){
            if(xhr.status == 200){
            var tweets = JSON.parse(xhr.responseText);
            tweets = tweets.statuses; 
            console.log(tweets)

            var tweetList = "<ul>";
            tweets.forEach(function(tweet) {
                tweetList += "<li>" + tweet.text + "</li>";
            });
            tweetList += "</ul>"
            document.getElementById("main-info").innerHTML = tweetList;
            document.getElementById("veg-info").innerHTML = tweetList;
            document.getElementById("veg-info").innerHTML = tweetList;

            var newFig = document.createElement("FIGURE"); 
            var newImage = document.createElement("IMG"); 
            var newCap = document.createElement("FIGCAPTION"); 
            // newImage.setAttribute("alt", img.title) 
            newImage.setAttribute("src", "imgs/" + food + ".png");
            newFig.appendChild(newImage)
            newFig.appendChild(newCap)
            document.getElementById("main-info").appendChild(newFig); 
            document.getElementById("veg-info").innerHTML = tweetList;
            document.getElementById("veg-info").appendChild(newFig); 
            document.getElementById("sup-info").innerHTML = tweetList;
            document.getElementById("sup-info").appendChild(newFig); 
            } 
        else {
            console.log(xhr);
            document.getElementById("main-info").innerHTML = xhr.responseText;
            document.getElementById("veg-info").innerHTML = xhr.responseText;
            document.getElementById("sup-info").innerHTML = xhr.responseText;

        }
     }

     //        xhr.onload = function(){
     //        if(xhr.status == 200){
     //        var tweets = JSON.parse(xhr.responseText);
     //        tweets = tweets.statuses; 
     //        console.log(tweets)

     //        var tweetList = "<ul>";
     //        tweets.forEach(function(tweet) {
     //            tweetList += "<li>" + tweet.text + "</li>";
     //        });
     //        tweetList += "</ul>"
     //        document.getElementById("veg-info").innerHTML = tweetList;

     //        var newFig = document.createElement("FIGURE"); 
     //        var newImage = document.createElement("IMG"); 
     //        var newCap = document.createElement("FIGCAPTION"); 
     //        newImage.setAttribute("src", "imgs/" + food + ".png");
     //        newFig.appendChild(newImage)
     //        newFig.appendChild(newCap)
     //        document.getElementById("veg-info").appendChild(newFig); 
     //        } 
     //    else {
     //        console.log(xhr);
     //        document.getElementById("veg-info").innerHTML = xhr.responseText;
     //    }
     // }



 }




}

//     function callAjax(food2){
//         var xhr = new XMLHttpRequest()
//         xhr.open("GET", "get_tweets.php?q=" + food2, true); 
//         xhr.send(null);
//         xhr.onload = function(){
//             if(xhr.status == 200){
//             var tweets = JSON.parse(xhr.responseText);
//             tweets = tweets.statuses; 
//             console.log(tweets)

//         var newFig2 = document.createElement("FIGURE2"); 
//          var newImage2 = document.createElement("IMG2"); 
//          var newCap2 = document.createElement("FIGCAPTION2"); 
//          newImage2.setAttribute("src", "imgs/" + food2 + ".png");
//          newFig2.appendChild(newImage2)
//          newFig2.appendChild(newCap2) 
//      }
//  }
// }



        //  var newFig = document.createElement("FIGURE"); 
        //  var newImage = document.createElement("IMG"); 
        //  newImage.setAttribute("src", "imgs/" + food + ".png");
        //  newFig.appendChild(newImage)
        //  document.getElementById("veg-info").appendChild(newFig);



        // var newFig = document.createElement("FIGURE"); 
        //  var newImage = document.createElement("IMG"); 
        //  newImage.setAttribute("src", "imgs/" + food + ".png");
        // newFig.appendChild(newImage)
        //  document.getElementById("sup-info").appendChild(newFig);


         // var newCap = document.createElement("FIGCAPTION"); 

         //Add Elements to the DOM 
      
         // document.getElementById("veg-info").appendChild(newFig); 

        //document.getElementById("main-info").removeChild(newFig); 

        //  var tweetList = "<p>";
        //  tweets.forEach(function(tweet) {
        //         tweetList + "<p>" + tweet.text + "</p>";
        //     });
        //     tweetList += "</p>"

        //     document.getElementById("main-info").innerHTML = tweetList;
       
        //     } else {
        //     console.log(xhr);
        //     document.getElementById("main-info").innerHTML = xhr.responseText;
        
        // }



    
    // function changeImage(direction){
    //     which_image_loaded += direction; 
    //     if (which_image_loaded < 0)
    //         which_image_loaded = 17;
    //     if (which_image_loaded > 17)
    //         which_image_loaded =0; 
    //     if (document.images)
    //         document.myimage.src = newImage.setAttribute("src", "imgs/" + food + ".png"); 
    // }


        // var imageLoop = "mainTweets"; 
        // for (i = 0; i < main.length; i++){ // this is where i want to put tweets + image 
        //     imageLoop += "images"; 
        // }
        // mainContainer.insertAdjacentHTML('beforeend', 'mainTweets + image')

    //MAIN IMAGES// 
//     var m_images =["imgs/01_mains/sandwich.png"]; 

//     m_images.forEach(function(i)
// {
//     //Create Elements 
//      var newFig = document.createElement("FIGURE"); 

//      var newImage = document.createElement("IMG"); 
//      newImage.setAttribute("src", i);  

//      var newCap = document.createElement("FIGCAPTION"); 

//      //Add Elements to the DOM 
//      newFig.appendChild(newImage)
//      newFig.appendChild(newCap)
//      document.getElementById("main-info").appendChild(newFig); 
//     })

//     //VEGGIE IMAGES// 
//     var v_images =["imgs/02_veggies/corn.png"]; 

//     v_images.forEach(function(i){

//      //Create Elements 
//      var newFig = document.createElement("FIGURE"); 

//      var newImage = document.createElement("IMG"); 
//      newImage.setAttribute("src", i);  

//      var newCap = document.createElement("FIGCAPTION"); 

//      //Add Elements to the DOM 
//      newFig.appendChild(newImage)
//      newFig.appendChild(newCap)
//      document.getElementById("main-info").appendChild(newFig); 
//     })

//     //SURPRISE IMAGES// 
//     var s_images =["imgs/03_desserts/cake.png"]; 
//     s_images.forEach(function(i){

//      //Create Elements 
//      var newFig = document.createElement("FIGURE"); 

//      var newImage = document.createElement("IMG"); 
//      newImage.setAttribute("src", i);  

//      var newCap = document.createElement("FIGCAPTION"); 

//      //Add Elements to the DOM 
//      newFig.appendChild(newImage)
//      newFig.appendChild(newCap)
//      document.getElementById("main-info").appendChild(newFig); 
//     })

    // var m_img = {
    //     url: "imgs/01_mains/sandwich.png", 
    //     title: "sandwich", 
    // }

    // var m_img2 = {
    //     url: "imgs/01_mains/taco.png", 
    //     title: "taco", 
    // }


    // var newFig = document.createElement("FIGURE"); 

    // var newImage = document.createElement("IMG"); 
    // newImage.setAttribute("src", m_img.url); 
    // newImage.setAttribute("alt", m_img.title) 
    // newImage.setAttribute("src", m_img2.url); 
    // newImage.setAttribute("alt", m_img2.title) 


    // var newCap = document.createElement("FIGCAPTION"); 
    // var newCapText = document.createTextNode(m_img.title); 
    // newCap.appendChild(newCapText);  
    // var newCapText = document.createTextNode(m_img2.title); 
    // newCap.appendChild(newCapText);  


    // newFig.appendChild(newImage)
    // newFig.appendChild(newCap)
    // document.getElementById("main-info").appendChild(newFig); 

//     function getTweets(){
//     var xhr = new XMLHttpRequest();
//     // xhr.open('GET', 'get_tweets.php?q=taco'+ main, true);
//     xhr.open('GET', 'get_tweets.php?q='+query, true); //this changes the state of xmlhttp
//     xhr.send(null);
//     xhr.onload = function() {
        
//         if(xhr.status == 200){
//             var tweets = JSON.parse(xhr.responseText);
//             tweets = tweets.statuses; 
//             console.log(tweets)
            
//             //  EXAMPLE OUTPUT TO A LIST
//             var tweetList = "<ul>";
//             tweets.forEach(function(tweet) {
//                 tweetList += "<li>" + tweet.text + "</li>";
//             });
//             tweetList += "</ul>"

//             document.getElementById("results").innerHTML = tweetList;

            
//         } else {
//             console.log(xhr);
//             document.getElementById("results").innerHTML = xhr.responseText;
//         }

//     }
// }



  
