$(document).ready(function(){
    tablaRegistrosAdmin = $("#tablaRegistrosAdmin").DataTable({
       "columnDefs":[{
        "targets": -1,
        "data":null,
        "defaultContent": "<div class='text-center'><div class='btn-group'><button class='fontSize-tabla btn btn-primary btnVerMas'>Ver reporte</button><button class='fontSize-tabla btn btn-primary btnEditar'>Modificar estatus</button></div></div>"  
       }],
        
    "language": {
            "lengthMenu": "Mostrar _MENU_ registros",
            "zeroRecords": "No se encontraron resultados",
            "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "infoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sSearch": "Buscar:",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast":"Último",
                "sNext":"Siguiente",
                "sPrevious": "Anterior"
             },
             "sProcessing":"Procesando...",
        }
    });
 
    
var fila; //capturar la fila para editar o borrar el registro

//botón Ver mas    
$(document).on("click", ".btnVerMas", function(){

    fila = $(this).closest("tr");
    id = parseInt(fila.find('td:eq(0)').text());
    usuario = fila.find('td:eq(1)').text();
    descripcion=fila.find('td:eq(6)').text();
    municipio = fila.find('td:eq(2)').text();
    ciudad = fila.find('td:eq(3)').text();
    direccion = fila.find('td:eq(4)').text();
    fechaReporte = fila.find('td:eq(5)').text();
    estatus = fila.find('td:eq(7)').text();
    
    $("#usuario").val(usuario);
    $("#descripcion").val(descripcion);
    $("#municipio").val(municipio);
    $("#ciudad").val(ciudad);
    $("#direccion").val(direccion);
    $("#fechaReporte").val(fechaReporte);
    $("#estatus").val(estatus);
    
    $(".modal-header").css("background-color", "#00825a");
    $(".modal-header").css("color", "white");
    $(".modal-title").text("Ver Reporte");            
    $("#modalCRUDVerMas").modal("show");  
    
});

//botón EDITAR    
$(document).on("click", ".btnEditar", function(){

    fila = $(this).closest("tr");
    id = parseInt(fila.find('td:eq(0)').text());
    usuario = fila.find('td:eq(1)').text();
    descripcion=fila.find('td:eq(6)').text();
    municipio = fila.find('td:eq(2)').text();
    ciudad = fila.find('td:eq(3)').text();
    direccion = fila.find('td:eq(4)').text();
    fechaReporte = fila.find('td:eq(5)').text();
    estatus=fila.find('td:eq(7)').text();
    
    $("#usuario").val(usuario);
    $("#descripcion").val(descripcion);
    $("#municipio").val(municipio);
    $("#ciudad").val(ciudad);
    $("#direccion").val(direccion);
    $("#fechaReporte").val(fechaReporte);
    $("#estatus").val(estatus);
    
    opcion = 4; //editar
    
    $(".modal-header").css("background-color", "#4e73df");
    $(".modal-header").css("color", "white");
    $(".modal-title").text("Modificar Estatus");            
    $("#modalCRUDx").modal("show");   
});

    
$("#formPersonas3").submit(function(e){
    e.preventDefault();    
    descripcion = $.trim($("#descripcion").val());
    municipio = $.trim($("#municipio").val());
    ciudad = $.trim($("#ciudad").val());
    direccion = $.trim($("#direccion").val());    
    usuario = $.trim($("#usuario").val());
    fechaReporte = $.trim($("#fechaReporte").val()); 
    estatus=document.getElementById("estatus1").value()
    //tablaRegistrosAdmin.row(fila).data([id,usuario,municipio,ciudad,direccion, fechaReporte, descripcion, estatus]).draw();
    $.ajax({
        url: "../bd/crud2.php",
        type: "POST",
        dataType: "json",
        data: {usuario:usuario, municipio:municipio, ciudad:ciudad, direccion:direccion, fechaReporte:fechaReporte,descripcion:descripcion,  estatus:estatus, id:id, opcion:opcion},
        success: function(data){  
            console.log(data);
            id = data[0].id;         
            municipio = data[0].municipio;
            ciudad = data[0].ciudad;
            direccion = data[0].direccion;
            fechaReporte = data[0].fechaReporte;
            descripcion = data[0].descripcion;
            estatus = data[0].estatus;
            if(opcion == 1){tablaRegistrosAdmin.row.add([id, usuario,municipio,ciudad,direccion, fechaReporte, descripcion, estatus]).draw();}
            else{tablaRegistrosAdmin.row(fila).data([id,usuario,municipio,ciudad,direccion, fechaReporte, descripcion, estatus]).draw();}            
        }        
    });
    $("#modalCRUDx").modal("hide");  
});    
    
});