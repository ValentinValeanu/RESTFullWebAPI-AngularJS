namespace DataModel.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Student_Pic : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Students", "Picture", c => c.Binary());
            DropColumn("dbo.Students", "Content");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Students", "Content", c => c.Binary());
            DropColumn("dbo.Students", "Picture");
        }
    }
}
