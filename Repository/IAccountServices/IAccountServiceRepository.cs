using JobManagement.Models.Dto;
namespace JobManagement.Repository.IAccountServices
{
    public interface IAccountServiceRepository
    {
        Task<string> CreateUser(RegistrationDto registrationDto);
        Task<RegistrationDto> LoginUser(RegistrationDto registrationDto);
    }
}
