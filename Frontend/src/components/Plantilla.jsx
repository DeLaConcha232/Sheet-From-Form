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
    worksheet.getCell('A1').value = formData.nombre; // Ejemplo: Escribir el nombre en A1
    worksheet.getCell('B1').value = formData.apellido; // Escribir el apellido en B1
    worksheet.getCell('C1').value = formData.edad; // Escribir la edad en C1

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
