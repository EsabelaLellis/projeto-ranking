function cadPessoa(vendedor, venda, recorrencia, dia, semanal, total){
    var tb = document.getElementById("tbPessoas");
    var qtdLinhas = tb.rows.length
    var linha = tb.insertRow(qtdLinhas);

    var cellPosicao = linha.insertCell(0);
    var cellVendedor = linha.insertCell(1);
    var cellVenda = linha.insertCell(2);
    var cellRecorrencia = linha.insertCell(3);
    var cellDia = linha.insertCell(3);
    var cellSemanal = linha.insertCell(4);
    var cellTotal = linha.insertCell(5);

    cellPosicao.innerHTML = qtdLinhas;
    cellVendedor.innerHTML = vendedor;
    cellVenda.innerHTML = venda;
    cellRecorrencia.innerHTML = recorrencia;
    cellDia.innerHTML = dia;
    cellSemanal.innerHTML = semanal;
    cellTotal.innerHTML = total;
    
}
