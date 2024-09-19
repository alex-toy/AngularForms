import { Address } from "./address";

export class User {
    constructor(
        public Name : string,
        public Email : string,
        public Phone : string,
        public Topic : string,
        public TimePreference : string,
        public IsSendPromotionalOffers : boolean,
        public Address : Address
    ) {}

    public static CreateEmptyUser(){
        return new User('alex', 'rea', 'dnfdrg', 'sdfsg', 'sddgs', false, Address.CreateEmptyAddress())
    }
}
