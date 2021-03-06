import chalk from 'chalk'
import * as fs from 'fs'
import * as net from 'net'
import * as path from 'path'

const port = 3456
const isRunning = false
const serverFiles: any[] = []

export function main() {
  console.log('hello server')
  fs.readdir('./mods', (err: any, files: any[]) => {
    if (err) return console.log(chalk.red('No mods folder found!'))
    files.forEach((file: any) => {
      serverFiles.push(file)
    })
    console.log(serverFiles)
    if ((serverFiles.length = 0)) {
      return false
    } else {
      console.log(chalk.green(serverFiles.toString()))
    }
  })
}
