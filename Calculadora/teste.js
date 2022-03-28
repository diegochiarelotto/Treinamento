function igual()
{ 
    let resultado = document.getElementById('res').innerHTML;
          if (resultado)  {
        document.getElementById('res').innerHTML = eval(resultado)
        }
         else {
            document.getElementById('res').innerHTML = "Informe o valor"
        }
}