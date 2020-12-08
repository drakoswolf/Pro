<?php require_once "vistas/parte_superior.php"?>

<!--INICIO del cont principal-->
<div class="container">
    <h1>Reportes de los usuarios</h1>
    
    
    
 <?php
include_once '../bd/conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();

$consulta = "SELECT * FROM reportes";
$resultado = $conexion->prepare($consulta);
$resultado->execute();
$data=$resultado->fetchAll(PDO::FETCH_ASSOC);

?>


<div class="container">  
    </div>    
    <br>  
<div class="container">
        <div class="row">
                <div class="col-lg-12">
                    <div class="table-responsive">        
                        <table id="tablaRegistrosAdmin" class="fontSize-tabla table table-striped table-bordered table-condensed" style="width:100%;">
                        <thead class="text-center">
                            <tr>
                                <th>#Num</th>
                                <th>Nombre usuario</th>
                                <th>Municipio</th>                                
                                <th>Ciudad</th>  
                                <th>Direccion</th>
                                <th>Fecha de reporte</th>
                                <th>Descripción</th>
                                <th>Estatus</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php                            
                            foreach($data as $dat) {                                                        
                            ?>
                            <tr>
                                <td><?php echo $dat['id'] ?></td>
                                <td><?php echo $dat['usuario'] ?></td>
                                <td><?php echo $dat['municipio'] ?></td>
                                <td><?php echo $dat['ciudad'] ?></td>
                                <td><?php echo $dat['direccion'] ?></td>
                                <td><?php echo $dat['fechaReporte'] ?></td>
                                <td><?php echo $dat['descripcion'] ?></td>
                                <td><?php echo $dat['estatus'] ?></td>                         
                                <td></td>
                            </tr>
                            <?php
                                }
                            ?>                                
                        </tbody>        
                       </table>                    
                    </div>
                </div>
        </div>  
    </div>    
      
<!--Modal para CRUD-->
<div class="modal fade" id="modalCRUDx" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
                </button>
            </div>
        <form id="formPersonas3">    
            <div class="modal-body">

                <div class="form-group">
                <label for="estatus" class="col-form-label">Estatus: En proceso | Rechazado | Confirmado</label>
                <input type="text" class="form-control" id="estatus1">
                </div>

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-light" data-dismiss="modal">Cancelar</button>
                <button type="submit" id="btnGuardar" class="btn-guardar btn btn-dark" >Guardar</button>
            </div>
        </form>    
        </div>
    </div>
</div>  

<!--Modal para CRUD-->
<div class="modal fade" id="modalCRUDVerMas" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
                </button>
            </div>
        <form id="formVerMasAdmin1">    
            <div class="modal-body">

                <label for="usuario" class="col-form-label">Usuario:</label>
                <input type="text" class="form-control" id="usuario" readonly>
    

                <label for="descripcion" class="col-form-label">Descripción:</label>
                <input type="text" class="form-control" id="descripcion"readonly>

                <label for="municipio" class="col-form-label">Municipio:</label>
                <input type="text" class="form-control" id="municipio" readonly> 

                <label for="ciudad" class="col-form-label">Ciudad:</label>
                <input type="text" class="form-control" id="ciudad" readonly>
 
                <label for="direccion" class="col-form-label">Dirección:</label>
                <input type="text" class="form-control" id="direccion" readonly> 

    
                <label for="fechaReporte" class="col-form-label">Fecha Reporte:</label>
                <input type="text" class="form-control" id="fechaReporte" readonly>
    

                <label for="estatus1" class="col-form-label">Estatus:</label>
                <input type="text" class="form-control" id="estatus" readonly>
      

            </div>
        </form>    
        </div>
    </div>
</div>  
      
    
    
</div>
<!--FIN del cont principal-->
<?php require_once "vistas/parte_inferior_admin.php"?>