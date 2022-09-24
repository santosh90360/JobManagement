using JobManagement.Models;
using Microsoft.AspNetCore.Mvc;

namespace JobManagement.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }
        [HttpGet]
        [Route("getproduct")]
        public IEnumerable<Product> GetProduct()
        {
            List<Product> products = new List<Product>();
            products.Add(new Product() { productId = 1001, productName = "Laptops", quantity = 120 });
            products.Add(new Product() { productId = 1002, productName = "Mobile", quantity = 320 });
            products.Add(new Product() { productId = 1003, productName = "Desktop", quantity = 300 });
            return products;
        }
    }
}