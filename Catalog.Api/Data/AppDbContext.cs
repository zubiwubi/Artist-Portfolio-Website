using Catalog.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace Catalog.Api.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { } 

    public DbSet<Product> Products => Set<Product>();
}

// The DbContext is our session with the database. Each DbSet on it is one table: 
// Products is the products table. When we ask Products for data, Entity Framework turns that into SQL and uses that on the real table.
// The constructor takes its options (which database, which connection) from outside. We'll hand it those options in Program.cs
