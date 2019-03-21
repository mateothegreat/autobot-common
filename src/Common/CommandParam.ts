/*
 * Parameter type class that commands configure themselves with.
 */
export class CommandParam {

    /**
     * Name of the command, i.e.: !ping or >hellow
     */
    public name: string;

    /**
     * Command description -- used with the help command and during validation error(s) (optional).
     */
    public description?: string;

    /**
     * Determine if this parameter is required (optional).
     */
    public required?: boolean;

    /**
     * Regular expression pattern for validating this parameter (optional).
     */
    public pattern?: string;

    /**
     * Initial default value (optional).
     */
    public value?: string;

}
