public with sharing class leadRecords {
    @AuraEnabled(cacheable=true)
    public static list<Lead> createLead(){
   
       list<Lead> leadList=[Select LastName,Status,Company from lead WHERE Status='Closed - Converted'];
       return leadList;
    } 

}