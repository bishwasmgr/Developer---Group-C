using System;
using System.ComponentModel.DataAnnotations;

public class Movie
{
    public int Id { get; set; }

    [Required]
    public string Name { get; set; }

    [Required]
    [DataType(DataType.Date)]
    public DateTime ReleaseDate { get; set; }

    [Required]
    public string Director { get; set; }

    [Required]
    [EmailAddress]
    public string ContactEmail { get; set; }

    [Required]
    public Language Language { get; set; }

    [Required]
    public int CategoryId { get; set; }
    public Category Category { get; set; }
}

public enum Language
{
    English,
    Japanese,
    Chinese
}
