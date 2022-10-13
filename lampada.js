const turnOn = document.getElementById ( 'turnOn' );
const turnOff = document.getElementById ( 'turnOff');
const lamp = document.getElementById ( 'lamp');

function lampOn () {
    if ( !isLampBroken () ) {
    lamp.src = './lampada-acesa.png';
}}

turnOn.addEventListener ('click', lampOn)

function lampOff () {
    if (!isLampBroken () ) {
    lamp.src = './lampada-apagada.png';
    }}


turnOff.addEventListener ('click', lampOff )


lamp.addEventListener ('mouseover', lampOn)
lamp.addEventListener ('mouseleave', lampOff)

function lampBroken () {
    lamp.src = './lampada-quebrada.png';
}

lamp.addEventListener ('dblclick', lampBroken)

// Verificar se a lampada está quebrada, se estiver, parar todas as ações

function isLampBroken () {
    return lamp.src.indexOf ('lampada-quebrada') > -1
}