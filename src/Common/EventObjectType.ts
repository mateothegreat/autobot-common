/**
 * Union type for handling different events.
 */
import { GuildMember }   from "discord.js";
import { CommandParser } from './CommandParser';

export type EVENT_OBJECT = CommandParser | GuildMember;
