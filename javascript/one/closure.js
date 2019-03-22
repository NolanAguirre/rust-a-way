const foo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(1000, resolve('foo'))
    })
}

const bar = async ()=>{
    const megaClosure = 'mega'
    async function baz(ID) {
        const id = Math.random().toString(36).substr(2, 9) + '' + ID
        await foo().then((data)=>{
            console.log(id)
            console.log(megaClosure)
            return data;
        })
    }
    baz('one')
    baz('two')
}

bar()
