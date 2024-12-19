import xlsxPopulate from "xlsx-populate";



async function main () {
    // editar un archivo excel
    xlsxPopulate.fromFileAsync("./doc/PlantillaMovil.xlsx");

    // editar una celda del archivo excel
    xlsxPopulate.fromFileAsync("./doc/PlantillaMovil.xlsx")
    .then(workbook => {
        workbook.sheet("Hoja1").cell("B3").value("Hola Mundo");
        return workbook.toFileAsync("./doc/PlantillaMovil.xlsx");
    });
}



main();