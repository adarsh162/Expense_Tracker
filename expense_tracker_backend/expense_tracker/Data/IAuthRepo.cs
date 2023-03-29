using expense_tracker.Models;
using Microsoft.AspNetCore.Mvc;

namespace expense_tracker.Data
{
    public interface IAuthRepo
    {
        Task<int> Register(User user, string password);
        Task<User> Login(string username, string password);

        Task<bool> UserExists(string username);

        Task<User> Update(string username, User user);

    }
}
