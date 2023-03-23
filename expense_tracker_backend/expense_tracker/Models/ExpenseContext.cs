using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
namespace expense_tracker.Models
{
    public class ExpenseContext : DbContext
    {
        public ExpenseContext(DbContextOptions<ExpenseContext> options) : base(options)
        {
        }
        public DbSet<Expense> Expenses => Set<Expense>();
        public DbSet<User> Users => Set<User>();

        public DbSet<UserLoginDTO> UserLoginDTOs { get; set; } = null!;
        public DbSet<UserRegisterDTO> UserRegisterDTOs { get; set;} = null!;
    }
}