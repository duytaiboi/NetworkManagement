using System;
using System.Collections.Generic;
using System.Text;

namespace NetworkManagement.Domain.Models
{
    public class Field : BaseModel
    {
        public int Order { get; set; }

        //public FieldTypeEnum Type { get; set; }

        public int MaximumChar { get; set; }
    }
}
