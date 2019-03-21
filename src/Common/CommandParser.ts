import { GuildMember, Message } from 'discord.js';
import { CommandArgument }      from './CommandArgument';

export type MESSAGE_TYPE = Message & GuildMember;

/**
 * Takes in a obj and parses it out into a Command Class Instance.
 */
export class CommandParser {

    /**
     * Name of the command parsed out.
     */
    public command: string;

    /**
     * Arguments parsed out between commas.
     */
    public arguments: CommandArgument[] = [];

    /**
     * Arguments parsed out between commas, as an object using name as the key.
     */
    public namedarguments: any = {};

    /**
     * Discord.js Message Object.
     */
    public obj: MESSAGE_TYPE;

    /**
     * @description Class Constructor requiring a Discord.js Message Object.
     *
     * @param obj Discord.js object.
     *
     */
    public constructor(obj: MESSAGE_TYPE) {

        //
        // Match between spaces or to the end if no spaces found.
        // i.e.: `!ping` or `>test chars=abc,num=123
        //
        const matches = obj.content.match(/^(.*?)(?:\s+|$)(.*)/);

        if (!!matches && matches.length === 3) {

            this.command = matches[ 1 ];

            const split = matches[ 2 ].split(',');

            for (let i = 0; i < split.length; i++) {

                const splitRow = split[ i ].split('=');

                this.namedarguments[ splitRow[ 0 ] ] = splitRow[ 1 ];

                this.arguments.push({

                    name: splitRow[ 0 ],
                    value: splitRow[ 1 ]

                });

            }

        }

        this.obj = obj;

    }

    /**
     * @description Retrives a parsed argument by it's name.
     *
     * @param commandName Name of the argument (name=somecommand).
     *
     * @returns CommandArgument CommandArgument or null if not found.
     *
     */
    public getArgumentByName(commandName: string): CommandArgument {

        for (let i = 0; i < this.arguments.length; i++) {

            if (this.arguments[ i ].name === commandName) {

                return this.arguments[ i ];

            }

        }

    }

}
