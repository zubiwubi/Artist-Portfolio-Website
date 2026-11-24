using Catalog.Api.Data;
using Catalog.Api.Repositories;
using Catalog.Api.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("Default")));

// dependency injection. // Scoped means one instance per web request. 

builder.Services.AddScoped(typeof(IRepository<>), typeof(Repository<>)); 
//says: whenever something asks for an IRepository<Something>, give it a Repository<Something>.
//That one line works for Product and every entity we add later.
builder.Services.AddScoped<IProductService, ProductService>(); //does the same for the service: ask for IProductService, get a ProductService.

builder.Services.AddControllers();// + app.MapControllers(); are the two lines that find our controller and hook its methods up to their URLs. 

var app = builder.Build();

await SeedData.InitializeAsync(app);

app.MapControllers();

app.Run();
