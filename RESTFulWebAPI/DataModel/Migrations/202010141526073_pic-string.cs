namespace DataModel.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class picstring : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Students", "Picture", c => c.String());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Students", "Picture", c => c.Binary());
        }
    }
}
