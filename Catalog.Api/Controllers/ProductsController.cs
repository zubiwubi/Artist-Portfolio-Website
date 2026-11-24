using Catalog.Api.Dtos;
using Catalog.Api.Models;
using Catalog.Api.Services;
using Microsoft.AspNetCore.Mvc;

namespace Catalog.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly IProductService _products;

    public ProductsController(IProductService product)
    {
        _products = product;
    }

    [HttpGet]
    public async Task<ActionResult<List<ProductDto>>> GetAll() => Ok(await _products.GetAllAsync());

    [HttpGet("{id:int}")]
    public async Task<ActionResult<ProductDto>> GetById(int id)
    {
        var product = await _products.GetByIdAsync(id);
        return product is null ? NotFound() : Ok(product);
    }

    [HttpPost]
    public async Task<ActionResult<ProductDto>> Create(CreateProductDto dto)
    {
        var created = await _products.CreateAsync(dto);
        return CreatedAtAction(nameof(GetById), new { id = created.Id }, created);
    }
}