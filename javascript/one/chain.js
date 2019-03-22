const foo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(1000, resolve('foo'))
    })
}
const bar = () => {
    return new Promise((resolve, reject) => {
        setTimeout(1000, reject('foo'))
    })
}

(async () => {
    await foo().then((data)=>{
        console.log('data ' + data)
        return data
    }).then((data)=>{
        console.log('/////////////////')
        console.log('throwing fake error 1')
        throw new Error('This is a fake error #1')
        return data
    }).catch((error)=>{
        console.log('/////////////////')
        console.log('catching fake error 1')
        return 'an error occured'
    }).finally(()=>{
        console.log('/////////////////')
        console.log('i am a finally')
    }).then((data)=>{
        console.log('/////////////////')
        console.log('data ' + data)
        console.log('throwing fake error 2')
        throw new Error('This is a fake error # 2')
        return data
    }).catch((error)=>{
        console.log('/////////////////')
        console.log('catching fake error 2')
        return 'next'
    })
    console.log(`\nNEW PROMISE`)
    await bar().then((data)=>{
        console.log('data ' + data)
        return data
    }).then((data)=>{
        console.log('/////////////////')
        console.log('throwing fake error 1')
        throw new Error('This is a fake error #1')
        return data
    }).catch((error)=>{
        console.log('/////////////////')
        console.log('catching fake error 1')
        return 'an error occured'
    }).finally(()=>{
        console.log('/////////////////')
        console.log('i am a finally')
    }).then((data)=>{
        console.log('/////////////////')
        console.log('data ' + data)
        console.log('throwing fake error 2')
        throw new Error('This is a fake error # 2')
        return data
    }).catch((error)=>{
        console.log('/////////////////')
        console.log('catching fake error 2')
        return 'next'
    })

})()
console.log('/////////////////')
