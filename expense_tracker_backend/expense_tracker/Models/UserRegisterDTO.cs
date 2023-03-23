using System.ComponentModel.DataAnnotations;

namespace expense_tracker.Models
{
    public class UserRegisterDTO
    {
        [Key]
        public string Username { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
    }
}
