import * as fs from 'fs'
import chalk from 'chalk'
import * as adm from 'adm-zip'
import AdmZip = require('adm-zip')

export function getMods(): string[] {
  let filenames: string[] = []
  try {
    filenames = fs.readdirSync('./mods')
  } catch (e) {
    console.log(chalk.red('No mods folder found, exiting'))
  }
  return filenames
}

export function zipFiles(filesArray: string[], folder: string): Buffer {
  // Zip the files and return it as a buffer.
  var zip = new AdmZip()

  filesArray.forEach((file: any) => {
    zip.addLocalFile(`./${folder}/${file}`)
  })
  return zip.toBuffer()
}
