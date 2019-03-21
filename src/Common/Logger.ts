export class Logger {

    public static log(args: string[] | string) {

        console.log(`${ new Date().toString() }: ${ args }`);

    }

}
