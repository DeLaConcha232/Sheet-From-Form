import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';

const handleGenerateExcel = async (formData) => {
  try {
    // Cargar la plantilla desde la carpeta "public"
    const response = await fetch('/Frontend/public/Plantilla.xlsx');
    const arrayBuffer = await response.arrayBuffer();

    // Crear un workbook desde el buffer
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(arrayBuffer);

    // Seleccionar la primera hoja
    const worksheet = workbook.getWorksheet(1); // O usa el nombre con workbook.getWorksheet('NombreHoja')

    // Escribir datos en celdas específicas
    worksheet.getCell('B3').value = formData.receptor; // Ejemplo: Escribir el nombre en A1
    worksheet.getCell('B4').value = formData.rfc; 
    worksheet.getCell('B5').value = formData.regimen; 
    worksheet.getCell('B6').value = formData.cp; 
    worksheet.getCell('I3').value = formData.emisor; 
    worksheet.getCell('J6').value = formData.ultimosc; 
    worksheet.getCell('N3').value = formData.banco; 
    worksheet.getCell('B11').value = formData.unidad; // no lo se
    worksheet.getCell('C11').value = formData.clavesat; 
    worksheet.getCell('B16').value = formData.claveproducto; 

    // Generar un archivo Excel modificado
    const buffer = await workbook.xlsx.writeBuffer();

    // Guardar el archivo usando FileSaver
    const blob = new Blob([buffer], { type: 'application/octet-stream' });
    saveAs(blob, 'archivo-generado.xlsx');
  } catch (error) {
    console.error('Error generando el archivo Excel:', error);
  }
};

export default handleGenerateExcel;
