const foo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(1000, resolve('foo'))
    })
}

const bar = async ()=>{
    foo().then((data)=>{
        console.log(data)
    })
}

potato()
