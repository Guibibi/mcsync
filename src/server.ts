import chalk from 'chalk'
import * as boxen from 'boxen'
import * as fs from 'fs'
import * as net from 'net'
import * as path from 'path'
import * as vars from './vars'
import * as lib from './lib'

const port = 3456
const isRunning = false
/* const serverFiles: string[] = [
  'a2.jar', // Changed version
  'b1.jar', // Same file
  'c1.jar', // Same file
  'd1.jar', // Deleted on client
] */
let serverFiles: string[] = []
let clientFiles: string[] = []
let filesDiff: string[] = []
export function main() {
  console.log(boxen(chalk.yellow('Server Starting'), vars.boxenOptions))
  serverFiles = lib.getMods()
  console.log(serverFiles, 'server')

  //startServer()
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
