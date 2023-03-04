public with sharing class AccountRecords {
    @AuraEnabled(cacheable=true)
    public static list<Account> allAccounts(){
        list<Account> acList=[SELECT id,Name FROM Account];
        return acList;
    }

    

}