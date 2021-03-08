import * as vars from './vars'
import * as boxen from 'boxen'
import chalk from 'chalk'
import * as lib from './lib'
import * as net from 'net'

/* let clientFiles: string[] = [
  'a1.jar',
  'b1.jar',
  'c1.jar',
  'e1.jar', // Only on client
] */
import cli from 'cli-ux'

let ip = ''
let port = 3456

export async function main() {
  console.log(boxen(chalk.greenBright('Welcome to McSync'), vars.boxenOptions))
  ip = await cli.prompt('What is the server IP?')
  const clientFiles = lib.getMods()
  console.log(clientFiles)

  var client = new net.Socket()
  client.connect(port, ip, () => {
    console.log('Connected to server')

    client.write(Buffer.from(clientFiles))
  })
}
