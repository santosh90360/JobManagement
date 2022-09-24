using System.ComponentModel.DataAnnotations;

namespace JobManagement.Models
{
    public class Product
    {
        [Key]
        public int productId { get; set; }
        public string productName { get; set; }
        public int quantity { get; set; }
    }
}
