﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using DataModel;
using Microsoft.AspNetCore.Cors;
using Newtonsoft.Json;

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
        [HttpPost]
        public void Post(Student newStudent)
        {
            dataContext.Students.Add(newStudent);
            dataContext.SaveChanges();
        }

        // PUT: api/Test/5
        [HttpPut]
        public void Put(Student updStudent)
        {
            dataContext.Students.Remove(dataContext.Students.First(x => x.StudentID == updStudent.StudentID));

            dataContext.Students.Add(updStudent);

            dataContext.SaveChanges();
        }

        // DELETE: api/Test/5
        public void Delete(int id)
        {
        }
    }
}
