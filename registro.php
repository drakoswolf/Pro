<?php require_once "vistas/login_parte_superior.php"?>
     
      <div class="container-login">
        <div class="wrap-login">
            <form class="login-form validate-form" id="formRegistro" action="" method="post">

                <span class="nombre-app"><img src="recursos/img/logo.png" style="width: 25px; margin-bottom:10px;"> COVIDATA CENTER (Cliente)</span>

                <span class="login-form-title">REGISTRARSE</span>

                <div class="wrap-input100" data-validate = "Nombre incorrecto">
                    <input class="input100" type="text" id="nombre" name="nombre" placeholder="Nombre">
                    <span class="focus-efecto"></span>
                </div>

                <div class="wrap-input100" data-validate = "Apellido incorrecto">
                    <input class="input100" type="text" id="apellido" name="apellido" placeholder="Apellido">
                    <span class="focus-efecto"></span>
                </div>

                <div class="wrap-input100" data-validate = "Email incorrecto">
                    <input class="input100" type="text" id="email" name="email" placeholder="Correo electrónico">
                    <span class="focus-efecto"></span>
                </div>
                
                <div class="wrap-input100" data-validate="Password incorrecto">
                    <input class="input100" type="password" id="password" name="password" placeholder="Contraseña">
                    <span class="focus-efecto"></span>
                </div>
                
                <div class="container-login-form-btn">
                    <div class="wrap-login-form-btn">
                        <div class="login-form-bgbtn"></div>
                        <button type="submit" name="submit" class="login-form-btn">CREA TU CUENTA</button>
                    </div>
                </div>
                <div style="text-align: center;">
                    <a class="enlace" href="index.php"  style=" margin-top: 20px;"> Incia sesión como <u>cliente</u></a>
                </div>
            </form>
        </div>
    </div>     
        
        
    <script src="registro_js.js"></script>  
    
  
    </body>
</html>