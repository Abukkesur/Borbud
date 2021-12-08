const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.spnCursor');
const txt = "Nasza Firma świadczy profesjonalne usługi budowlane na terenie miasta Otmuchów i w jego okolicy.Zakres naszej działalności to ....... mieszkań, domów, biur.Realizujemy usługi z kompletnym materiałem, który dowozimy na miejsce. Wysyłamy szczegółową i bezpłatną wycenę, a uzgodniona cena jest obowiązująca.Usługi budowlane świadczymy na najwyższym poziomie.Powierzając nam remont mieszkania możesz mieć pewność że prace te, zostaną wykonane fachowo i starannie. W swoim dorobku posiadamy bogate doświadczenie oraz rekomendacje wieluzadowolonych klientów. Serdecznie zapraszamy do kontaktu."
let active = 0;
const addLetter = ()=>{

    spnText.textContent += txt[active];
    active++;
    if(active==txt.length){
        clearInterval(indexTyping);
    }
}
const activeCursor = ()=>{
    spnCursor.classList.toggle('active');
}

const indexTyping = setInterval(addLetter, 20);
setInterval(activeCursor,400);
