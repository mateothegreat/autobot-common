import { BOT } from './Bot';

/*
 * Command class annotation use to automatically "register" instances into BOT.
 *
 * @param any target Command Class
 */
export function Command(target: any): void {

    //
    // Register the class annotated with @Command
    //
    BOT.register(new target());

}
