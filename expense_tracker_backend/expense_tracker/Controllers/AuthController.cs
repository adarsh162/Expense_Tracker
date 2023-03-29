using Microsoft.AspNetCore.Mvc;
using expense_tracker.Data;
using expense_tracker.Models;
using Microsoft.EntityFrameworkCore;

namespace expense_tracker.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepo _authRepo;
       public AuthController(IAuthRepo authRepo)
        {
            _authRepo = authRepo;
        }



        [HttpPost("Register")]
        public async Task<ActionResult<int>> Register(UserRegisterDTO userDTO)
        {
            var res = await _authRepo.Register(new User() { UserName = userDTO.Username, Email = userDTO.Email , Age = userDTO.Age , Phone = userDTO.Phone },userDTO.Password);
            if(res == 0)
            {
                return BadRequest($"Cannot reister {userDTO.Username}");
            }

            return Ok(userDTO);
        }

        [HttpPost("Login")]
        public async Task<ActionResult<User>> Login(UserLoginDTO userDTO)
        {
            var res= await _authRepo.Login(userDTO.Username,userDTO.Password);
            if (res == null)
            {
                return BadRequest($"Incorrect username or password!");
            }
            return Ok(res);
        }

        [HttpPut("{username}")]
        public async Task<IActionResult> PutExpense(string username, UserRegisterDTO user)
        {

            if (username != user.Username)
            {
                return BadRequest();
            }
            User user1 = await _authRepo.Update(username, new User() { UserName = user.Username, Email = user.Email, Age = user.Age, Phone = user.Phone });
            return Ok(user1);

             
        }


    }
}
