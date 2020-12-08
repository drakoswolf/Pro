$(document).ready(function(){
    tablaPersonas = $("#tablaPersonas").DataTable({
       "columnDefs":[{
        "targets": -1,
        "data":null,
        "defaultContent": "<div class='text-center'><div class='btn-group'><button class='fontSize-tabla btn btn-primary btnVerMas'>Ver más</button><button class='fontSize-tabla btn btn-primary btnEditar'>Modificar</button><button class='fontSize-tabla btn btn-danger btnBorrar'>Ocultar</button></div></div>"  
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
    
$("#btnNuevo").click(function(){
    $("#formPersonas").trigger("reset");
    $(".modal-header").css("background-color", "#1cc88a");
    $(".modal-header").css("color", "white");
    $(".modal-title").text("Crear Reporte");            
    $("#modalCRUD").modal("show");        
    id=null;
    opcion = 1; //alta
});    
    
var fila; //capturar la fila para editar o borrar el registro

//botón EDITAR    
$(document).on("click", ".btnEditar", function(){

    fila = $(this).closest("tr");
    id = parseInt(fila.find('td:eq(0)').text());
    municipio = fila.find('td:eq(1)').text();
    ciudad = fila.find('td:eq(2)').text();
    direccion = fila.find('td:eq(3)').text();
    descripcion=fila.find('td:eq(5)').text();
    
    $("#municipio").val(municipio);
    $("#ciudad").val(ciudad);
    $("#direccion").val(direccion);
    $("#descripcion").val(descripcion);
    
    opcion = 2; //editar
    
    $(".modal-header").css("background-color", "#4e73df");
    $(".modal-header").css("color", "white");
    $(".modal-title").text("Modificar Reporte");            
    $("#modalCRUD").modal("show");  
    
});

//botón BORRAR
$(document).on("click", ".btnBorrar", function(){    
    fila = $(this);
    id = parseInt($(this).closest("tr").find('td:eq(0)').text());
    tablaPersonas.row(fila.parents('tr')).remove().draw();
    /*
    opcion = 3 //borrar
        $.ajax({
            url: "../bd/crud2.php",
            type: "POST",
            dataType: "json",
            data: {opcion:opcion, id:id},
            success: function(){
                tablaPersonas.row(fila.parents('tr')).remove().draw();
            }
        });
        */
      
});
    
$("#formPersonas").submit(function(e){
    e.preventDefault();    
    descripcion = $.trim($("#descripcion").val());
    municipio = $.trim($("#municipio").val());
    ciudad = $.trim($("#ciudad").val());
    direccion = $.trim($("#direccion").val());    
    fechaReporte = $.trim($("#fechaReporte").val()); 
    $.ajax({
        url: "../bd/crud2.php",
        type: "POST",
        dataType: "json",
        data: {descripcion:descripcion, municipio:municipio, ciudad:ciudad, direccion:direccion, fechaReporte:fechaReporte, id:id, opcion:opcion},
        success: function(data){  
            console.log(data);
            id = data[0].id;         
            municipio = data[0].municipio;
            ciudad = data[0].ciudad;
            direccion = data[0].direccion;
            fechaReporte = data[0].fechaReporte;
            descripcion = data[0].descripcion;
            estatus = data[0].estatus;
            if(opcion == 1){tablaPersonas.row.add([id,municipio,ciudad,direccion, fechaReporte, descripcion, estatus]).draw();}
            else{tablaPersonas.row(fila).data([id,municipio,ciudad,direccion, fechaReporte, descripcion, estatus]).draw();}            
        }        
    });
    $("#modalCRUD").modal("hide");    
    
});    
    
});