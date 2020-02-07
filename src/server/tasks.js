

import mercabarna from 'interfaces/mercabarna'
import Task from 'models/Task.model'


const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const toMilliseconds = (seconds) => seconds * 1000

const isDayTime = () => {
    const hours = new Date().getHours()
    if (hours > 5 && hours < 23) {
        return true
    }
    return false
}

const tasks = async () => {
    const cicle = async () => {
        await mercabarna()
        const oneDay26h = toMilliseconds(93600)
        const newTask = new Task({
            programmed: new Date(oneDay26h + Date.now()).toString()
        })
        await newTask.save()
        console.log(`New task scheduled @ ${newTask.programmed}`)
        setTimeout(cicle, oneDay26h);
    }
    await cicle()
}



export default tasks