export interface Config {
    port: number,
    secure: boolean,
    domain: string,

    mongo: {
        host: string,
        port: number,
        database: string
    }
}