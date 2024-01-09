window.onload = function() {
    setTimeout(function(){
      //console.log('2000 addEventListner');
      document.querySelector("#paymentMethod_1_payment\\.creditCard\\.title").addEventListener('click',  onClickCreditCard);
    }, 2000);
  };
  
  function onClickCreditCard() {
     console.log('call onClickCreditCard');
     setTimeout(function(){
       //console.log('100 addEventListner');
       document.querySelector('#copyName').parentElement.style.display='none'
       document.querySelector("#cardName01").placeholder = '(Family Name)';
       document.querySelector("#cardName02").placeholder = '(First Name)';
    }, 100);
  }