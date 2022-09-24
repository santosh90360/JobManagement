using JobManagement.Models;
using JobManagement.Models.Dto;
using JobManagement.Repository.IAccountServices;
using Microsoft.AspNetCore.Mvc;

namespace JobManagement.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AccountAPIController : ControllerBase
    {

        protected ResponseDto _response;
        private IAccountServiceRepository _accountServiceRepository;
        public AccountAPIController(IAccountServiceRepository accountServiceRepository)
        {
            _accountServiceRepository=accountServiceRepository;
            this._response = new ResponseDto();
        }
        [HttpPost]
        [Route("createuseraccount")]
        public async Task<object> Post([FromBody] RegistrationDto registrationDto)
        {
            try
            {
                string result = await _accountServiceRepository.CreateUser(registrationDto);
                _response.Result = result;
            }
            catch (Exception ex)
            {
                _response.IsSuccess = false;
                _response.ErrorMessages = new List<string> { ex.Message.ToString() };
            }
            return _response;
        }
        [HttpGet]
        [Route("getproduct")]
        public IEnumerable<Product> Get()
        {
            List<Product> products = new List<Product>();
            products.Add(new Product() { productId = 1001, productName = "Laptops",quantity= 120 });
            products.Add(new Product() { productId = 1002, productName = "Mobile", quantity = 320 });
            products.Add(new Product() { productId = 1003, productName = "Desktop", quantity = 300 });
            return products;
        }
    }
}
