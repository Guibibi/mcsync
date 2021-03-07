import chalk from 'chalk'
import * as boxen from 'boxen'
import * as fs from 'fs'
import * as net from 'net'
import * as path from 'path'
import * as vars from './vars'

const port = 3456
const isRunning = false
const serverFiles: string[] = [
  'a2.jar', // Changed version
  'b1.jar', // Same file
  'c1.jar', // Same file
  'd1.jar', // Deleted on client
]
let clientFiles: string[] = [
  'a1.jar',
  'b1.jar',
  'c1.jar',
  'e1.jar', // Only on client
]
let filesDiff: string[] = []
export function main() {
  console.log(boxen(chalk.yellow('Server Starting'), vars.boxenOptions))
  getServerMods()
}
function getServerMods() {
  fs.readdir('./mods', (err: any, files: any[]) => {
    if (err) return console.log(chalk.red('No mods folder found!'))
    files.forEach((file: any) => {
      //serverFiles.push(file)
      //clientFiles.push(file)
    })
  })
  //compareFiles()
  startServer()
}

function compareFiles() {
  let toDl = serverFiles.filter(file => !clientFiles.includes(file)) // Check which file to download from the server
  console.log(toDl, 'To download')
  let toRemove = clientFiles.filter(file => !serverFiles.includes(file)) // Check which file to delete from the client
  console.log(toRemove, 'To remove')
}

function startServer() {
  var server = net.createServer(c => {
    console.log('Client has connected to server')
    c.on('end', () => {
      console.log('Server closed')
    })
    c.write('hello\r\n')
    c.pipe(c)
  })
  server.listen(8124, function () {
    //'listening' listener
    console.log('server bound')
  })
}
