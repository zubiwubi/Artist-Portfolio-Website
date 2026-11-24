// A DTO, a data transfer object, is a shape made specifically for crossing the boundary between your API and whoever is calling it.
// ProductDto is what we send back. CreateProductDto is what we receive.

namespace Catalog.Api.Dtos;

public record ProductDto
{
    public int Id { get; set; }
    public string Title { get; set; }
    public decimal Price { get; set; }
}

public record CreateProductDto
{
    public string Title { get; init; } = string.Empty;
    public decimal Price { get; init; }
}

// with this set-up, it will take whatever data the client gives as long as it has an id, title and price. (so as long as the shape fits)