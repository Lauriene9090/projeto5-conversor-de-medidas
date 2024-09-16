let mValue = prompt("digite o valor em metros")
let chooseValue = prompt("escolha uma opção: 1-milimetros, 2-centimetros, 3-decimetros, 4-decametros, 5-hectometros, 6-uilômetros")
switch(chooseValue){
  case 'milimetro':
    alert(mValue*1000)
    break
  case 'centimetro':
    alert(mValue*100)
    break
  case 'decimetro':
    alert(mValue*10)
    break
  case 'decametro':
    alert(mValue/10)
    break
  case 'hectometro':
    alert(mValue)
    break
  case 'uilômetro':
    alert(mValue/1000)
    break
  default:
    alert('opção invalida!')
}
