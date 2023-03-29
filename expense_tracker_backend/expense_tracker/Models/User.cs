namespace expense_tracker.Models
{
    public class User
    {
        public long Id { get; set; }
        public string UserName { get; set; } = string.Empty;

        public string Email { get; set; } = string.Empty;

        public int Age { get; set; } = 0;

        public int Phone { get; set; } = 0;


        public byte[] PasswordHash { get; set; }= Array.Empty<byte>();

        public byte[] PasswordSalt { get; set; } = Array.Empty<byte>();
        public List<Expense>? Expenses { get; set; }
    }
}
