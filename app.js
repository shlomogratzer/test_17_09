

const btn = document.querySelector('#btn')

btn.addEventListener('click',()=>{
    const yelloBoxcheck = document.querySelector('.yello-box')
    if(yelloBoxcheck){
        yelloBoxcheck.remove()
    }
    else{
        const main = document.querySelector('#main')

        const yelloBox = document.createElement('div')
        yelloBox.classList = 'yello-box'
        main.appendChild(yelloBox)
    }
})

const runPage = async() =>{
    const main = document.querySelector('#main')
    const div = document.createElement('div')
    const lbl = document.createElement('lable')

    const rsp = await fetch('https://randomuser.me/api/')
    const data = rsp.json()


    lbl.innerText = `${data.name.first} ${data.name.last}`
    div.appendChild(lbl)
    main.appendChild(div)
}

runPage()