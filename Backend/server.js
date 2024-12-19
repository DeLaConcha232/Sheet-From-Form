
const xlsx = require('xlsx-populate');
const express = require('express');
const cors = require('cors');


const port = 3000;
const app = express();
app.use(cors());
app.use(express.json());

// API
app.post('/endpoint', (req, res) => {

    // console.log("Datos recibidos:", req.body);
    // res.status(201).json({ message: "Datos guardados exitosamente" });


    xlsx.fromFileAsync("./doc/PlantillaMovil.xlsx")
        .then(workbook => {
            workbook.sheet("Hoja1").cell("B3").value(req.body['receptor']);
            workbook.sheet("Hoja1").cell("B4").value(req.body['RFC']);
            workbook.sheet("Hoja1").cell("B5").value(req.body['regimen']);
            workbook.sheet("Hoja1").cell("B6").value(req.body['CP']);
            workbook.sheet("Hoja1").cell("B7").value(req.body['cfdi']);
            workbook.sheet("Hoja1").cell("B9").value(req.body['emisor']);
            workbook.sheet("Hoja1").cell("B10").value(req.body['MetodoPago']);
            workbook.sheet("Hoja1").cell("B11").value(req.body['FormaPago']);
            workbook.sheet("Hoja1").cell("B12").value(req.body['ultimos4digitos']);
            workbook.sheet("Hoja1").cell("B13").value(req.body['fecha']);
            workbook.sheet("Hoja1").cell("B14").value(req.body['banco']);
            workbook.sheet("Hoja1").cell("A18").value(req.body['cantidad']);
            workbook.sheet("Hoja1").cell("B18").value(req.body['unidad']);
            workbook.sheet("Hoja1").cell("C18").value(req.body['sat']);
            workbook.sheet("Hoja1").cell("A24").value(req.body['descripcion']);
            workbook.sheet("Hoja1").cell("A28").value(req.body['precioUnitario']);
            workbook.sheet("Hoja1").cell("C28").value(req.body['importe']);
            workbook.sheet("Hoja1").cell("A32").value(req.body['claveP']);
            workbook.sheet("Hoja1").cell("B32").value(req.body['descripcionP']);

            
            workbook.toFileAsync("./doc/PlantillaMovil.xlsx");
            return workbook.outputAsync();
        })
        .then(data => {
            res.setHeader('Content-Disposition', 'attachment; filename="Datos.xlsx"');
            res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
            res.send(data);
            console.log("Archivo Excel creado exitosamente");
            
        })
        .catch(err => {
            console.error(err);
            res.status(500).send("Error al crear el archivo Excel");
        });

    // xlsxPopulate.fromBlankAsync()
    //     .then(workbook => {
    //         // Editar una celda del archivo Excel con los datos recibidos
    //         const sheet = workbook.sheet(0);
    //         sheet.cell("A1").value("Datos recibidos");
    //         sheet.cell("A2").value(req.body);

    //         // Enviar el archivo Excel como respuesta
    //         return workbook.outputAsync();
    //     })
});


app.listen(port, () => console.log("Servidor ejecutándose en http://localhost:3000"));