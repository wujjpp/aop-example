/**
 * Created by Wu Jian Ping on - 2017/10/09.
 */

let axios = require('axios')
const ArgumentParser = require('argparse').ArgumentParser

let parser = new ArgumentParser({
  addHelp: true,
  description: 'regist service helper',
  prog: 'node regist.js',
  usage: 'Usage %(prog)s <agrs>'
})

parser.addArgument(['-c', '--consul'], { help: 'Consul regist service url' })
parser.addArgument(['-i', '--id'], { help: 'Service Id' })
parser.addArgument(['-n', '--name'], { help: 'Service Name' })
parser.addArgument(['-p', '--port'], { help: 'Service Listening Port' })

let args = parser.parseArgs()

let consul = args.consul
let id = args.id
let name = args.name
let port = +args.port

axios
  .put(consul,
    {ID: id, Name: name, Port: port},
    {headers: {'X-Requested-With': 'XMLHttpRequest'}})
  .then(() => {
    console.log('Service regist successfully') // eslint-disable-line
    process.exit(0)
  })
  .catch(err => {
    console.error('Service regist failed') // eslint-disable-line
    console.error(err) // eslint-disable-line
    process.exit(1)
  })
