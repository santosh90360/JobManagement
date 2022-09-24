using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace JobManagement.Migrations
{
    public partial class updateRegistrationTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "UserType",
                table: "Registrations",
                type: "int",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserType",
                table: "Registrations");
        }
    }
}
