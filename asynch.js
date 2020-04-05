//Asynchronous JS
// const second = () => {
//     setTimeout(() => {
//         console.log('Second function')
//     }, 2000)     
// }
// const first = () => {
//     console.log('Hello there mothafucka')
//     second()
//     console.log('The end')
// }
// first()

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Asynchronous with callback function

// function getRecipe() {
//     setTimeout(() => {
//         const recipeID = [523, 712, 890, 900]
//         console.log(recipeID)

//         setTimeout((id) => {
//             const recipe = {
//                 title: 'Fresh tomato pasta',
//                 publisher: 'Dipin',
//             }

//             setTimeout(publisher => {
//                 const recipe = { title: 'pizza', publisher: 'Khatri'}
//                 console.log(recipe)
//             }, 1500, recipe.publisher)
            
//             console.log(`${id}: ${recipe.title}`)

//         }, 1000, recipeID[2])//we can set third argument 

//     }, 1500)
// }

// getRecipe()

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//Promise

    // const getIDs = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve([523, 712, 890, 900])
    //     }, 1500)
    // })

    
    // const getRecipe = recID => {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(ID =>{
    //             const recipe = {title: 'Fresh tomato pasta', publisher: 'Dipin',}
    //             resolve(`${ID}: ${recipe.title}`)
    //         },1500, recID)                        
    //     }) 
    // }

    // const getRelated = publisher => {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(pub => {
    //             const recipe = { title: 'pizza', publisher: 'Khatri'}
    //             resolve(`${pub}: ${recipe.title}`)
    //         }, 1500, publisher)
    //     })
    // }

    // //The id down below is the result consumed after we get the result
    // getIDs.then(IDs => {
    //     console.log(IDs)
    //     return getRecipe(IDs[2])
    // })
    // .then(recipe =>{
    //     console.log(recipe)
    //     return getRelated('Dipin')
    // })
    // .then(pub => {
    //     console.log(pub)
    // })
    // .catch(error => {
    //     console.log('Error!!!!')
    // }) 

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//Async Await

//     const getIDs = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve([523, 712, 890, 900])
//         }, 1500)
//     })

    
//     const getRecipe = recID => {
//         return new Promise((resolve, reject) => {
//             setTimeout(ID =>{
//                 const recipe = {title: 'Fresh tomato pasta', publisher: 'Dipin',}
//                 resolve(`${ID}: ${recipe.title}`)
//             },1500, recID)                        
//         }) 
//     }

//     const getRelated = publisher => {
//         return new Promise((resolve, reject) => {
//             setTimeout(pub => {
//                 const recipe = { title: 'pizza', publisher: 'Khatri'}
//                 resolve(`${pub}: ${recipe.title}`)
//             }, 1500, publisher)
//         })
//     }


// async function getRecipeAW() {
//     const  IDs = await getIDs
//     console.log(IDs)
//     const recipe = await getRecipe(IDs[2])
//     console.log(recipe)
//     const related = await getRelated('Dipin')
//     console.log(related)
//     const r = await getRelated('Lwami')
//     console.log(r)

//     return r
// }
// getRecipeAW().then(result => {
//     console.log(`${result} is the best ever`)
// })

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//AJAX and API
// function getWeather(woeid){

//     fetch(`https://www.metaweather.com/api/location/${woeid}/`).then(result => {
//         //console.log(result)
//         return result.json()
//     }).then(data => {
//         //console.log(data)
//         const today = data.consolidated_weather[0]
//         console.log(`Temperature today in ${data.title} stay between ${today.min_temp} and ${ today.max_temp}`)
//     })
//     .catch(error => {
//         console.log(error)
//     })

// }

// getWeather(2487956)
// getWeather(44418)


// async function getWeatherAW(woeid) {

//     try{
//         const result = await fetch(`https://www.metaweather.com/api/location/${woeid}/`)
//         const data = await result.json()
//         //console.log(data)
//         const tomorrow = data.consolidated_weather[1]
//         console.log(`Temperature tomorrow in ${data.title} stay between ${tomorrow.min_temp} and ${ tomorrow.max_temp}`)

//         return data
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// getWeatherAW(2487956)
// let dataLondon 
// getWeatherAW(44418).then(data => {
//     dataLondon = data
//     console.log(dataLondon)
// })


//Bitwise operators
// let n = 449
// let k = 8
// let a = 0
// for(let i=1; i<n; i++) {  //i={}
//     for(let j=i+1;j<=n;j++){   //i=1  j={1,2,3,4,5}
//             if((i&j) < k && (i&j) > a){
//                 a = (i&j)
//             }
//     }
// }

// console.log(a)


// let count = 0
// let button = document.getElementById('btn')
// button.textContent = count
// button.addEventListener('click',() => {
//     count++
//     document.getElementById('btn').textContent = count
// })



