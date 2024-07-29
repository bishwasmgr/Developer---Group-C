using System.ComponentModel.DataAnnotations;

namespace MvcMovie.Models
{
    public class SearchViewModel
    {
        [Required(ErrorMessage = "The search query is required.")]
        [StringLength(100, ErrorMessage = "The search query must be less than 100 characters.")]
        public string Query { get; set; }

        [StringLength(50, ErrorMessage = "The genre must be less than 50 characters.")]
        public string Genre { get; set; }
    }
}
