using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using Angu09062.DAL;

namespace Angu09062.Controllers
{
    public class WebApiController : ApiController
    {

        [HttpGet]
        [Route("WebApi/GetEvents")]
        public IHttpActionResult GetEvents()
        {
            var result = new List<Tasks>();
            using (var contex = new RepositoryContex())
            {
                result = contex.Tasks.ToList();
            }

            return Ok(result);
        }


    }
}
