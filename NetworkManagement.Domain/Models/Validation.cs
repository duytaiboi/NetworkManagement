using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace NetworkManagement.Domain.Models
{
    public class Validation
    {
        [Key]
        public int ValidationId { get; set; }

        public string Name { get; set; }
    }
}
