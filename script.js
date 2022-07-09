const good=document.querySelector('#good');
const cheap=document.querySelector('#cheap');
const fast=document.querySelector('#fast');
const toggle=document.querySelectorAll('.toggle');

toggle.forEach(tgl=>{
    tgl.addEventListener('change',(e)=>{
        TransFuncs(e.target);
    })
})
function TransFuncs(clickedxyz){
    if(good.checked&&fast.checked&&cheap.checked){
        if(clickedxyz===good){
            cheap.checked=false;
        }
        if(clickedxyz===fast){
            good.checked=false;
        }
        if(clickedxyz===cheap){
            fast.checked=false;
        }
    }
}