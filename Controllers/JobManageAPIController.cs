using JobManagement.Models.Dto;
using JobManagement.Repository.AccountServices;
using JobManagement.Repository.IAccountServices;
using JobManagement.Repository.IJobManageServices;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JobManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobManageAPIController : ControllerBase
    {
        protected ResponseDto _response;
        private IJobManageRepository _jobManageRepository;
        public JobManageAPIController(ResponseDto response, IJobManageRepository jobManageRepository)
        {
            _response = response;
            _jobManageRepository = jobManageRepository;
        }
        [HttpPost]
        [Route("createjob")]
        public async Task<object> Post([FromBody] JobDetailDto jobDetailDto)
        {
            try
            {
                string result = await _jobManageRepository.CreateJob(jobDetailDto);
                _response.Result = result;
            }
            catch (Exception ex)
            {
                _response.IsSuccess = false;
                _response.ErrorMessages = new List<string> { ex.Message.ToString() };
            }
            return _response;
        }
    }
}
