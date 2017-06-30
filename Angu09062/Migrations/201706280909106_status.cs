namespace Angu09062.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class status : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Tasks", "Status", c => c.Byte(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Tasks", "Status");
        }
    }
}
