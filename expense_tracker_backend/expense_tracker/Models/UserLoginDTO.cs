using System.ComponentModel.DataAnnotations;
namespace expense_tracker.Models
{
    public class UserLoginDTO
    {
        [Key]
        public string Username { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public string token { get; set; }=string.Empty;
    }
}
