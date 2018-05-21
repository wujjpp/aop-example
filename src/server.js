/**
 * Created by Wu Jian Ping on - 2018/05/21.
 */

let metric = functionName => (target, property, descriptor) => {
  let func = descriptor.value
  descriptor.value = async (...args) => {
    let startTime = new Date().getTime()
    console.log(`${functionName} start: ${startTime}`) // eslint-disable-line
    await func.apply(target, args)
    let endTime = new Date().getTime()
    console.log(`${functionName} end: ${endTime}`) // eslint-disable-line
    console.log(`foo elapsed: ${functionName} ${endTime - startTime} ms`) // eslint-disable-line
  }
}

let logger = () => (target, property, descriptor) => {
  let func = descriptor.value
  descriptor.value = async (...args) => {
    console.log(`logger start -> funcName: ${property}`) // eslint-disable-line
    await func.apply(target, args)
    console.log(`logger end -> funcName: ${property}`) // eslint-disable-line
  }
}

let transaction = () => (target, property, descriptor) => {
  let func = descriptor.value
  descriptor.value = async (...args) => {
    console.log('transaction start') // eslint-disable-line
    await func.apply(target, args)
    console.log('transaction end') // eslint-disable-line
  }
}

class Sample {
  @logger()
  @metric('foo')
  @transaction()
  foo(name) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`hello ${name}`) // eslint-disable-line
        resolve()
      }, 1000)
    })
  }
}

let sample = new Sample()
sample.foo('world')
