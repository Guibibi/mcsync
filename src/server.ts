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
  if (serverFiles.length === 0) {
    console.log(chalk.red('No mods folder found, exiting'))
    return false
  }
  console.log(serverFiles, 'server')
  var myZip = lib.zipFiles(serverFiles, './mods')
  console.log(myZip)
  startServer()
}

function compareFiles() {
  let toDl = serverFiles.filter(file => !clientFiles.includes(file)) // Check which file to download from the server
  console.log(toDl, 'To download')
  let toRemove = clientFiles.filter(file => !serverFiles.includes(file)) // Check which file to delete from the client
  console.log(toRemove, 'To remove')
}

function startServer() {
  const server = new net.Server()

  server.listen(port, function () {
    console.log(`Server listening for connection requests on socket localhost:${port}`)
  })

  server.on('connection', () => {
    console.log('A new client has connected')
  })

  server.on('data', chunk => {
    console.log(chunk)
  })
}
