using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataModel
{
    public class DataContext : DbContext
    {
        public DataContext() : base("StudentsDB")
        {
        }

        public DbSet<Student> Students { get; set; }
    }
}
