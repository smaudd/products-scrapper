

import mercabarna from 'interfaces/mercabarna'

const toMilliseconds = (seconds) => seconds * 1000

const tasks = async () => {
    const cicle = async () => {
        await mercabarna()
        const oneDay26h = toMilliseconds(93600)
        console.log(`New task scheduled`)
        setTimeout(cicle, oneDay26h);
    }
    await cicle()
}


export default tasks