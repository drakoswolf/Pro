$('#formRegistro').submit(function(e){
    e.preventDefault();
    var nombre = $.trim($("#nombre").val());    
    var apellido =$.trim($("#apellido").val());  
    var email = $.trim($("#email").val());    
    var password =$.trim($("#password").val());  

    if(nombre.length == "" || apellido.length == "" || email.length == "" || password == ""){
        Swal.fire({
            type:'warning',
            title:'Por favor llene todos los campos',
        });
        return false; 
      }else{
            $.ajax({
                url: "bd/registrar.php",
                type: "POST",
                dataType: "json",
                data: {nombre:nombre, apellido:apellido, email:email, password:password},
                success: function(data){  
                    console.log(data);          
                    nombre = data[0].nombre;
                    apellido = data[0].apellido;
                    email = data[0].email;
                    password= data[0].password;     
                }        
            });  

          $.ajax({
             url:"bd/login.php",
             type:"POST",
             datatype: "json",
             data: {nombre:nombre, apellido:apellido, email:email, password:password}, 
             success:function(data){               
                 if(data == "null"){
                     Swal.fire({
                         type:'error',
                         title:'El email o la contraseña son incorrectos',
                     });
                 }else{
                     Swal.fire({
                         type:'success',
                         title:'¡Usuario registrado!',
                         confirmButtonColor:'#3085d6',
                         confirmButtonText:'Ingresar'
                     }).then((result) => {
                         if(result.value){
                             window.location.href = "index.php";
                         }
                     })
                     
                 }
             }    
          });
      }     
 });
