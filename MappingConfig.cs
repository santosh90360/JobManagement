using AutoMapper;
using JobManagement.Models;
using JobManagement.Models.Dto;

namespace JobManagement
{
    public class MappingConfig
    {
        public static MapperConfiguration RegisterMaps()
        {
            var mappingConfig = new MapperConfiguration(config =>
            {
                config.CreateMap<RegistrationDto, Registration>().ReverseMap();
              
            });
            return mappingConfig;
        }
    }
}
