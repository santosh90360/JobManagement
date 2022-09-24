using AutoMapper;
using JobManagement.DbContexts;
using JobManagement.Models;
using JobManagement.Models.Dto;
using JobManagement.Repository.IAccountServices;
using Microsoft.EntityFrameworkCore;

namespace JobManagement.Repository.AccountServices
{
    public class AccountServiceRepository : IAccountServiceRepository
    {
        private readonly ApplicationDbContext _db;
        private IMapper _mapper;
        public AccountServiceRepository(ApplicationDbContext applicationDbContext, IMapper mapper)
        {
            _db = applicationDbContext;
            _mapper = mapper;
        }
        public async Task<string> CreateUser(RegistrationDto registrationDto)
        {
            Registration registration = _mapper.Map<RegistrationDto, Registration>(registrationDto);
            registration.IsDelete = false;
            registration.IsActive = true;
            registration.EntryDate = DateTime.Now;
            registration.ModifiedDate = DateTime.Now;            
            string result = "Registration Failed. Try again";
            try
            {
                if (registration.Id > 0)
                {
                    _db.Update(registration);
                }
                else
                {
                    _db.Registrations.Add(registration);
                }
                int temp = await _db.SaveChangesAsync();
                if (temp == 0)
                {
                    result = "Registration Failed. Try again";
                }
                else
                {
                    result = "Sucess! You are successfully Registrated with us";
                }
            }
            catch(Exception ex)
            {
                result = ex.Message;
                return _mapper.Map<string>(result);
            }
            return _mapper.Map<string>(result);
        }

        public async Task<RegistrationDto> LoginUser(RegistrationDto registrationDto)
        {
            Registration registration = new Registration();
            registration =await _db.Registrations.Where(u => u.Email == registrationDto.Email && u.Password == registrationDto.Password).FirstOrDefaultAsync();
            return _mapper.Map<RegistrationDto>(registration);
        }
    }
}
