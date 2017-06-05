function initPDF(lista){
    var doc = new jsPDF();
    console.log(lista.nome);
    doc.text(20,20,lista.nome);
    doc.output('dataurlnewwindow');
    // doc.save('Test.pdf');
}