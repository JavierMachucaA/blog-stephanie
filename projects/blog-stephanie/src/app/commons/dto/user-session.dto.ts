export class UserSessionDto {
    token: string;
    name : string;
    lastname : string;
    mail : string;
    imgUri: string;
    google: boolean;

    constructor (token: string, mail: string, name?: string, lastname?: string, google = false, imgUri?: string ) {
        this.token = token;
        this.mail = mail;
        this.name = name;
        this.lastname = lastname;
        this.google = google;
        this.imgUri = imgUri;
    }
}