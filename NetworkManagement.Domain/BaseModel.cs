using System;
using System.ComponentModel.DataAnnotations;

namespace NetworkManagement.Domain
{
    public class BaseModel
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public DateTime CreatedDate { get; set; }

        [Required]
        public int CreatedBy { get; set; }

        public DateTime? UpdatedDate { get; set; }

        public int? UpdatedBy { get; set; }
    }
}
