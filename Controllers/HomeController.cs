using DiasFestivosWeb.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using System.Diagnostics;

namespace DiasFestivosWeb.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public List<SelectListItem> ListaValues { get; } = new List<SelectListItem>
        {
            new SelectListItem {Value = "MX", Text = "Mexico"},
            new SelectListItem {Value = "US", Text = "Estados Unidos"},
            new SelectListItem {Value = "FR", Text = "Francia"},

        };


        public IActionResult Index()
        {


            ViewBag.ListItem = ListaValues;

            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
