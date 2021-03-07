function sendMail(){
   
    Email.send({ 
        Host: "smtp.gmail.com", 
        Username: "smileysunilkumar.25@gmail.com", 
        Password: "pavansunil1127", 
        To: "smileysunilkumar2018@gmail.com", 
        From: "smileysunilkumar2018@gmail.com", 
        Subject: "Email sent by portfolio", 
        Body: "Hello " , 
      }) 
        .then(function (message) { 
          if(message=="OK"){
            location.reload();
            alert();
          }else{

          }
        }); 
}