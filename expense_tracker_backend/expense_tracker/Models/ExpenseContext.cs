using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
namespace expense_tracker.Models
{
    public class ExpenseContext : DbContext
    {
        public ExpenseContext(DbContextOptions<ExpenseContext> options) : base(options)
        {
        }
        public DbSet<Expense> Expenses { get; set; } = null!;
    }
}