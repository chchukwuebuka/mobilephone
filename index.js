class MobileNumber {
    constructor() {
        this.numbers = [];
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer)
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers(phoneNumber) {
        this.observers.forEach(observer => observer.update(phoneNumber));
    }

    addPhoneNumber(phoneNumber) {
        this.numbers.push(phoneNumber);
    }

    removePhoneNumber(phoneNumber) {
        this.numbers = this.numbers.filter(num => num !== phoneNumber);
    }

    dialPhoneNumber(phoneNumber) {
        switch(true){
            case this.numbers.includes(phoneNumber):
            console.log(`Dialing ${phoneNumber}`);
            this.notifyObservers(phoneNumber);
            break;
        default:
            console.log("This phone number not found.");    
            break;
        }

    }

}

class MobileObserver {
    update(phoneNumber) {
        console.log(`Phone number: ${phoneNumber}`);
    }
} 

class CustomObserver{
    update(phoneNumber) {
         console.log(`Now Dialing: ${phoneNumber}`);
    }
}

let mobileNumber = new MobileNumber();
let mobileObserver = new MobileObserver();
let customObserver = new CustomObserver();

mobileNumber.addObserver(mobileObserver); 
mobileNumber.addObserver(customObserver);
 
mobileNumber.addPhoneNumber(2347023232)
mobileNumber.dialPhoneNumber(2347023232)
