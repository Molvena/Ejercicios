import { useRef } from 'react'

//Vamos a utilizar useRef para recoger los valores de los inputs
// sin provocar un rerender cuando cambiemos el valor de los campos
// al no modificar ningún estado.
export const CodeTaxCalculator = () => {
    const grossIncomeRef = useRef(null);
    const taxPercentRef = useRef(null);

    const getNetIncome = () =>{
        const grossIncome = grossIncomeRef.current?.value;
        const taxPercent = taxPercentRef.current?.value;

        const total = grossIncome -grossIncome * (taxPercent/100);
        console.log("The net total is:", total);
    } ;


  return (
        <div>
      <h1>Sueldo Neto total </h1>

      <label htmlFor="gross-income">Sueldo bruto</label>
      <input
        id="gross-income"
        name="gross-income"
        type="number"
        defaultValue="0"
        min="0"
        ref={grossIncomeRef}
      />

      <br />

      <label htmlFor="tax">Porcentaje de impuestos</label>
      <input
        id="tax"
        name="tax"
        type="number"
        defaultValue="10"
        min="0"
        max="100"
        ref={taxPercentRef}
      />

      <br />

      <button onClick={getNetIncome}>Obtener sueldo neto</button>
    </div>
  )
}
