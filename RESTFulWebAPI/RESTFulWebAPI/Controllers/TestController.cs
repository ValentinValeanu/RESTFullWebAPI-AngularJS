using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using DataModel;

namespace RESTFulWebAPI.Controllers
{
    public class TestController : ApiController
    {
        private DataContext dataContext;

        public TestController()
        {
            dataContext = new DataContext();
        }

        // GET: api/Test
        public IEnumerable<Student> Get()
        {
            return dataContext.Students.ToList();
        }

        // GET: api/Test/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Test
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Test/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Test/5
        public void Delete(int id)
        {
        }
    }
}
