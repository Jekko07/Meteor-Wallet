import { Meteor } from 'meteor/meteor';
import "../imports/api/ContactsCollection";
import { ContactsCollection } from '../imports/api/ContactsCollection';

Meteor.startup(async () => {
    // Allow all client-side updates on the Lists collection
    //added this to allow client side changes to work
    ContactsCollection.allow({
    insert() { return true; },
    update() { return true; },
    remove() { return true; },
    });
});
