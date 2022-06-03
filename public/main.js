



document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const rapperName = document.querySelector('input').value
    try{
        const response = await fetch(`https://simple-rapper-api.herokuapp.com/api/${rapperName}`)
        const data = await response.json()

        console.log(data.age)
        rapper(data)
        
    }catch(error){
        console.log(error)
    }
}

const rapper = (data) => { 
   
    const list = document.querySelector('ul')
    list.innerHTML = ""

    let newLi = document.createElement('li')
    newLi.innerHTML = `<li>Age: ${data.age}</li>
                        <li>Birth name: ${data.birthName}</li>
                        <li>Birth Date: ${data.birthDate}</li>
                        <li>Birth Location: ${data.birthLocation}</li>
                        <li>Origin: ${data.origin}</li>
                        <li>Genre: ${data.genre}</li>
                        <li>Occupation: ${data.occupation}</li>
                        <li>Years active: ${data.yearsActive}</li>
                        <li>Labels: ${data.labels}</li>`

    return list.appendChild(newLi)
}