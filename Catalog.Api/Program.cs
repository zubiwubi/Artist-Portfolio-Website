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

var frontendUrl = builder.Configuration["Frontend:Url"]
    ?? throw new InvalidOperationException("Missing configuration value Frontend:Url");

builder.Services.AddCors(options => options.AddDefaultPolicy(policy => policy.WithOrigins(frontendUrl)
                                                                             .AllowAnyHeader()
                                                                             .AllowAnyMethod()));
// withOrigins is where you can give it a list of origins that get the permission header
// AddDefaultPolicy defines the one policy this app has
// AllowAnyHeader and AllowAnyMethod open up the what for that one trusted who

var app = builder.Build();

await SeedData.InitializeAsync(app);

app.UseCors(); // UseCors() without arguments applies it to every request.

app.MapControllers(); // MapControllers on app hooks each action up to its URL: how requests are handled. Without it: the request is a 404

app.Run();
