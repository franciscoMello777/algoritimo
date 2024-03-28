function maior (n1, n2, n3, n4, n5) {

    let maiornum = n1;
    
    if (n2 > maiornum) {
      maiornum = n2;
    }
    if (n3 > maiornum) {
      maiornum = n3;
    }
    if (n4 > maiornum) {
      maiornum = n4;
    }
    if (n5 > maiornum) {
      maiornum = n5;
    }
    
    return maiornum;
    }
    
    let resultado = maior(100, 45, 90, 9, 77)
    console.log(resultado)