using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using System.Data.SQLite;
using System.Net;

namespace RunningThoughtsBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly ILogger<UsersController> _logger;
        private SQLiteConnection conn = new SQLiteConnection("DataSource=../RunningThoughtsDB/runningThoughts.sqlite");
        public UsersController(ILogger<UsersController> logger)
        {
            _logger = logger;
        }

        [Route("GetUser/{username}")]
        [HttpGet(Name = "GetUser")]
        public User GetUser(string? username)
        {
            User user = new User();
            try
            {
                conn.Open();
                SQLiteCommand command = conn.CreateCommand();
                command.CommandText = "SELECT * FROM USERS WHERE Username = '" + username +"'";
                using (SQLiteDataReader reader = command.ExecuteReader())
                {
                    reader.Read();
                    user.Username = reader.GetString(0);
                    user.Password = reader.GetString(1);
                    user.FirstName = reader.GetString(2);
                    user.LastName = reader.GetString(3);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
            }
            finally 
            { 
                conn.Close(); 
            }
            return user;
        }

        [Route("GetUsers")]
        [HttpGet(Name = "GetUsers")]
        public IEnumerable<User> GetUsers()
        {
            List<User> users = new List<User>();
            try
            {
                conn.Open();
                SQLiteCommand command = conn.CreateCommand();
                command.CommandText = "SELECT * FROM USERS";
                using (SQLiteDataReader reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        var user = new User();
                        user.Username = reader.GetString(0);
                        user.Password = reader.GetString(1);
                        user.FirstName = reader.GetString(2);
                        user.LastName = reader.GetString(3);
                        users.Add(user);
                    }
                }
            }
            catch (Exception e)
            {
                _logger.LogError(e.Message);
            }
            finally
            {
                conn.Close();
            }
            return users;
        }

        [Route("AddUser")]
        [HttpPost(Name = "AddUser")]
        public HttpStatusCode AddUser([FromBody]User user)
        {
            var existingUser = GetUser(user.Username);
            if (existingUser.Username == null)
            {
                try
                {
                    conn.Open();
                    SQLiteCommand command = conn.CreateCommand();
                    command.CommandText = "INSERT INTO USERS VALUES ('" 
                        + user.Username + "','" + user.Password + "','" 
                        + user.FirstName + "','" +user.LastName +"')";
                    if (command.ExecuteNonQuery() == 1)
                    {
                        return HttpStatusCode.OK;
                    }
                    else
                    {
                        return HttpStatusCode.InternalServerError;
                    }
                }
                catch (Exception e)
                {
                    _logger.LogError(e.Message);
                }
                finally
                {
                    conn.Close();
                }
            }
            return HttpStatusCode.BadRequest;
        }
    }
}