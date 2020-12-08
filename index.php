<?php require_once "vistas/login_parte_superior.php"?>

     
      <div class="container-login">
        <div class="wrap-login">
            <form class="login-form validate-form" id="formLogin" action="" method="post">

                <span class="nombre-app"><img src="recursos/img/logo.png" style="width: 25px; margin-bottom:10px;"> COVIDATA CENTER (Cliente)</span>

                <span class="login-form-title">INICIAR SESIÓN</span>

                <div class="wrap-input100" data-validate = "Email incorrecto">
                    <input class="input100" type="text" id="email" name="email" placeholder="Correo electronico">
                    <span class="focus-efecto"></span>
                </div>
                
                <div class="wrap-input100" data-validate="Password incorrecto">
                    <input class="input100" type="password" id="password" name="password" placeholder="Contraseña">
                    <span class="focus-efecto"></span>
                </div>
                
                <div class="container-login-form-btn">
                    <div class="wrap-login-form-btn">
                        <div class="login-form-bgbtn"></div>
                        <button type="submit" name="submit" class="login-form-btn">CONECTATE</button>
                    </div>
                </div>
                <div style="text-align: center;">
                    <a  class="enlace" href="registro.php" >  <u>Registrate</u> como usuario</a>
                </div>
                <div style="text-align: center;">
                     <a class="enlace" href="login_admin.php"  style=" margin-top: 20px; color:007bff;"> Incia sesión como <u>admin</u></a>
                </div>
            </form>
        </div>
    </div>     
        
    <script src="login_js.js"></script>  
  
    </body>
</html>
