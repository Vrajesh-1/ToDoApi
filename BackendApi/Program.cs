using Microsoft.EntityFrameworkCore;
using ToDoApi.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseInMemoryDatabase("ToDoList"));
builder.Services.AddControllers();

// Enable CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllOrigins", builder =>
    {
        builder.AllowAnyOrigin() // Allows all origins
               .AllowAnyMethod() // Allows all HTTP methods
               .AllowAnyHeader(); // Allows all headers
    });
});

var app = builder.Build();

// Use the CORS policy
app.UseCors("AllowAllOrigins");

app.UseAuthorization();
app.MapControllers();

app.Run();
