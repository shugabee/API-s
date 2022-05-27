
// const residentButton = document.querySelector('#residents-button');

// residentButton.addEventListener('click', (event) => {
//     console.log('button clicked');
//     axios.get('https://swapi.dev/api/planets/2/').then((res) => {
//         for(let i = 0; i < res.data.residents.length; i++) {
//             axios.get(res.data.residents[i]).then((res) => {
//                 console.log(res.data.name)
//                 const h2 = document.createElement('h2')
//                 h2.innerText = res.data.name
//                 document.querySelector('#residents-container').appendChild(h2)
//             })
//         }
//         console.log(res)
//     }).catch((error) => {
//         console.log(error)
//     })
// })


const residentsButton = document.getElementById('residents-button');

residentsButton.addEventListener('click', () => {
    axios.get('https://swapi.dev/api/planets/2/').then((res) => {
        for(let i = 0; i < res.data.residents.length; i++) {
           axios.get(res.data.residents[i]).then((res) => {
               const h2 = document.createElement('h2');
               h2.innerText = res.data.name
               document.getElementById('residents-container').appendChild(h2);
           })
        }
    });
    });

