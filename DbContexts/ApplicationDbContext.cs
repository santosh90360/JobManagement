using JobManagement.Models;
using Microsoft.EntityFrameworkCore;
namespace JobManagement.DbContexts
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        public DbSet<Registration> Registrations { get; set; }

    }
}
