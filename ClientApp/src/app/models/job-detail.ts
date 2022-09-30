export interface JobDetail {
  jobId: number;
  email: string | null;
  jobTitle: string | null;
  jobType: string | null;
  jobCategory: string | null;
  skills: string | null;
  experience: string | null;
  location: string | null;
  description: string | null;
  startDate: string | null;
  enddate: string | null;
  companyName: string | null;
  companyDescription: string | null;
  companyContactNo: string | null;
  contactPerson: string | null;
  companyAddress: string | null;
  website: string | null;
  entryDate: string | null;
  entryBy: string | null;
  modifiedDate: string | null;
  modifiedBy: string | null;
  isActive: boolean;
  isDelete: boolean;
  isRequirementClosed: boolean;
}
