using Microsoft.AspNetCore.Mvc;
using expense_tracker.Data;
using expense_tracker.Models;

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
            var res = await _authRepo.Register(new User() { UserName = userDTO.Username},userDTO.Password);
            if(res == 0)
            {
                return BadRequest($"Cannot reister {userDTO.Username}");
            }

            return Ok(userDTO);
        }

        [HttpPost("Login")]
        public async Task<ActionResult<UserLoginDTO>> Login(UserLoginDTO userDTO)
        {
            var res= await _authRepo.Login(userDTO.Username,userDTO.Password);
            if (res == null)
            {
                return BadRequest($"Incorrect username or password!");
            }
            userDTO.token = res;
            return Ok(userDTO);
        }

    }
}
