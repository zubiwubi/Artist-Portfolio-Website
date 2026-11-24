using Catalog.Api.Services;
using Catalog.Api.Models;
using Catalog.Api.Repositories;
using Catalog.Api.Dtos;

namespace Catalog.Api.Services;

public class ProductService : IProductService
{
    private readonly IRepository<Product> _products;

    public ProductService(IRepository<Product> products)
    {
        _products = products;
    }

    public async Task<List<ProductDto>> GetAllAsync()
    {
        var products = await _products.GetAllAsync();
        return products.Select(ToDto).ToList();
    }     // GetAllAsync(): Asks the repository for every Product, 
    // then uses .Select(ToDto) to turn each one into a ProductDto, and .ToList() to collect them back into a list.

    public async Task<ProductDto> GetByIdAsync(int id)
    {
        var product = await _products.GetByIdAsync(id);
        return product is null ? null : ToDto(product);
    } // GetByIdAsync(int id): Gets a single product by id, or returns null 
    // (to the controller, which can then decide what to do with that).

    private static ProductDto ToDto(Product product) => new()
    {
        Id = product.Id,
        Title = product.Title,
        Price = product.Price
    };
}