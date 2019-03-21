import { CommandConfig } from './CommandConfig';
import { EVENT_OBJECT }  from './EventObjectType';

/*
 * Base class that all commands inherit from.
 *
 */
export class CommandBase {

    public config: CommandConfig;

    public constructor(config: CommandConfig) {

        this.config = config;

    }

    public run(command: EVENT_OBJECT): void {

    }

}
