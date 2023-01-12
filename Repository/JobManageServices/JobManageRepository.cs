using JobManagement.Models.Dto;
using JobManagement.Repository.IJobManageServices;

namespace JobManagement.Repository.JobManageServices
{
    public class JobManageRepository : IJobManageRepository
    {
        public Task<string> CreateJob(JobDetailDto registrationDto)
        {
            throw new NotImplementedException();
        }

        public Task<string> DeleteJob(JobDetailDto registrationDto)
        {
            throw new NotImplementedException();
        }

        public Task<JobDetailDto> GetJob(int jobId)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<JobDetailDto>> GetJobs()
        {
            throw new NotImplementedException();
        }

        public Task<string> UpdateJob(JobDetailDto registrationDto)
        {
            throw new NotImplementedException();
        }
    }
}
