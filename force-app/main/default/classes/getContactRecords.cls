public with sharing class getContactRecords {
    @AuraEnabled(cacheable=true)
    public static list<Contact> contactRecords(string filter){
      
        list<Contact> contacts=[SELECT id, Name FROM Contact WHERE Name LIKE:'%'+filter+'%'];
        return contacts;
    }


}

