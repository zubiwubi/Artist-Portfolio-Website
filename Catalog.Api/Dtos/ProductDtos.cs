// A DTO, a data transfer object, is a shape made specifically for crossing the boundary between your API and whoever is calling it.

namespace Catalog.Api.Dtos;

public record ProductDto
{
    public int Id { get; set; }
    public string Title { get; set; }
    public decimal Price { get; set; }
}