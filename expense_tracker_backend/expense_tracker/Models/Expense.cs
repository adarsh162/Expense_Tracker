namespace expense_tracker.Models
{
    public class Expense
    {
        public long Id { get; set; }
        public string? Name { get; set; }
        public long Amount { get; set; }
        public DateTime Date { get; set; }
        public string? Category { get; set; }

        public long Uid { get; set; }
    }
}
