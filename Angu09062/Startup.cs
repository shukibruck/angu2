using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Angu09062.Startup))]
namespace Angu09062
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
