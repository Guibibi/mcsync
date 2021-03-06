var fs = require('fs')
var net = require('net')
var chalk = require('chalk')
var path = require('path')

const port = 3456
const isRunning = false
const serverFiles: any[] = []

export function main() {
  console.log('hello server')
  fs.readdir('./mods', (err: any, files: any[]) => {
    files.forEach((file: any) => {
      serverFiles.push(file)
    })
    console.log(serverFiles)
    if ((serverFiles.length = 0)) {
    }
  })
}
