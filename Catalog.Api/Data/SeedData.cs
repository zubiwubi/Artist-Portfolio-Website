using Catalog.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace Catalog.Api.Data;

public static class SeedData
{
    public static async Task InitializeAsync(WebApplication app)
    {
        using var scope = app.Services.CreateScope();
        var context = scope.ServiceProvider.GetRequiredService<AppDbContext>();

        if (await context.Products.AnyAsync())
        {
            return;
        }

        context.Products.AddRange(
            new Product { Title = "Seeded Laptop", Price = 666 },
            new Product { Title = "Organic Phone", Price = 667 },
            new Product { Title = "Plantphones", Price = 668 }
        );

        await context.SaveChangesAsync();
    }
}