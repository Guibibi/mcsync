import {Command, flags} from '@oclif/command'
import * as server from './server'

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
  }

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(Mcsync)
    if (flags.server) {
      console.log('server started')
      server.main()
    }

    const name = flags.name ?? 'world'
    this.log(`hello ${name} from ./src/index.ts`)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}

export = Mcsync
