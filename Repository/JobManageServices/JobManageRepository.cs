using AutoMapper;
using JobManagement.DbContexts;
using JobManagement.Models;
using JobManagement.Models.Dto;
using JobManagement.Repository.IJobManageServices;

namespace JobManagement.Repository.JobManageServices
{
    public class JobManageRepository : IJobManageRepository
    {
        private readonly ApplicationDbContext _db;
        private IMapper _mapper;
        public JobManageRepository(ApplicationDbContext applicationDbContext, IMapper mapper)
        {
            _db = applicationDbContext;
            _mapper = mapper;
        }
        public async Task<string> CreateJob(JobDetailDto jobDetailDto)
        {
            JobDetail jobDetail = _mapper.Map<JobDetailDto, JobDetail>(jobDetailDto);
            jobDetail.IsDelete = false;
            jobDetail.IsActive = true;
            jobDetail.EntryDate = DateTime.Now;
            jobDetail.ModifiedDate = DateTime.Now;
            string result = "Job Save Failed. Try again";
            try
            {
                if (jobDetail.JobId > 0)
                {
                    _db.Update(jobDetail);
                }
                else
                {
                    _db.JobDetails.Add(jobDetail);
                }
                int temp = await _db.SaveChangesAsync();
                if (temp == 0)
                {
                    result = "Job Save Failed. Try again";
                }
                else
                {
                    result = "Sucess! Job Added Successfully.";
                }
            }
            catch (Exception ex)
            {
                result = ex.Message;
                return _mapper.Map<string>(result);
            }
            return _mapper.Map<string>(result);
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
