using JobManagement.Models.Dto;

namespace JobManagement.Repository.IJobManageServices
{
    public interface IJobManageRepository
    {
        Task<string> CreateJob(JobDetailDto registrationDto);
        Task<string> UpdateJob(JobDetailDto registrationDto);
        Task<string> DeleteJob(JobDetailDto registrationDto);
        Task<JobDetailDto> GetJob(int jobId);
        Task<IEnumerable<JobDetailDto>> GetJobs();
    }
}
