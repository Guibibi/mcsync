import * as fs from 'fs'
import chalk from 'chalk'
var modsFiles: string[] = []

export function getMods() {
  fs.readdir('./mods', (err: any, files: any[]) => {
    if (err) return console.log(chalk.red('No mods folder found!'))
    files.forEach((file: any) => {
      modsFiles.push(file)
    })
  })
  return modsFiles
}
