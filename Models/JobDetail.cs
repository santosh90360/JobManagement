using System.ComponentModel.DataAnnotations;

namespace JobManagement.Models
{
    public class JobDetail
    {
        [Key]
        public int JobId { get; set; }
        public string? Email { get; set; }
        public string? JobTitle { get; set; }
        public string? JobType { get; set; }
        public string? JobCategory { get; set; }
        public string? Skills { get; set; }
        public string? Experience { get; set; }
        public string? Location { get; set; }
        public string? Description { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? Enddate { get; set; }
        public string? CompanyName { get; set; }
        public string? CompanyDescription { get; set; }
        public string? CompanyContactNo { get; set; }
        public string? ContactPerson { get; set; }
        public string? CompanyAddress { get; set; }
        public string? Website { get; set; }
        public DateTime? EntryDate { get; set; }
        public string? EntryBy { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public string? ModifiedBy { get; set; }
        public bool IsActive { get; set; }
        public bool IsDelete { get; set; }
        public bool IsRequirementClosed { get; set; }

    }
}
