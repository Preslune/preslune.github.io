let state = false

let togglenavbarMenu = () =>{
    let x = document.getElementById('mobilenavbar-item')
    if(state === false){
        x.style.display = 'flex'
        state = true
    } else if(state === true){
        x.style.display = 'none'
        state = false
    }
}