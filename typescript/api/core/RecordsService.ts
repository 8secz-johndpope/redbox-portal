import StorageService from "./StorageService";

interface RecordsService extends StorageService {

  triggerPreSaveTriggers(oid: string, record: any, recordType: object, mode: string, user): Promise<any>;
  triggerPostSaveTriggers(oid: string, record: any, recordType: object, mode: string, user): void;
  triggerPostSaveSyncTriggers(oid: string, record: any, recordType: any, mode: string, user: object, response: any) : any;
  hasEditAccess(brand, user, roles, record): boolean;
  hasViewAccess(brand, user, roles, record): boolean;
  appendToRecord(targetRecordOid: string, linkData: any, fieldName: string, fieldType: string, targetRecord: any): Promise<any>
  updateWorkflowStep(currentRec, nextStep): void;
  getAttachments(oid: string, labelFilterStr?: string): Promise<any>;

  getRecords(workflowState, recordType, start, rows, username, roles, brand, editAccessOnly, packageType, sort) : Promise<any>;
  exportAllPlans(username, roles, brand, format, modBefore, modAfter, recType) : Promise<string>;
  // Probably to be retired or reimplemented in a different service
  checkRedboxRunning(): Promise<any>;

}
export default RecordsService
