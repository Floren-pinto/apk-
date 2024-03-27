
document.getElementById('interpretation').value = 'analiza dadus'
const defBmi = 'ita nia BMI (Body Mas Index) indika ita bot'

function bmi(){
    // dadus input
    let weight = parseFloat(document.getElementById('weight').value)
    let height = parseFloat(document.getElementById('height').value) / 100
    
    // Formula
    const bmi = weight / (height * height)

    // Output set
    let result = document.getElementById('output')
    let interpretation = document.getElementById('interpretation')
    
    // Rule 
    if(!isNaN(bmi) && bmi > 10 && bmi < 40 ){
        result.innerHTML = `${bmi.toFixed(2)}`
        if(bmi < 18.5){
            interpretation.innerHTML = defBmi + ' isin tun ka <b>underweight</b>'
        }else if(bmi >= 18.5 && bmi <= 24.9){
            interpretation.innerHTML =  defBmi + ' todan normal ka <b>healthy weight</b>'
        }else if(isNaN(bmi)){
            interpretation.innerHTML = `analiza iha ne`
        }else{
            interpretation.innerHTML =  defBmi + ` obesidade ka <b>overweight</b>`
        }
        
    }else if(isNaN(bmi)){
        result.innerHTML = `Favor Inputa Dadus`;
    }else{
        result.style.fontSize = '18px';
        result.innerHTML = `Favor hatama dadus nebe validu (weight no height)`;
    }
}
    
// style

