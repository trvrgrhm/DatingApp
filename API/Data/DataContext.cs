﻿using API.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Data
{
    public class DataContext : DbContext
    {
        public DbSet<AppUser> Users { get; set; }
        public DataContext(DbContextOptions options) : base(options)
        {
        }

    }
}
