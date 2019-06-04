namespace Model.EF
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Model")]
    public partial class Model
    {
        [Key]
        [Display(Name = "Model:")]
        public int ID_Mdel { get; set; }

        [StringLength(50)]
        public string Ten_Model { get; set; }

        public int? IDHang { get; set; }

        public virtual Hang Hang { get; set; }
    }
}
