import { CommandParam } from './CommandParam';
import { Event }        from './Event';

export class CommandConfig {

    public event: Event;
    public name?: string;
    public aliases?: string[];
    public group?: string;
    public description?: string;
    public params?: CommandParam[];
    public roles?: string[];

}
