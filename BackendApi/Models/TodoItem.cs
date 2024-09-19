namespace ToDoApi.Models
{
    public class TodoItem
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty; // Ensure it's not null
        public bool IsCompleted { get; set; }
    }
}
