window.onload = init;
which_image_loaded = 0; 

function init() {

    var main; 
    var input = document.getElementById("button"); 
    input.addEventListener("click", function(){
        var main_array= ["sandwich","burger", "pizza", "steak", "chicken", "hotdog"]
        var rand = Math.floor(Math.random() * 5);
        console.log(main_array[rand]); 
        callAjax(main_array[rand], "main-info", "mainHash", "imagebox"); 
        audio.play(); 

    }); 

    var veggies; 
    var input = document.getElementById("button2"); 
    input.addEventListener("click", function(){
        var veg_array= ["avocado", "corn", "tomato", "carrots", "brusselsprouts"]
        var rand = Math.floor(Math.random() * 5);
        console.log(veg_array[rand]); 
        callAjax(veg_array[rand], "veg-info", "vegHash", "imagebox"); 
        audio.play(); 
    }); 

    var surprise; 
    var input = document.getElementById("button3"); 
    input.addEventListener("click", function(){
        var des_array= ["cake", "icecream", "macaroon", "cupcake", "doughnut", "s'mores"]
        var rand = Math.floor(Math.random() * 6);
        console.log(des_array[rand]); 
        callAjax(des_array[rand], "des-info", "desHash", "imagebox"); 
        audio.play(); 
    }); 

    
    function callAjax(food, container){
        var xhr = new XMLHttpRequest()
        xhr.open("GET", "get_tweets.php?q=" +food, true); 
        xhr.send(null);
        xhr.onload = function(){
            if(xhr.status == 200){
            var tweets = JSON.parse(xhr.responseText);
            console.log(tweets)

           
            // document.getElementById(container).innerHTML = tweets.statuses[0].full_text + "<img src='" + tweets.statuses[0].user.profile_image_url + "'>" +"<p>" + food + "</p>";
            document.getElementById(container).innerHTML = tweets.statuses[0].full_text +"<p>" + food + "</p>";
            var newImage = document.createElement("IMG"); 
            newImage.setAttribute("src", "imgs/" + food + ".png");

            document.getElementById(container).appendChild(newImage); 

            } 
        else {
            console.log(xhr);
            document.getElementById("main-info").innerHTML = xhr.responseText;
            document.getElementById("veg-info").innerHTML = xhr.responseText;
            document.getElementById("des-info").innerHTML = xhr.responseText;

        }
     }
 }
     function play(){
       var audio = document.getElementById("sound/ding.wav");
        }  

}

    
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





  
