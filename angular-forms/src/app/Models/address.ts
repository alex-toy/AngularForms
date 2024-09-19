export class Address {
    constructor(
        public Street : string,
        public City : string,
        public State : string,
        public PostalCode : string
    ) {}

    public static CreateEmptyAddress(){
        return new Address('', '', '', '')
    }
}
