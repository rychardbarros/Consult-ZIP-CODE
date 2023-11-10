document.getElementById('get').addEventListener('click', function(){
    const cep = document.getElementById('cep').value
    let result = document.getElementById('result')
    if (cep.length != 8){
        alert('CEP Invalido')
        return
    }else{
        const url = `https://viacep.com.br/ws/${cep}/json/`
        fetch(url)
            .then(response => response.json())
            .then(address => {
                if (address.erro){
                    result.innerHTML = `<img src="/assets/img/X.png" style="width: 100px; height: 100px">
                                        <p>CEP NÃO ENCONTRADO!</p>`
                    
                }else{
                    result.innerHTML = `<img src="/assets/img/icon.png" style="width: 300px; height: auto">
                                        <p>CEP: ${address.cep}</p>
                                        <p>Logradouro: ${address.logradouro}</p>
                                        <p>Bairro: ${address.bairro}</p>
                                        <p>Cidade: ${address.localidade}</p>
                                        <p>Estado: ${address.uf}</p>`
                    result.style.backgroundColor = "var(--bg-color)"
                    result.style.borderRadius = getComputedStyle(result).getPropertyValue('--border-radius')
                    
                }
            })
            .catch(error => {
                console.log(error)
            });5
        }
});