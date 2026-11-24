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

    [HttpDelete("{id:int}")] // handles DELETE api/products/5
    public async Task<IActionResult> Delete(int id)
    {
        var deleted = await _products.DeleteAsync(id);
        return deleted? NoContent() : NotFound();
    }
    // If the service deleted something: 204 No Content
    // If there was nothing: 404 Not Found

    [HttpPut("{id:int}")] //  handles PUT api/products/5
    public async Task<ActionResult<ProductDto>> Update(int id, UpdateProductDto dto)
    {
        var updated = await _products.UpdateAsync(id, dto);
        return updated is null ? NotFound() : Ok(updated);
    }
    //Note that PUT means "replace the whole resource with what I am sending".
}