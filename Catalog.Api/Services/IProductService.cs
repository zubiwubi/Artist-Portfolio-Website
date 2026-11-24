using Catalog.Api.Dtos;

namespace Catalog.Api.Services;

public interface IProductService
{
    Task<List<ProductDto>> GetAllAsync();
    Task<ProductDto?> GetByIdAsync(int id);
}