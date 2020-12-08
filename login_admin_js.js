$('#formLogin').submit(function(e){
   e.preventDefault();
   var email = $.trim($("#email").val());    
   var password =$.trim($("#password").val());    
    
   if(email.length == "" || password == ""){
      Swal.fire({
          type:'warning',
          title:'Por favor ingrese un email y contraseña',
      });
      return false; 
    }else{
        $.ajax({
           url:"bd/login_admin_bd.php",
           type:"POST",
           datatype: "json",
           data: {email:email, password:password}, 
           success:function(data){               
               if(data == "null"){
                   Swal.fire({
                       type:'error',
                       title:'El email o la contraseña son incorrectos',
                   });
               }else{
                   Swal.fire({
                       type:'success',
                       title:'¡Ha iniciado sesión como administrador!',
                       confirmButtonColor:'#3085d6',
                       confirmButtonText:'Ingresar'
                   }).then((result) => {
                       if(result.value){
                           window.location.href = "dashboard/interfaz_admin.php";
                       }
                   })
                   
               }
           }    
        });
    }     
});


function AlertIt() {
    Swal.fire({
        type:'warning',
        title:'Email: admin@gmail.com <br> contraseña: admin <br>----------------<br> Email: demo@gmail.com <br> contraseña: demo',
    });
    }

