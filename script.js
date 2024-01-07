function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('light')

    /*PEGANDO A IMAGEM */
    const img = document.querySelector('#perfil img')
    /*TROCA DE IMAGEM */
    if (html.classList.contains('light')){
        img.setAttribute('src','./assets/avatar-light.png')
        img.setAttribute('alt','fundo amarelo')
    }else{
        img.setAttribute('src','./assets/avatar.png')
        img.setAttribute('alt','fundo azul')
    }
    
}