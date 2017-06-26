using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Angu09062.DAL
{
    public class RepositoryContex : DbContext
    {
        public RepositoryContex()
            : base("DefaultConnection")
        {
        }

        public DbSet<Tasks> Tasks { get; set; }
    }
}