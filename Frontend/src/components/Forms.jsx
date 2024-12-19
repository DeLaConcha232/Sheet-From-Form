import { useState } from 'react';
import styles from '../styles/forms.module.css'
import { Button, Label, TextInput, Select, Textarea } from "flowbite-react";
import { useForm } from 'react-hook-form';



export default function Forms() {

    const MetodoDePago = [
        { id: 0, clave: "PUE", mdp: "Pago en una sola exhibición" },
        { id: 1, clave: "PPD", mdp: "Pago en parcialidades o diferido" }
    ];

    const FormaDePago = [
        { id: 1, clave: "1", fdp: "Efectivo" },
        { id: 2, clave: "2", fdp: "Cheque nominativo" },
        { id: 3, clave: "3", fdp: "Transferencia electrónica de fondos" },
        { id: 4, clave: "4", fdp: "Tarjeta de crédito" },
        { id: 5, clave: "5", fdp: "Monedero electrónico" },
        { id: 6, clave: "6", fdp: "Dinero electrónico" },
        { id: 7, clave: "8", fdp: "Vales de despensa" },
        { id: 8, clave: "12", fdp: "Dación en pago" },
        { id: 9, clave: "13", fdp: "Pago por subrogación" },
        { id: 10, clave: "14", fdp: "Pago por consignación" },
        { id: 11, clave: "29", fdp: "Tarjeta de servicios" },
        { id: 12, clave: "30", fdp: "Aplicación de anticipos" },
        { id: 13, clave: "99", fdp: "por definir" },
    ];

    const CFDI = [
        { id: 1, clave: "G01", cfdi: "Adquisición de mercancias" },
        { id: 2, clave: "G02", cfdi: "Devoluciones, descuentos o bonificaciones" },
        { id: 3, clave: "G03", cfdi: "Gastos en general" },
        { id: 4, clave: "I01", cfdi: "Construcciones" },
        { id: 5, clave: "I02", cfdi: "Mobilario y equipo de oficina por inversiones" },
        { id: 6, clave: "I03", cfdi: "Equipo de transporte" },
        { id: 7, clave: "I04", cfdi: "Equipo de computo y accesorios" },
        { id: 8, clave: "I05", cfdi: "Dados, troqueles, moldes, matrices y herramientas" },
        { id: 9, clave: "I06", cfdi: "Comunicaciones telefónicas" },
        { id: 10, clave: "I07", cfdi: "Comunicaciones satelitales" },
        { id: 11, clave: "I08", cfdi: "Otra maquinaria y equipo" },
        { id: 12, clave: "D01", cfdi: "Honorarios médicos, dentales y gastos hospitalarios" },
        { id: 13, clave: "D02", cfdi: "Gastos médicos por incapacidad o discapacidad" },
        { id: 14, clave: "D03", cfdi: "Gastos funerales" },
        { id: 15, clave: "D04", cfdi: "Donativos" },
        { id: 16, clave: "D05", cfdi: "Intereses reales efectivamente pagados por créditos hipotecarios (casa habitación)" },
        { id: 17, clave: "D06", cfdi: "Aportaciones voluntarias al SAR" },
        { id: 18, clave: "D07", cfdi: "Primas por seguros de gastos médicos" },
        { id: 19, clave: "D08", cfdi: "Gastos de transportación escolar obligatoria" },
        { id: 20, clave: "D09", cfdi: "Depósitos en cuentas para el ahorro, primas que tengan como base planes de pensiones" },
        { id: 21, clave: "D10", cfdi: "Pagos por servicios educativos (colegiaturas)" },
        { id: 22, clave: "P01", cfdi: "Por definir" },
    ];

    const [valueP, setValue] = useState("");
    const [valueI, setImporte] = useState("");

    const handlechangePunitario = (e) => {
        const input = e.target.value.replace(/[^0-9]/g, "");
        const formattedValue = new Intl.NumberFormat("es-MX", {
            style: "currency",
            currency: "MXN",
        }).format(input / 100); // Dividimos entre 100 para manejar decimales
        setValue(formattedValue);
    }
    const handlechangeImporte = (e) => {
        const input = e.target.value.replace(/[^0-9]/g, "");
        const formattedValue = new Intl.NumberFormat("es-MX", {
            style: "currency",
            currency: "MXN",
        }).format(input / 100); // Dividimos entre 100 para manejar decimales
        setImporte(formattedValue);
    }

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

    const ONsubmit = async (data) => {
        try {
            // Llamada al endpoint del backend
            const response = await fetch("http://localhost:3000/endpoint", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data), // Convertir datos a JSON
            });

            if (response.ok) {
                const result = await response.json();
                console.log("Datos enviados exitosamente:", result);
            } else {
                console.error("Error al enviar los datos:", response.statusText);
            }
        } catch (error) {
            console.error("Error en la conexión:", error);
        }
    }



    return (
        <>
            <article className={styles.container}>
                <form onSubmit={handleSubmit(ONsubmit, onSubmit)} className={styles.containerForms} id='myForm'>
                    <section className={styles.container1}>

                        <div className="w-full">
                            <div className="mb-2 block">
                                <Label htmlFor="receptor" value="Receptor*" />
                            </div>
                            <Select id="receptor" {...register("receptor")} className={styles.item} required>
                                <option value="0">none</option>
                                <option value="United States">United States</option>
                                <option value="Canada">Canada</option>
                                <option value="France">France</option>
                                <option value="Germany">Germany</option>
                            </Select>
                        </div>


                        <div className="w-full">
                            <div className="mb-2 block">
                                <Label htmlFor="rfc" value="RFC" />
                            </div>
                            <TextInput id="rfc" type="text" sizing="md" {...register("RFC")} className={styles.item} required />
                        </div>
                        <div className="w-full">
                            <div className="mb-2 block">
                                <Label htmlFor="regimen" value="Regimen" />
                            </div>
                            <TextInput id="regimen" type="text" sizing="md" {...register("regimen")} className={styles.item} required />
                        </div>
                        <div className="w-full">
                            <div className="mb-2 block">
                                <Label htmlFor="cp" value="C.P." />
                            </div>
                            <TextInput id="cp" type="text" sizing="md" {...register("CP")} className={styles.item} required />
                        </div>

                        <div className="w-full">
                            <div className="mb-2 block">
                                <Label htmlFor="Cfdi" value="Uso del CFDI*" />
                            </div>
                            <Select id="Cfdi" {...register("cfdi")} className={styles.item} required>
                                <option value="0">ninguno</option>
                                {CFDI.map((metodo) => (
                                    <option key={metodo.id} value={metodo.clave}>{metodo.cfdi}</option>
                                ))};
                            </Select>
                        </div>

                        <div className="w-full">
                            <div className="mb-2 block">
                                <Label htmlFor="emisor" value="Emisor" />
                            </div>
                            <TextInput id="emisor" {...register("emisor")} type="text" sizing="md" className={styles.item} required />
                        </div>
                        
                        <div className="w-full">
                            <div className="mb-2 block">
                                <Label htmlFor="MdP" value="Metodo de Pago*" />
                            </div>
                            <Select id="MdP" {...register("MetodoPago")} className={styles.item} required>
                                <option value="0">ninguno</option>
                                {MetodoDePago.map((metodo) => (
                                    <option key={metodo.id} value={metodo.clave}>{metodo.mdp}</option>
                                ))
                                }
                            </Select>
                        </div>

                        <div className="w-full">
                            <div className="mb-2 block">
                                <Label htmlFor="FdP" value="Forma de pago*" />
                            </div>
                            <Select id="FdP" {...register("FormaPago")} className={styles.item} required>
                                <option value="0">ninguno</option>
                                {FormaDePago.map((metodo) => (
                                    <option key={metodo.id} value={metodo.clave}>{metodo.fdp}</option>
                                ))};
                            </Select>
                        </div>

                        <div className="w-full">
                            <div className="mb-2 block">
                                <Label htmlFor="digitos" value="Ultimos cuatro digitos" />
                            </div>
                            <TextInput id="digitos" {...register("ultimos4digitos")} type="text" sizing="md" className={styles.item} required />
                        </div>
                        <div className="w-full">
                            <div className="mb-2 block">
                                <Label htmlFor="fecha" value="Fecha" />
                            </div>
                            <TextInput id="fecha" {...register("fecha")} type="date" sizing="md" className={styles.item} required />
                        </div>
                        <div className="w-full">
                            <div className="mb-2 block">
                                <Label htmlFor="banco" value="Banco" />
                            </div>
                            <TextInput id="banco" {...register("banco")} type="text" sizing="md" className={styles.item} required />
                        </div>
                    </section>
                    <section className={styles.container2}>
                        <div className="w-full">
                            <div className="mb-2 block">
                                <Label htmlFor="cantidad" value="CANTIDAD" />
                            </div>
                            <TextInput id="cantidad" {...register("cantidad")} type="number" sizing="md" className={styles.item} required />
                        </div>
                        <div className="w-full">
                            <div className="mb-2 block">
                                <Label htmlFor="unidad" value="UNIDAD" />
                            </div>
                            <TextInput id="unidad" {...register("unidad")} type="text" sizing="md" className={styles.item} required />
                        </div>
                        <div className="w-full">
                            <div className="mb-2 block">
                                <Label htmlFor="sat" value="CLAVE SAT" />
                            </div>
                            <TextInput id="sat" {...register("sat")} type="text" sizing="md" className={styles.item} required />
                        </div>

                        <div className="w-full">
                            <div className="mb-2 block">
                                <Label htmlFor="descripcion" value="DESCRIPCION*" />
                            </div>
                            <Textarea id="descripcion" {...register("descripcion")} placeholder="Descripcion..." className={styles.item} required rows={7} />
                        </div>

                        <div className="w-full">
                            <div className="mb-2 block">
                                <Label htmlFor="precioUnitario" value="P.UNITARIO" />
                            </div>
                            <TextInput id="precioUnitario" {...register("precioUnitario")} type="text" sizing="md" className={styles.item} onChange={handlechangePunitario} value={valueP} required  />
                        </div>

                        <div className="w-full">
                            <div className="mb-2 block">
                                <Label htmlFor="importe" value="IMPORTE" />
                            </div>
                            <TextInput id="importe" {...register("importe")} type="text" sizing="md" className={styles.item} onChange={handlechangeImporte} value={valueI} required />
                        </div>

                        <div className="w-full">
                            <div className="mb-2 block">
                                <Label htmlFor="claveP" value="CLAVE-PRODUCTO" />
                            </div>
                            <TextInput id="claveP" {...register("claveP")} type="text" sizing="md" className={styles.item} required />
                        </div>

                        <div className="w-full">
                            <div className="mb-2 block">
                                <Label htmlFor="descripcionP" value="DESCRIPCION-PRODUCTO" />
                            </div>
                            <TextInput id="descripcionP" {...register("descripcionP")} type="text" sizing="md" className={styles.item} required />
                        </div>


                    </section>
                    <Button color="blue" type="submit" className={styles.submitBtn}>Generar Documento Excel</Button>
                    <Button color="red" type="reset" className={styles.submitBtn}>Resetear Campos del Formulario</Button>
                </form>
            </article>
        </>
    )
}

