function quantityMinus(index){
  var s = document.getElementsByName("quantity")[index];
  if(s.value > 1){
    s.value--;
  }else{
    s.value = 0;
  }
}

function quantityPlus(index){
  var s = document.getElementsByName("quantity")[index];
  if(s.value < 999){
    s.value++;
  }else{
    s.value = 999;
  }
}
