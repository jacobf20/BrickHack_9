using System.ComponentModel.DataAnnotations;

namespace RunningThoughtsBackend
{
    public class User
    {
        [Required]
        public String? Username { get; set; }

        [Required]
        public String? Password { get; set; }

        [Required]
        public String? FirstName { get; set; }

        [Required]
        public String? LastName { get; set; }
    }
}