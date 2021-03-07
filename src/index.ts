import {Command, flags} from '@oclif/command'
import * as server from './server'
import * as client from './client'

class Mcsync extends Command {
  static description = 'Run the server-sync program'

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({char: 'v'}),

    help: flags.help({char: 'h'}),

    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),

    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),

    // flag to start server (-s, --server)
    server: flags.boolean({char: 's', description: 'Start the server'}),

    ip: flags.string({char: 'i', description: 'Server IP'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {flags} = this.parse(Mcsync)
    if (flags.server) {
      console.log('server started')
      server.main()
    } else {
      client.main()
    }

    /* const name = flags.name ?? 'world'
    this.log(`hello ${name} from ./src/index.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    } */
  }
}

export = Mcsync
