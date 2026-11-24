using Catalog.Api.Services;
using Catalog.Api.Models;
using Catalog.Api.Repositories;
using Catalog.Api.Dtos;
using Catalog.Api.Controllers;

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

    public async Task<ProductDto> CreateAsync(CreateProductDto dto)
    {
        var product = new Product // makes a new Product and copies the title and price across from the DTO
        {
            Title = dto.Title,
            Price = dto.Price
        };

        _products.Add(product); //  hands the product to the repository.  With Add, Entity Framework is only taking notes. No saving yet.
        await _products.SaveChangesAsync(); // <-- IT SAVES HERE

        return ToDto(product);
    }

    public async Task<bool> DeleteAsync(int id)
    {
        var product = await _products.GetByIdAsync(id);
        if (product is null) return false;

        _products.Delete(product);
        await _products.SaveChangesAsync();

        return true;
    } // It looks the product up first with _products.GetByIdAsync(id). If there's nothing with that id, it returns false, so the controller can turn that into a "not found".

    private static ProductDto ToDto(Product product) => new()
    {
        Id = product.Id,
        Title = product.Title,
        Price = product.Price
    };

    public async Task<ProductDto?> UpdateAsync(int id, UpdateProductDto dto)
    {
        var product = await _products.GetByIdAsync(id);
        if (product is null) return null;

        product.Title = dto.Title;
        product.Price = dto.Price;
        await _products.SaveChangesAsync();
        return ToDto(product);
    }
    //It asks the repository for the product. 
    //If there's none, it returns null, and the controller will turn that into a 404
}